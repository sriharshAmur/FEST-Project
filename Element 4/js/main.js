//Navigation
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
    console.log("enter");
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


//Index
const down_arrow = document.querySelector(".down-arrow");
const pages = document.querySelector(".pageul");

/* Toggle mobile menu */
function downArrowMenu() {
    // console.log("enter");
    if (pages.classList.contains("active")) {
        pages.classList.remove("active");

        // adds the menu  icon
        down_arrow.querySelector("a").innerHTML = "<i class='fas fa-chevron-down'></i>";
    } else {
        console.log("enterthis");
        pages.classList.add("active");

        // adds the close (x) icon
        down_arrow.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Event Listener */
down_arrow.addEventListener("click", downArrowMenu, false);



const items = document.querySelectorAll(".item");

/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
        this.style.color = "$dark";
    } else {
        this.classList.add("submenu-active");
        this.style.color = "$dark";
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





function showForm() {
    var form = document.getElementById("select-form");
    var notForm = document.getElementsByClassName("not-form");

    if (form.classList.contains("active-form")) {
        console.log("else");
        form.classList.remove("active-form");
        count = 0;
        while (count < notForm.length) {
            notForm[count].classList.remove("deactive");
            count++
        }


    } else {
        console.log("else");
        form.classList.add("active-form");
        count = 0;
        while (count < notForm.length) {
            notForm[count].classList.add("deactive");
            count++
        }
    }



}


var flkty = new Flickity( '.gallery', {
    // options
    fade: true,
    cellAlign: 'center',
    wrapAround: true,
    contain: true,
    
    
  });



// $(document).ready(function () {
//     $('.customer-logos').slick({
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 4
//             }
//         }, {
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 3
//             }
//         }]
//     });
// });



const editForm = document.getElementById("form-edit");

var profilePic = "";
function loadImage(event) {
    profilePic = URL.createObjectURL(event.target.files[0]);
}

var slides1 = "";
function slide1(event) {
    console.log("slides1");
    slides1 = URL.createObjectURL(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]));
}

var slides2 = "";
function slide2(event) {
    slides2 = URL.createObjectURL(event.target.files[0]);
}

var slides3 = "";
function slide3(event) {
    slides3 = URL.createObjectURL(event.target.files[0]);
}

var slides4 = "";
function slide4(event) {
    slides4 = URL.createObjectURL(event.target.files[0]);
}

editForm.addEventListener("submit", (e) => {
    // console.log("ENtered");
    e.preventDefault();

    //Home Page
    var homeTitle = document.getElementById("home-title");
    var form_homeTitle = document.getElementById("home-title-value");

    var homeText = document.getElementById("home-text");
    var form_homeText = document.getElementById("home-text-value");

    var homeLink = document.getElementById("home-link");
    var form_homeLink = document.getElementById("home-link-value");

    insertValue(form_homeTitle, homeTitle);
    insertValue(form_homeText, homeText);
    insertValue(form_homeLink, homeLink);

    //About Me Page Details
    // console.log("Entered about");
    var aboutText = document.getElementById("about-text");
    var form_aboutText = document.getElementById("about-text-value");

    var aboutName = document.getElementById("about-name");
    var form_aboutName = document.getElementById("about-name-value");

    var aboutflink = document.getElementById("about-facebook");
    var form_aboutflink = document.getElementById("about-facebook-value");

    var aboutilink = document.getElementById("about-instagram");
    var form_aboutilink = document.getElementById("about-instagram-value");

    var abouttlink = document.getElementById("about-twitter");
    var form_abouttlink = document.getElementById("about-twitter-value");

    var aboutylink = document.getElementById("about-youtube");
    var form_aboutylink = document.getElementById("about-youtube-value");
    // console.log("Done with links");

    

    var aboutImage = document.getElementById("about-images");

    insertValue(form_aboutText, aboutText);
    insertValue(form_aboutName, aboutName);
    insertValue(form_aboutflink, aboutflink);
    insertValue(form_aboutilink, aboutilink);
    insertValue(form_abouttlink, abouttlink);
    insertValue(form_aboutylink, aboutylink);
   

    if(profilePic !=  "") {
        aboutImage.src = profilePic;
    }

    // Skills Page Details
    // console.log("Entered skill");
    var skilltag = document.getElementsByClassName("tag");
    var form_skilltag = document.getElementsByClassName("tag-value");


    count = 0;
    while (count < skilltag.length) {
        insertValue(form_skilltag[count], skilltag[count]);
        count++;
    }

    var skills = document.getElementsByClassName("skill");
    var form_skillTitle = document.getElementsByClassName("skill-title-value");
    var form_skillPercent = document.getElementsByClassName("skill-percent-value");

    count = 0;
    while (count < skills.length) {

        var h2 = skills[count].getElementsByTagName("H2");
        insertValue(form_skillTitle[count], h2[0]);

        var h3 = skills[count].getElementsByTagName("H3");
        insertValue(form_skillPercent[count], h3[0]);

        var progress = skills[count].getElementsByTagName("PROGRESS");
        progress[0].value = form_skillPercent[count].value;
        count++;
    }


    //slideshow

    var imgslide1 = document.getElementById("slide-img1");
    var imgslide2 = document.getElementById("slide-img2");
    var imgslide3 = document.getElementById("slide-img3");
    var imgslide4 = document.getElementById("slide-img4");

    if(slides1 !=  "") {
        imgslide1.src = slides1;
    }

    if(slides2 !=  "") {
        imgslide2.src = slides2;
    }

    if(slides3 !=  "") {
        imgslide3.src = slides3;
    }

    if(slides4 !=  "") {
        imgslide4.src = slides4;
    }

    
    
    showForm();
})

function insertValue(values, target) {
    // console.log(target.tagName)

    if (values.value != "") {

        if (target.tagName == "A") {
            target.href = values.value;
        }
        else {
            target.innerHTML = values.value;
        }
    }
}