class ProductsList {
    products;

    constructor(products) {
        this.products = products;
    }

    addProduct = (product) => this.products = [...this.products, product];

    showProducts = () => this.products;

    getProduct = productName => this.products.find(product => product.nombre === productName);
}

 export {ProductsList};