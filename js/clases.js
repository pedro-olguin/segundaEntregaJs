export class Categoria {
  constructor(numero, nombre) {
    this.numero = numero;
    this.nombre = nombre;
  }

  getNumero() {
    return this.numero;
  }
}

export class Lomo {
  constructor(id, tipo, valor) {
    this.id = id;
    this.tipo = tipo;
    this.valor = valor;
  }
  getValor() {
    return this.valor;
  }
}

export class Hamburguesa {
  constructor(id, tipo, valor) {
    this.id = id;
    this.tipo = tipo;
    this.valor = valor;
  }
}

export class Pizza {
  constructor(id, tipo, valor) {
    this.id = id;
    this.tipo = tipo;
    this.valor = valor;
  }
}



class Productos {
  constructor(id, producto, precio) {
    this.id = id;
    this.producto = producto;
    this.precio = precio;
  }
}

function crearProductos(crear) {
  let arrayProducts = [];

  for (const creador of crear) {
    const producto = new Productos(...creador);

    arrayProducts.push(producto);
  }

  return arrayProducts;
}

const carta = [
  [new Productos("1", "hamburguesa Clasica", 3500)],
  [new Productos("2", "hamburguesa Completa", 5000)],
  [new Productos("3", "hamburguesa Especial", 6500)],
  [new Productos("4", "lomo clasico", 6000)],
  [new Productos("5", "lomo completo", 7500)],
  [new Productos("6", "lomo especial", 9500)],
  [new Productos("7", "pizza mozzarella", 5000)],
  [new Productos("8", "pizza especial", 7000)],
  [new Productos("9", "pizza napolitana", 8500)],
  [new Productos("10", "pizza palmitos", 10000)],
];

//variables principales
let eleccion;
let idProducto = "";
const carrito = [];
let venta = 0;
let pedido;
let cantidad = 0;

const pizzas = carta.filter(function (producto) {
  return producto[0].producto.toLowerCase().includes("pizza");
});
const lomos = carta.filter(function (producto) {
  return producto[0].producto.toLowerCase().includes("lomo");
});
const hamburguesas = carta.filter(function (producto) {
  return producto[0].producto.toLowerCase().includes("hamburguesa");
});

//funciones para todo el script

function mostrarCarta(carta) {
  for (let mostrarCarta of carta) {
    const producto = mostrarCarta[0];
    console.log(
      `ID: ${producto.id}- ${producto.producto} $${producto.precio}`
    );
  }
}

function tomaPedido() {
  idProducto = prompt(
    `Por consola podras ver nuestra carta con su ID, nombre y precios.\n
         Por favor utiliza su ID para seleccionar \n
         o escribe: pizzas / lomos / hamburguesas
         Para filtrar segun corresponda\n
         escribe ESC para salir`
  );
  return idProducto;
}

function eleccionProducto(idProducto) {
  eleccion = carta.find((producto) => producto[0].id === idProducto);

  if (eleccion) {
    alert(`Has seleccionado: ${eleccion[0].producto} $${eleccion[0].precio}`);
  } else {
    alert("ID no válido. Por favor, selecciona un ID válido.");
  }

  return eleccion;
}

function cant(eleccion) {
  cantidad = parseInt(prompt(`cuantos ${eleccion[0].producto} queres?`));
  venta += eleccion[0].precio * cantidad;

  return venta;
}

function pregAgregar(idProducto) {
  pedido = parseInt(
    prompt(`selecciona \n
    1- Agregar al carrito y SEGUIR COMPRANDO \n
    2- Agregar al carrito y FINALIZAR COMPRA \n
    3- No quiero comprar, SALIR.`)
  );

  return pedido;
}
function agregarYSeguir(pedido) {
  if (pedido === 1) {
    const seguirComprando = carta.find(
      (producto) => producto[0].id === idProducto
    );

    if (seguirComprando) {
      carrito.push(seguirComprando[0]);

      alert("Producto agregado al carrito ");
      const enCarrito = carrito.map((element) => element.producto);

      alert("En tu carrito tienes: " + cantidad + enCarrito.join(", "));
    }
  }
}

//Inicio de la logica

mostrarCarta(carta);

tomaPedido(); //devuelve idProducto para seleccionar un producto especifico

do {
  console.log(idProducto);
  if (idProducto == "pizzas") {
    pizzas.forEach(function (pizza) {
      console.log(
        `ID: ${pizza[0].id}- ${pizza[0].producto} $${pizza[0].precio}`
      );
    });
    idProducto = prompt("Selecciona un producto por su ID");
    eleccionProducto(idProducto);
    cant(eleccion);
    pregAgregar(idProducto);
  } else if (idProducto == "lomos") {
    lomos.forEach(function (lomo) {
      console.log(
        `ID: ${lomo[0].id}- ${lomo[0].producto} $${lomo[0].precio}`
      );
    });
    idProducto = prompt("Selecciona un producto por su ID");
    eleccionProducto(idProducto);
    cant(eleccion);
    pregAgregar(idProducto);
  } else if (idProducto == "hamburguesas") {
    hamburguesas.forEach(function (hamburguesa) {
      console.log(
        `ID: ${hamburguesa[0].id}- ${hamburguesa[0].producto} $${hamburguesa[0].precio}`
      );
    });
    idProducto = prompt("Selecciona un producto por su ID");
    eleccionProducto(idProducto);
    cant(eleccion);
    pregAgregar(idProducto);
  } else if (idProducto <= carta[0].length) {
    eleccionProducto(idProducto);
    cant(eleccion);
    pregAgregar(idProducto);
  }

  if (pedido == 1) {
    tomaPedido();
  } else if (pedido == 2) {
    alert(`el valor del total de tu pedido es ${venta}`);
  } else if (pedido == 3) {
    idProducto = "ESC";
  }
  // idProducto = "ESC";
} while (idProducto !== "ESC");
}
