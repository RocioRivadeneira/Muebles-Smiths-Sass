const cargar = async () => {
    const catalogo = document.getElementById("productos");

    let productos = [];

    try {
        const response = await fetch("../data.json");
        productos = await response.json();
    } catch (error) {
        console.log(error);
    }

    productos.forEach((producto) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <div class="card">
                <img src="${producto.imagen.src}" alt="${producto.imagen.alt}" />
                <div class="card-body text-center">
                    <h4>${producto.nombre}</h4>
                    <p class="card-text text-center">
                        ${producto.descripcion}
                    </p>
                    <strong>
                        ${producto.precio}
                    </strong>
                </div>
                <a href="#carrito">
                    <button class="button-buy" type="submit">
                        Comprar
                    </button>
                </a>
            </div>
        `;

        catalogo.append(div);
    });
};

cargar();
