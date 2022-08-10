function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || {};
}

function escribirCarrito() {
    const carrito = obtenerCarrito();
    console.log(carrito);
    const idDeProductos = Object.keys(carrito);

    const contenedorDeCarrito = document.getElementById("Carrito");

    contenedorDeCarrito.innerHTML = "";

    if (idDeProductos.length > 0) {
        for (const idDeProducto of idDeProductos) {
            const producto = carrito[idDeProducto];
            const contenedorDeProducto = document.createElement("li");

            contenedorDeProducto.innerHTML = `
                <h3>ID: ${producto.id}</h3>
                <p>Producto: ${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
            `;

            contenedorDeCarrito.appendChild(contenedorDeProducto);
        }
    }
}

escribirCarrito();