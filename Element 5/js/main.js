// console.log("enter");

//Navigation
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

// console.log(toggle);

/* Toggle mobile menu */
function toggleMenu() {
    // console.log("enter");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        // console.log("enterthis");
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

console.log("hello");

var results = document.getElementsByClassName('result');
    for (var i = 0; i < results.length; i++) {
        results[i].classList.add("show");
    }

var searchResults = document.getElementById("search-form");
searchResults.addEventListener("submit", (e) => {
    e.preventDefault();
    var results = document.getElementsByClassName('result');
    for (var i = 0; i < results.length; i++) {
        results[i].classList.remove("show");
    }

    var searchWord = document.getElementById('search-word').value;
    var category = document.getElementById('select-category').value;
    var location = document.getElementById('select-location').value;


    for (var i = 0; i < results.length; i++) {
        var dataCategory = results[i].dataset.category;
        var dataLocation = results[i].dataset.location;
        var title = document.getElementById("title").innerHTML;


        if (dataCategory == category && dataLocation == location && title.toUpperCase().includes(searchWord) > -1){
            console.log("iff");
            results[i].classList.add("show");

        }
    }



})
