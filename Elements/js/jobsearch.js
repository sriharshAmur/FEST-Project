
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
        // console.log("iff");
        results[i].classList.add("show");

    }
}



})