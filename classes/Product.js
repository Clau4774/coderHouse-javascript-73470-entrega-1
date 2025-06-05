class Product {
    id = Math.floor(Math.random()*1000);
    nombre;
    precio;
    cantidad = 1;
    subtotal;

    constructor(product) {
        this.nombre = product.nombre;
        this.precio = product.precio;
        this.subtotal = this.precio * this.cantidad;
    }

    addOne = () => {
        this.cantidad += 1;
        this.calculateSubTotal();
    };

    resetQuantity = () => {
        this.cantidad = 1;
        this.calculateSubTotal();
    }

    getPrice = () => this.precio;
    getName = () => this.nombre;
    getCantidad = () => this.cantidad;
    getSubTotal = () => this.subtotal;
 
}

export {Product};