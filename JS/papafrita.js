function agregarAlCarrito(producto) {
    return () => {
        const carrito = obtenerCarrito() || {};

        carrito[producto.id] = producto;

        localStorage.setItem("carrito", JSON.stringify(carrito));

        Swal.fire(`Agregaste "${producto.nombre}" a tu carrito.`);

        escribirCarrito();
    };
}

function escribirProductos(productos) {
    const listaDeProductos = document.getElementById("Productos");

    if (productos.length > 0) {
        listaDeProductos.innerHTML = "";

        for (const producto of productos) {
            const contenedorDeProducto = document.createElement("main");

            contenedorDeProducto.innerHTML = `
            <h3>ID: ${producto.id}</h3>
            <p>Producto: ${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
        `;
            const boton = document.createElement("button");

            boton.innerText = "Añadir al carrito";

            contenedorDeProducto.append(boton);

            listaDeProductos.append(contenedorDeProducto);

            boton.addEventListener("click", agregarAlCarrito(producto));
        }
    } else {
        listaDeProductos.innerHTML = "No se encontró ningún producto";
    }
}

const productos = [
    { id: 1, nombre: "Mesa", precio: 20000,  },
    { id: 2, nombre: "Cama", precio: 23000 },
    { id: 3, nombre: "Parrilla", precio: 45000 },
    { id: 4, nombre: "Juego de sillones", precio: 60000 },
    { id: 5, nombre: "Ropero", precio: 38000 },
    { id: 6, nombre: "Esquinero", precio: 15000 },
    { id: 7, nombre: "Marcos de fotos", precio: 30000 },
    { id: 8, nombre: "Cajonera", precio: 39000 },
];

escribirProductos(productos);

let botonBuscar = document.getElementById("BotonBuscar");

botonBuscar.addEventListener("click", (event) => {
    event.preventDefault();

    const buscarTexto = event.target.parentElement.texto.value.toLowerCase();

    escribirProductos(
        productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(buscarTexto)
        )
    );
});

