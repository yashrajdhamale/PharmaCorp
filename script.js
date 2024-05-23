document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('productList');
            data.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                    </div>
                `;
                productList.appendChild(productItem);
            });
        });
});

function searchProducts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const productItems = document.getElementsByClassName('product-item');

    for (let i = 0; i < productItems.length; i++) {
        const productName = productItems[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (productName.indexOf(filter) > -1) {
            productItems[i].style.display = '';
        } else {
            productItems[i].style.display = 'none';
        }
    }
}