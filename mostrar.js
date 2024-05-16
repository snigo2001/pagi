// Obtener la tabla donde se mostrarán los productos
const tablaProductos = document.getElementById('tablaProductos');

// Obtener los productos del almacenamiento local
const productos = JSON.parse(localStorage.getItem('productos')) || [];

// Función para mostrar los productos en la tabla
function mostrarProductos() {
  productos.forEach(producto => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>${producto.descripcion}</td>
      <td>${producto.proveedor}</td>
    `;
    tablaProductos.querySelector('tbody').appendChild(row);
  });
}

// Llamar a la función para mostrar los productos al cargar la página
mostrarProductos();
