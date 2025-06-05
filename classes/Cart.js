class Cart {
    cart = [];
    productsQuantity;
    cartTotal;
    cartSubtotal;
    constructor () {}

    showCart = () => this.cart;

    addToCart = product => {
        const findProduct = this.cart.find(actualProduct => actualProduct.nombre === product.nombre);
            console.log("findProduct", findProduct)
        if(findProduct) {
            findProduct.cantidad += 1;
            //findProduct.calculateSubTotal();
            console.log('find if precio' , findProduct.precio);
            console.log('find if cantidad', findProduct.cantidad);
            findProduct.subtotal = findProduct.cantidad * findProduct.precio;
            console.log(this.cart)
            this.cartSubtotal = this.showSubTotal();
            return 
        }

        return this.cart = [...this.cart, {...product}];
    }

    showProductsQuantity = () => this.cart.length;

    showSubTotal = () => this.cart.reduce((prev, actual) => prev + actual.subtotal, 0);
    
    showItemsString = () => this.showCart().map(elem => elem.cantidad + ' ' + elem.nombre + ' x precio = $' + elem.precio + ' = $'+ elem.subtotal).join('\n');

    showSubTotalMessage = () => alert(`Este es el resumen de su compra por el momento:
${this.showItemsString()}
    
    Su total es: $${this.showSubTotal()}`);

    finishPurchase = () => `Compra finalizada, este es su resumen:
${this.showItemsString()}
    
    Su total es: $${this.showSubTotal()}`

    cleanCart = () => this.cart = [];
}

export {Cart};