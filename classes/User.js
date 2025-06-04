class User {
    nombre;
    edad;
    cart;
    dinero;
    objetos = [];
    comprasRealizadas = [];

    constructor(user) {
        this.nombre = user.nombre;
        this.edad = user.edad;
        this.cart = user.cart;
        this.dinero = user.dinero
    }

    getNombre = () => this.nombre;
    getEdad = () => this.edad;
    getDinero = () => this.dinero;
    getCart = () => this.cart.showCart();
    getObjetos = () => this.objetos;
    getCartSubtotal = () => this.cart.showSubTotal();
    getComprasRealizadas = () => this.comprasRealizadas;

    addProductInCart = product => this.cart.addToCart(product);

    selectProduct = (productList, productOptions) => {
        const producto = Number(prompt(`Escriba el número del producto: 
${productList.showProducts().map((product, index) => `${index + 1}- ${product.getName()}: $${product.getPrice()}`).join('\n')}`));

        if (producto > productList.showProducts().length || producto < 0 || !producto)  {
            alert('Ha elegido una opción no permitida');
            console.log("typeof producto if", typeof producto);
            return;
        }

        this.addProductInCart(productOptions[producto]);
        this.showCartSubtotal();
        return;
    }
    
    showCartSubtotal = () => this.cart.showSubTotalMessage();

    showMoney = () => alert(`${this.getNombre()} este es su dinero disponible: $${this.getDinero()}`);

    showPersonalObjects = () => {

        
          alert(`Sus objetos personales:
${this.objetos.map(objeto => objeto.cantidad + ' ' + objeto.nombre + (objeto.cantidad > 1 ? "s" : "")).join('\n')}`);
}
    
    obtainPurchasedObjects = () => {
        if(this.getObjetos().length <= 0){
            this.objetos = [...this.getComprasRealizadas()];
            return;
            }

        const flatArray = this.getComprasRealizadas().flat();
        this.objetos = flatArray.reduce((acum, current) => {

            const productoExistente = acum.find(producto => producto.nombre === current.nombre);

            productoExistente
            ? productoExistente.cantidad += current.cantidad
            : acum = [...acum, current];

            return acum;
        }, []);
    }

    
    addMoney = () => {
        
        const dinero = Number(prompt('Indique cuanto dinero quiere agregar:'));
                    console.log("dinero", dinero)
                    const dineroAnterior = this.getDinero();

                    if (!dinero || typeof dinero !== 'number') {
                        alert('Ha ingresado un valor no valido, debe ingresar un número');
                        return;
                    }

                    this.dinero += dinero;
                    alert(`     Se ha cargado su dinero correctamente, su dinero anterior era: $${dineroAnterior}
            Su dinero actual es: $${this.getDinero()}`);
    }

    cleanCart = () => this.cart.cleanCart();
    
    addDonePurchase = () => {
        return this.comprasRealizadas = [...this.comprasRealizadas, this.getCart()];
    };

    showPersonalData = () => alert(`      Su información personal:
    
    -Nombre: ${this.getNombre()}
    -Edad: ${this.getEdad()}
    -Dinero disponible: $${this.getDinero()}`);

    payCheck = () => {
        if(!this.getCart().length) {
            alert('El carro está vació, agregue productos para seguir con la compra');
            return;
        }

        const moneyLeft = this.getDinero() - this.cart.showSubTotal();
        
        if(moneyLeft < 0) {
            alert(`No tienes suficiente dinero, tu dinero disponible es $${this.getDinero()} y tu compra tiene un monto de $${this.getCartSubtotal()}.
            Te faltan $${this.getCartSubtotal() - this.getDinero()}`)
            return;
        }    
        
        this.dinero -= this.getCartSubtotal();
        this.addDonePurchase();
        this.obtainPurchasedObjects();
        alert(`${this.getNombre()} se realizó su pago, su dinero disponible es $${this.getDinero()}`);
        this.cleanCart();
        console.log(this.getDinero());
    }

}

export {User}