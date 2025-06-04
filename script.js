import { Product } from "./classes/Product.js";
import { ProductsList } from "./classes/ProductsList.js";
import { Cart } from "./classes/Cart.js";
import { User } from "./classes/User.js";

const banana = {
    nombre: 'banana',
    precio: 800
};

const manzana = {
    nombre: 'manzana',
    precio: 500
};

const pera = {
    nombre: 'pera',
    precio: 400
};

const tomate = {
    nombre: 'tomate',
    precio: 1200
}

const bananaP = new Product(banana);
const manzanaP = new Product(manzana);
const peraP = new Product(pera);
const tomateP = new Product(tomate);

const data = [bananaP, manzanaP, peraP, tomateP];

const ProductList = new ProductsList(data);

const Cart1 = new Cart();

const userName = prompt('Indique su nombre');
const userAge = Number(prompt('Indique cuantos años tiene'));
const userMoney = Number(prompt('Indique dinero disponible'));

const user1 = new User({
    nombre: userName,
    edad: userAge,
    cart: Cart1,
    dinero: userMoney
})

const initPurchase = () => {

    const productOptions = {
        '1': ProductList.getProduct('banana'),
        '2': ProductList.getProduct('manzana'),
        '3': ProductList.getProduct('pera'),
        '4': ProductList.getProduct('tomate')
    };

    let option = prompt(`Bienvenido, ${user1.getNombre()} ingrese una opción para seguir su compra:
            1- Agregar un producto.
            2- Ver subTotal.
            3- Ver dinero disponible.
            4- Realizar compra.
            5- Ver productos personales.
            6- Cargar dinero.
            7- Datos personales.
            8- Terminar.`);
            
    while(option !== '8') {

        switch(option) {
            
            case '1': user1.selectProduct(ProductList, productOptions);
                break;

            case '2': user1.showCartSubtotal();
                break;         
            
            case '3': user1.showMoney();
                break;

            case '4': user1.payCheck();
                break;

            case '5': user1.showPersonalObjects();
                break;

            case '6': user1.addMoney();
                break;

            case '7': user1.showPersonalData();
                break;
        }            

        option = prompt(`${user1.getNombre()} elija como continuar:
            1- Agregar un producto.
            2- Ver subTotal.
            3- Ver dinero disponible.
            4- Realizar compra.
            5- Ver productos personales.
            6- Cargar dinero.
            7- Datos personales.
            8- Terminar.`);
    }
        
}

initPurchase();

console.log(user1.comprasRealizadas);