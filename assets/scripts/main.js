/* ============================================================
   HABITA — Landing Page
   Script principal (JavaScript + jQuery)
   ============================================================ */

$(function () {

  /* ---------- 1. Menú móvil (abrir / cerrar) ---------- */
  $('#burger').on('click', function () {
    $('#nav').toggleClass('open');
    // cambia el ícono entre "barras" y "X"
    $(this).find('i').toggleClass('fa-bars fa-xmark');
  });

  /* ---------- 2. Scroll suave al hacer clic en los enlaces del menú ---------- */
  $('a[href^="#"]').on('click', function (e) {
    var destino = $(this).attr('href');
    if (destino.length > 1 && $(destino).length) {
      e.preventDefault();
      $('html, body').animate(
        { scrollTop: $(destino).offset().top - 60 },
        500
      );
      // cierra el menú móvil si estaba abierto
      $('#nav').removeClass('open');
      $('#burger').find('i').removeClass('fa-xmark').addClass('fa-bars');
    }
  });

  /* ---------- 3. Sombra del nav al hacer scroll ---------- */
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 8) {
      $('#nav').css('box-shadow', '0 6px 20px -12px rgba(74,46,18,.3)');
    } else {
      $('#nav').css('box-shadow', 'none');
    }
  });

});

/* ---------- 4. Animación de aparición al hacer scroll ----------
   Usa IntersectionObserver (API nativa del navegador).
   Cuando un elemento .reveal entra en pantalla, se le añade la
   clase .in y se muestra con una transición suave.            */
document.addEventListener('DOMContentLoaded', function () {
  var elementos = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('in');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    elementos.forEach(function (el) { observador.observe(el); });
  } else {
    // Si el navegador no soporta IntersectionObserver, mostrar todo.
    elementos.forEach(function (el) { el.classList.add('in'); });
  }
});
