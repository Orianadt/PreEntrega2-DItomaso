const dbProductos = [
    {
        id:1 ,
        name: "Remera",
        price: 4500,
        color: "rosa",
        size: 1 ,
    },
    {
        id:2 ,
        name: "Remera",
        price: 4500,
        color: "blanca",
        size: 2,
    },
     {
        id:3 ,
        name: "Remera",
        price: 4500,
        color: "negra",
        size: 3,
    },
     {
        id:4 ,
        name: "Buzo",
        price: 15000,
        color: "rosa",
        size: 4,
    },
]
let carrito = [];
let productosArr = [];
let trueOfalse = true;

class Producto {
    constructor (id, name, price, color, size) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
        this.size = size;
    }
    iva() {
        return this.price * 0.21;
    }
}

function pushProductos() {
    for (const producto of dbProductos) {
        productosArr.push(new Producto (producto.id,producto.name, producto.price, producto.color, producto.size))
    }
}
pushProductos()

function initProgram() {
    while (trueOfalse) {
        let selectSection = prompt ("¿Qué buscabas? /n 1.Ver productos /n 2. Ver productos ordenados alfabeticamente /n 3. Buscar un producto /n 4. Comprar producto /n 5. Buscar producto de mayor talle  /n 6. Buscar producto de menor valor");
        switch  (selectSection){
            case "1":
                verProductos()
                break
            case "2":
                verProductosAtoZ()
                break
            case "3":
                buscarProducto ()
                break
            case "4":
                agregarAlCarrito()
                break
            case "5":
                maximoTalle()
                break
            case "6":
                minimoValor()
                break
            case "7":
                trueOfalse = false
                break
                default:
                    alert ("No es una opción válida")
                    break
        }
    }
}
function verProductos() {
    auxiliarDeProductos (productosArr, alert)
    alert ("No hay más productos disponibles")
    initProgram ()
}
function auxiliarDeProductos(arr, fn) {
    for (const producto of arr) {
        fn(producto.name + " " + producto.price + " " + producto.color + " " + producto.size)
    }
}
function verProductosAtoZ() {
    productosArr.sort ((a,b) => { 
        if (a.name > b.name){
            return 1
        }
        if (a.name < b.name) {
            return -1
        }
    }
    )
    console.log(productosArr)
    initProgram()
}
function buscarProducto() {
    let productoAbuscar = prompt ("¿Qué buscas?")
    let productoEncontrado = productosArr.filter((producto) => {
        return producto.name == productoAbuscar
    }
    )
    if (productoEncontrado) {
        productoEncontrado.forEach((producto) => {
            alert(producto.name + " " + producto.price + " " + producto.color + " " + producto.size)
        }

        )
    }
    else {
        alert ("El producto no existe")
    }
}
function agregarAlCarrito() {
    let productoAbuscar = prompt ("Indique el producto")
    let productoEncontrado = productosArr.find ((producto) => {
        return producto.name == productoAbuscar
    }

    )
    if (productoEncontrado) {
        alert (productoEncontrado.name + " " + productoEncontrado.price + " " + productoEncontrado.color + " " + productoEncontrado.size);
        let confirmacion = prompt ("¿Desear agregar este producto al carrito? /n 1. Si /n 2. No")
        let (confirmacion == 1) 
        carrito.push(productoEncontrado)
        alert ("Producto agregado al carrito")
} else {
    alert ("Producto no agregado al carrito")
    initProgram ()
}

}

function seguirComprando() {
    const seguirComprando = prompt ("¿Deseas ver más productos? /n 1. Si /n 2. No")
    if (seguirComprando == 1) {
        agregarAlCarrito()
    } else {
        if (carrito.lenght > 0) {   
            totalCarrito()  
        } else {
            alert ("No hay productos en el carrito")
        }
        initProgram()
    }
}

function totalCarrito () {
    let precioTotal = carrito.reduce ((acumulador, producto) => {
        return acumulador + producto.price
    } ,0)
    alert ("El precio total es de ${precioTotal}")
}
function maximoTalle() {
    let productos = dbProductos.map ((producto) =>  {
        return {
            name: producto.name,
            size: producto.size
        }
    }
    )
let size = productos.map ((producto) => producto.size)
const maximo = Math.max(...size)
let productoMaximo = productos.find ((producto) => producto.size === maximo)
alert ("El talle mayor que se encuentra en stock es ${maximo} y el producto es ${productoMaximo.name}");
}
function minimoValor() {
    let productos = dbProductos.map ((producto) =>  {
        return {
            name: producto.name,
            size: producto.price
        }
    }
    )
let price = productos.map ((producto) => producto.price)
const minimo = Math.min(...price)
let productoMinimo = productos.find ((producto) => producto.price === minimo)
alert ("La prenda de menor valor que se encuentra en stock es ${minimo} y el producto es ${productoMinimo.name}");
}

initProgram()