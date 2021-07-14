
var products = [
    {
        product: 'Arroz',
        price: 14
    },
    {
        product: 'Frijol',
        price: 15
    },
    {
        product: 'Aceite',
        price: 54
    },
    {
        product: 'Cajillahuevos',
        price: 120
    },
    {
        product: 'Queso',
        price: 50
    },
    {
        product: 'Polloentero',
        price: 34
    },
    {
        product: 'Postaderes',
        price: 70
    },
    {
        product: 'Postadecerdo',
        price: 70
    },
    {
        product: 'Cebolla',
        price: 15
    },
    {
        product: 'Papa',
        price: 22
    },

];

var cart = {
    items: {
        Arroz: 0,
        Frijol: 0,
        Aceite: 0,
        Cajillahuevos: 0,
        Queso: 0,
        Polloentero: 0,
        Postaderes: 0,
        Postadecerdo: 0,
        Cebolla: 0,
        Papa: 0,
    },
    total: 0
};

function addToCart(id) {

    var product = getProductByDesc(id);
    switch (id) {
        case 'Arroz':
            cart.items.Arroz++;
            cart.total += product.price;
            break;
        case 'Frijol':
            cart.items.Frijol++;
            cart.total += product.price;
            break;
        case 'Aceite':
            cart.items.Aceite++;
            cart.total += product.price;
            break;
        case 'Cajillahuevos':
            cart.items.Cajillahuevos++;
            cart.total += product.price;
            break;
        case 'Queso':
            cart.items.Queso++;
            cart.total += product.price;
            break;
        case 'Polloentero':
            cart.items.Polloentero++;
            cart.total += product.price;
            break;
        case 'Postaderes':
            cart.items.Postaderes++;
            cart.total += product.price;
            break;
        case 'Postadecerdo':
            cart.items.Postadecerdo++;
            cart.total += product.price;
            break;
        case 'Cebolla':
            cart.items.Cebolla++;
            cart.total += product.price;
            break;
        case 'Papa':
            cart.items.Papa++;
            cart.total += product.price;
            break;
        default:
            alert('Producto no disponible');
            break;
    }
    showDetail();
}

function showDetail() {
    var cartDetail = document.getElementById('cart-detail');
    var msg = " ";
    for (var i = 0; i < products.length; i++) {
        switch (products[i].product) {
            case 'Arroz':
                if (cart.items.Arroz > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Arroz + ')' + '----------C$' + (cart.items.Arroz * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
            case 'Frijol':
                if (cart.items.Frijol > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Frijol + ')' + '----------C$' + (cart.items.Frijol * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
            case 'Aceite':
                if (cart.items.Aceite > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Aceite + ')' + '----------C$' + (cart.items.Aceite * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
            case 'Cajillahuevos':
                if (cart.items.Cajillahuevos > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Cajillahuevos + ')' + '----------C$' + (cart.items.Cajillahuevos * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
            case 'Queso':
                if (cart.items.Queso > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Queso + ')' + '----------C$' + (cart.items.Queso * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
            case 'Polloentero':
                if (cart.items.Polloentero > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Polloentero + ')' + '----------C$' + (cart.items.Polloentero * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
            case 'Postaderes':
                if (cart.items.Postaderes > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Postaderes + ')' + '----------C$' + (cart.items.Postaderes * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
            case 'Postadecerdo':
                if (cart.items.Postadecerdo > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Postadecerdo + ')' + '----------C$' + (cart.items.Postadecerdo * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
            case 'Cebolla':
                if (cart.items.Cebolla > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Cebolla + ')' + '----------C$' + (cart.items.Cebolla * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
            case 'Papa':
                if (cart.items.Papa > 0) msg += '<li>' + products[i].product + ' (' + cart.items.Papa + ')' + '----------C$' + (cart.items.Papa * products[i].price).toFixed(2) + '</li>'; //Si es mayor a cero se concatena li
                break;
        }
    }
    var msge = parseFloat(cart.total);
    document.getElementById('cart-detail').innerHTML = msg;
    document.getElementById('montototal').innerHTML = 'C$' + msge.toFixed(2);
}

function getProductByDesc(desc) {
    var result = {};
    products.forEach(function (item, index) {
        if (item.product == desc) result = item;
    });
    return result;
}


function vuelto() {
    var montito = parseFloat(document.getElementById("pagar").value);
    var msge = parseFloat(cart.total);
    var devolver = montito - msge;
    document.getElementById("devuelto").innerHTML = 'Vuelto: C$' + devolver.toFixed(2);

    let billetes_de_10, billetes_de_100, billetes_de_20, billetes_de_200, billetes_de_5;
    let billetes_de_50, billetes_de_500, billetes_de_1000, cantidad_de_euros, monedas_de_1;
    cantidad_de_euros = parseFloat(devolver);
    monedas_de_1 = cantidad_de_euros;
    billetes_de_1000 = (monedas_de_1 - monedas_de_1 % 1000) / 1000;
    monedas_de_1 = monedas_de_1 % 1000;
    billetes_de_500 = (monedas_de_1 - monedas_de_1 % 500) / 500;
    monedas_de_1 = monedas_de_1 % 500;
    billetes_de_200 = (monedas_de_1 - monedas_de_1 % 200) / 200;
    monedas_de_1 = monedas_de_1 % 200;
    billetes_de_100 = (monedas_de_1 - monedas_de_1 % 100) / 100;
    monedas_de_1 = monedas_de_1 % 100;
    billetes_de_50 = (monedas_de_1 - monedas_de_1 % 50) / 50;
    monedas_de_1 = monedas_de_1 % 50;
    billetes_de_20 = (monedas_de_1 - monedas_de_1 % 20) / 20;
    monedas_de_1 = monedas_de_1 % 20;
    billetes_de_10 = (monedas_de_1 - monedas_de_1 % 10) / 10;
    monedas_de_1 = monedas_de_1 % 10;
    billetes_de_5 = (monedas_de_1 - monedas_de_1 % 5) / 5;
    monedas_de_1 = monedas_de_1 % 5;
    document.formulario1.billetes_de_10.value = billetes_de_10;
    document.formulario1.billetes_de_100.value = billetes_de_100;
    document.formulario1.billetes_de_20.value = billetes_de_20;
    document.formulario1.billetes_de_200.value = billetes_de_200;
    document.formulario1.billetes_de_5.value = billetes_de_5;
    document.formulario1.billetes_de_50.value = billetes_de_50;
    document.formulario1.billetes_de_500.value = billetes_de_500;
    document.formulario1.billetes_de_1000.value = billetes_de_1000;
    document.formulario1.monedas_de_1.value = monedas_de_1;

}




