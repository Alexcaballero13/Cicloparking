(function() {
    "use strict";
  
    /*Easy selector helper function*/
  
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /*Easy event listener function*/
  
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /*Easy on scroll event listener */
  
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /*Navbar links active state on scroll*/
  
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /*Scrolls to an element with header offset*/
  
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /*Toggle .header-scrolled class to #header when page is scrolled*/
  
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /*Back to top button*/
  
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /*Mobile nav toggle*/
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /*Mobile nav dropdowns activate*/
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /*Scrool with ofset on links with a class name .scrollto*/
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /*Scroll with ofset on page load with hash links in the url*/
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /* Preloader*/
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  
  
    /*Animation on scroll*/
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });
  
    /*Initiate Pure Counter*/
    new PureCounter();
  
  })()

// Obtén referencias a los elementos HTML
var listaDirecciones = document.getElementById("lista-direcciones");
var modal = document.getElementById("modal");
var cerrar = document.getElementById("cerrar");
var googleMap = document.getElementById("google-map3");

// Variable para almacenar el mapa
var mapa;


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
    document.getElementById("modal-coordenadas").textContent = datos.lat + " " + datos.lon;

    // Crea un mapa con las coordenadas de la ubicación
    var coordenadas = { lat: parseFloat(datos.lat), lng: parseFloat(datos.lon) };
    if (mapa) {
        // Si ya existe un mapa, actualízalo con nuevas coordenadas
        mapa.setCenter(coordenadas);
        // Mueve el marcador a la nueva ubicación
        marcador.setPosition(coordenadas);
    } else {
        // Si no existe un mapa, crea uno nuevo
        mapa = new google.maps.Map(googleMap, {
            center: coordenadas,
            zoom: 18
        });
        // Crea un marcador en las coordenadas
        marcador = new google.maps.Marker({
            position: coordenadas,
            map: mapa,
            title: "Ubicación del Ciclo Parqueadero"
        });
    }

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
cerrar.addEventListener("click", function () {
    modal.style.display = "none";
});

// Cierra la ventana modal si se hace clic fuera de ella
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
