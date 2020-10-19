const toggle = document.querySelector(".toggle");
        const menu = document.querySelector(".menu");

        /* Toggle mobile menu */
        function toggleMenu() {
            consolelog("enter");
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");

                // adds the menu (hamburger) icon
                toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
            } else {
                console.log("enterthis");
                menu.classList.add("active");

                // adds the close (x) icon
                toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
            }
        }

        /* Event Listener */
        toggle.addEventListener("click", toggleMenu, false);

        const items = document.querySelectorAll(".item");

        /* Activate Submenu */
        function toggleItem() {
            if (this.classList.contains("submenu-active")) {
                this.classList.remove("submenu-active");
            } else if (menu.querySelector(".submenu-active")) {
                menu.querySelector(".submenu-active").classList.remove("submenu-active");
                this.classList.add("submenu-active");
                this.style.color="$dark";
            } else {
                this.classList.add("submenu-active");
                this.style.color="$dark";
            }
        }

        /* Event Listeners */
        for (let item of items) {
            if (item.querySelector(".submenu")) {
                item.addEventListener("click", toggleItem, false);
                item.addEventListener("keypress", toggleItem, false);
            }
        }

        /* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);
 
  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
 
/* Event listener */
document.addEventListener("click", closeSubmenu, false);






$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});