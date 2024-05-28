
document.addEventListener('DOMContentLoaded', () => {
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');

    brandFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);

    function applyFilters() {
        const brand = brandFilter.value;
        const price = priceFilter.value;

        fetch(`/actions/products/filter?brand=${brand}&price=${price}`)
            .then(response => response.json())
            .then(data => {

                const productList = document.getElementById('product-list');
                productList.innerHTML = '';
                data.products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card');
                    productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
          `;
                    productList.appendChild(productCard);
                });

                const pagination = document.querySelector('.pagination');
                pagination.innerHTML = '';
                for (let page = 1; page <= data.totalPages; page++) {
                    const pageLink = document.createElement('a');
                    pageLink.href = `?page=${page}`;
                    pageLink.classList.add(page === data.currentPage ? 'active' : '');
                    pageLink.textContent = page;
                    pagination.appendChild(pageLink);
                }
            });
    }
});
