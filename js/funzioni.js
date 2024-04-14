$(document).ready(function () {
  /** Header Scrollato*/

  function header_scroll() {
    if (window.scrollY >= $(".banner").height()) {
      document
        .getElementById("hamburger")
        .classList.add("banner_elemento_scrollato");
      document
        .getElementById("banner_mail")
        .classList.add("banner_elemento_scrollato");
      document.getElementById("to_top").classList.add("drjekyll");
    } else {
      document
        .getElementById("hamburger")
        .classList.remove("banner_elemento_scrollato");
      document
        .getElementById("banner_mail")
        .classList.remove("banner_elemento_scrollato");
      document.getElementById("to_top").classList.remove("drjekyll");
    }
  }

  /*Hamburger  */

  $("#hamburger").click(function () {
    $(".line1").toggleClass("line1_traslato");
    $(".line2").toggleClass("line2_traslato");
    $(".line3").toggleClass("line3_traslato");
    $(".menu").toggleClass("menu_traslato");
  });

  /*banner mail */

  $("#banner_mail").click(function () {
    $(".mailbox_overlay").toggleClass("drjekyll");
  });

  $(".mailbox_overlay").click(function (e) {
    if (e.target !== e.currentTarget) return;
    $(".mailbox_overlay").removeClass("drjekyll");

  });

  /**
   * Osservatore
   *  */

  /** trasla box */

  function trasla_box() {
    var trasla = document.querySelectorAll(".box_osservato");
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("drjekyll");
        } else {
          entry.target.classList.remove("drjekyll");
        }
      });
    });

    trasla.forEach((elemento) => {
      observer.observe(elemento);
    });
  }

  window.onscroll = function () {
    header_scroll();
    trasla_box();
  };
});
