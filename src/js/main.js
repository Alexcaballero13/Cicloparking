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

function initMap() {
  // Coordenadas de Cali, Colombia
  var cali = { lat: 3.3943834, lng: -76.5291634 };

  // Crea un mapa y lo muestra en el div con el identificador "google-map"
  var map = new google.maps.Map(document.getElementById("google-map"), {
    center: cali,
    zoom: 12 
  });

  // Realiza una solicitud a la API
  fetch("http://localhost:3002/info/infoCicloParking")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var infowindow = new google.maps.InfoWindow();
    // Itera a través de los datos y agrega marcadores en el mapa
    data.forEach(function (info) {
      var marker = new google.maps.Marker({
        position: { lat: info.lat, lng: info.lon },
        map: map,
        title: "Ubicación del Ciclo Parqueadero"
      });
      // Agrega un evento para mostrar el infowindow cuando se pasa el mouse sobre el marcador
      marker.addListener("mouseover", function () {
        infowindow.setContent('<div style="color: black;"> Localización: ' + info.Localizacion + '<br> Dirección: ' + info.Direccion + '<br> Id: ' + info.Id +'</div>'); // Ajusta esto para mostrar la información deseada
        infowindow.open(map, marker);
      });

      // Agrega un evento para cerrar el infowindow cuando se retira el mouse del marcador
      marker.addListener("mouseout", function () {
        infowindow.close();
      });
    });
  })
  .catch(function (error) {
    console.error("Error al cargar los datos de la API: " + error);
  });
}
if (typeof google === 'object' && typeof google.maps === 'object') {
  // La API de Google Maps ya se ha cargado, por lo que podemos llamar a initMap directamente
  initMap();
}

function obtenerDatosDeAPI() {
  // Obtén la URL actual
  var url = window.location.href;

  // Encuentra la última parte de la URL (suponiendo que sea el valor "X")
  // Busca el valor "X" en los parámetros de consulta
  var params = new URLSearchParams(new URL(url).search);
  var X = params.get("id");

  // Puedes usar el valor "X" para llamar a tu API
  var apiUrl = "http://localhost:3002/info/infoCicloParking/" + X;

  function cargarMapa(datos) {
    // Llamada a la API de Google Maps para cargar el mapa
    var coordenadas = { lat: datos.lat, lng: datos.lon };
    var mapa = new google.maps.Map(document.getElementById("google-map2"), {
      center: coordenadas,
      zoom: 18
    });
    var marcador = new google.maps.Marker({
      position: coordenadas,
      map: mapa,
      title: "Ubicación del Ciclo Parqueadero"
    });
  }

  if (typeof google === 'object' && typeof google.maps === 'object') {
    // La API de Google Maps ya se ha cargado, puedes llamar a cargarMapa directamente
    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (datos) {
        document.getElementById("modal-id").textContent = datos.Id;
        document.getElementById("modal-localizacion").textContent = datos.Localizacion;
        document.getElementById("modal-direccion").textContent = datos.Direccion;
        document.getElementById("modal-cupos").textContent = datos.Cupo;
        document.getElementById("modal-kit").textContent = datos.Kit;
        document.getElementById("modal-senalizacion").textContent = datos.Senalizacion;
        document.getElementById("modal-lampara").textContent = datos.Lampara;
        document.getElementById("modal-estado").textContent = datos.EstadoCiclo;
        document.getElementById("modal-coordenadas").textContent = datos.lat + " " + datos.lon;

        cargarMapa(datos);
      })
      .catch(function (error) {
        console.error("Error al llamar a la API: " + error);
      });
  } else {
    // La API de Google Maps aún no se ha cargado, puedes intentar esperar un poco y luego reintentar
    setTimeout(obtenerDatosDeAPI, 1000); // Espera 1 segundo y vuelve a intentar
  }
}

var modal = document.getElementById("modal");
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




obtenerDatosDeAPI();