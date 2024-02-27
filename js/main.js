let ingresar = prompt(`Hola! para ingresar debes estar registrado.\n
selecciona la opcion correspondiente.\n
1-registrarme\n
2-ingreso`);
let usuarioNuevo;
let pinNuevo;
let usuarioViejo;
let pinViejo;
if (ingresar === "1") {
  usuarioNuevo = prompt(`Ingresa tu nuevo usuario`);
  pinNuevo = prompt(`ingresa tu contraseña`);
} else if (ingresar === "2") {
  alert(`No tenemos Usuarios registrados.\n
  registrate por favor.`);
  usuarioNuevo = prompt(`Ingresa tu nuevo usuario`);
  pinNuevo = prompt(`ingresa tu contraseña`);
}

alert(`Usuario registrado.`);
let savedUser = usuarioNuevo;
let savedPin = pinNuevo;
let ingreso = false;
let newUser;
for (let i = 2; i >= 0; i--) {
  newUser = prompt(`ingrese su usuario`);
  let pass = prompt(`ingrese su contraseña`);
  if (savedUser === newUser && savedPin === pass) {
    alert(`Es un placer atenderte ${newUser}`);
    ingreso = true;
    break;
  } else {
    alert(`USUARIO O CONTRASEÑA INCORRECTA LE QUEDAN ${i} INTENTOS`);
  }
}

if (ingreso) {
  const carta = [
    { id: "1", nombre: "pizza mozzarella", precio: 5000 },
    { id: "2", nombre: "pizza especial", precio: 6500 },
    { id: "3", nombre: "pizza palmitos", precio: 8000 },
    { id: "4", nombre: "hamburguesa clasica", precio: 3500 },
    { id: "5", nombre: "hamburguesa completa", precio: 5000 },
    { id: "6", nombre: "hamburguesa especial", precio: 7500 },
    { id: "7", nombre: "lomo clasico", precio: 6000 },
    { id: "8", nombre: "lomo completo", precio: 8000 },
    { id: "9", nombre: "lomo especial", precio: 10000 },
  ];

  //variables globales
  let precioXCantidad = 0;
  let precioDelCarrito = 0;
  let cantidad = 0;
  let productoId;
  let productoElegido;
  let delivery;

  function mostrarCarta() {
    carta.forEach((productos) => {
      console.log(
        `---------------\n ${productos.id}- ${productos.nombre} ${productos.precio}`
      );
    });
  }

  function filtros(producto) {
    const filtroProductos = carta.filter((el) => el.nombre.includes(producto));

    filtroProductos.forEach((filtroProductos) => {
      console.log(
        `---- filtro ${producto}----\n ${filtroProductos.id}- ${filtroProductos.nombre} ${filtroProductos.precio}`
      );
    });
  }

  function cantidades(producto, cantidad) {
    productoId = carta.find((el) => el.id === producto);

    precioXCantidad = productoId.precio * cantidad;

    return precioXCantidad;
  }

  function precioCarrito(precioXCantidad) {
    precioDelCarrito += precioXCantidad;

    return precioDelCarrito;
  }

  function preCarga(producto) {
    productoElegido = carta.find((el) => el.id === producto);

    if (productoElegido) {
      alert(
        `Has seleccionado: ${productoElegido.nombre} $${productoElegido.precio}`
      );
    } else {
      alert("ID no válido. Por favor, selecciona un ID válido.");
    }

    return productoElegido;
  }

  function tomarPedido() {
    productoId = prompt(
      `Por consola podras ver nuestra carta con su ID, nombre y precios.\n
           Por favor utiliza su ID para seleccionar \n
           o escribe: pizza / lomo / hamburguesa
           Para filtrar segun corresponda\n
           Elegí todos los productos que desees\n \n
           escribe x para salir`
    );
    return productoId;
  }
  mostrarCarta();
  do {
    tomarPedido();
    if (
      productoId == "pizza" ||
      productoId == "lomo" ||
      productoId == "hamburguesa"
    ) {
      filtros(productoId);
    } else if (productoId <= carta.length) {
      preCarga(productoId);
      cantidad = parseInt(prompt(`Que cantidad de ${productoElegido.nombre}`));
      cantidades(productoId, cantidad);
      precioCarrito(precioXCantidad);
    }
  } while (productoId != "x");

  if (precioDelCarrito > 0) {
    delivery = parseInt(
      prompt(`Este pedido, lo enviamos o lo pasas a retirar?\n
  1- Envio por Delivery \n
  2- Lo paso a retirar por el local`)
    );

    if (delivery == 1) {
      alert(
        `El valor final de tu pedido es de ${precioDelCarrito}\n el envio tiene un valor de $1000\n
    el total de tu compra es de $` +
          (precioDelCarrito + 1000) +
          `\n\n GRACIAS POR TU COMPRA`
      );
    } else if (delivery == 2) {
      alert(`El valor final de tu pedido es de ${precioDelCarrito}\n 
    GRACIAS POR TU COMPRA`);
    }
  } else {
    alert(`Esperamos que vuelvas pronto, gracias por visitarnos`);
  }
}
