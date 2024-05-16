// Obtener el formulario
const formulario = document.getElementById('formularioProductos');

// Agregar evento al enviar el formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault(); // Evitar el envío del formulario por defecto
  
  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;
  const descripcion = document.getElementById('descripcion').value;
  const proveedor = document.getElementById('proveedor').value;

  // Crear un objeto con los datos del producto
  const producto = { nombre, precio, descripcion, proveedor };

  // Guardar el producto en el almacenamiento local (localStorage)
  // Puedes ajustar esta lógica según tu necesidad (guardarlo en una base de datos, etc.)
  let productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.push(producto);
  localStorage.setItem('productos', JSON.stringify(productos));

  // Redireccionar a la página de productos
  window.location.href = 'tabladderefuerzo.html';
});

