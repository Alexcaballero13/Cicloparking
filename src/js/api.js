// Obtén referencias a los elementos HTML
var listaDirecciones = document.getElementById("lista-direcciones");
var modal = document.getElementById("modal");
var cerrar = document.getElementById("cerrar");

// Función para mostrar la ventana modal con los datos específicos
function mostrarModal(datos) {
    document.getElementById("modal-id").textContent = datos.Id;
    document.getElementById("modal-localizacion").textContent = datos.Localizacion;
    document.getElementById("modal-direccion").textContent = datos.Direccion;
    document.getElementById("modal-cupos").textContent = datos.Cupo;
    document.getElementById("modal-kit").textContent = datos.Kit;
    document.getElementById("modal-senalizacion").textContent = datos.Senalizacion;
    document.getElementById("modal-lampara").textContent = datos.Lampara;
    document.getElementById("modal-estado").textContent = datos.EstadoCiclo;
    document.getElementById("modal-coordenadas").textContent = datos.Coordenadas;
    
    modal.style.display = "block";
}

// Función para cargar las direcciones desde la API
function cargarDirecciones() {
    fetch("http://localhost:3002/info/infoCicloParking")
        .then(response => response.json())
        .then(data => {
            // Genera la lista de direcciones y agrega un evento clic a cada elemento
            data.forEach(function (direccion) {
                var listItem = document.createElement("li");
                listItem.textContent = direccion.Direccion;
                listItem.style.cursor = "pointer";
                listItem.addEventListener("click", function () {
                    mostrarModal(direccion);
                });
                listaDirecciones.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error al cargar las direcciones: " + error));
}

// Cargar las direcciones al cargar la página
cargarDirecciones();

// Función para cerrar la ventana modal
cerrar.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cierra la ventana modal si se hace clic fuera de ella
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});