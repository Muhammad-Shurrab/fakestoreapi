// Constructor to generate product objects
class Product {
    constructor(title, price, description, image) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

// Function to fetch data from API and process it
async function fetchData() {
    const apiUrl = 'https://fakestoreapi.com/products';
    // try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const products = data.slice(0, 20); // Limiting to 20 products

    const productObjects = products.map(product => {
        return new Product(product.title, product.price, product.description, product.image);
    });

    renderProducts(productObjects);
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
}

// Function to render product cards in the DOM
function renderProducts(products) {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = 
            <img src="${product.image}" alt="${product.title}">
            <div class="card-body">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
            </div>
        ;

        productList.appendChild(card);
    });
}

// Call fetchData() to start the process
fetchData();