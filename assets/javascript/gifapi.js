$(function () {
    populateButtons(searchArray, "searchButton", "#buttonsArea");
    console.log("Page Loaded");
})

let searchArray = ["Cat", "Hamster", "Dragon"];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (let i = 0; i < searchArray.length; i++) {
        let a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}

$(document).on("click", ".searchButton", function () {
    const type = $(this).data("type");
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=iF4QSvfxfhXm2qj3B0j9pEUGHDGWUfdX&limit=10";
    $.ajax({url:queryURL, method:"GET"})
        .done(function(response){
            console.log(response);
            for(let i = 0; i < response.data.length; i++){
                let searchDiv = $("<div class = 'search-item'>");
                let rating = response.data[i].rating;
                let p = $("<p>").text("Rating: " + rating);
                let animated = response.data[i].images.fixed_height.url;
                let still = response.data[i].images.fixed_height_still.url;
                let image = $("<img>");
                image.attr("src", still);
                image.attr("data-still", still);
                image.attr("data-animated", animated);
                image.attr("data-state", "still");
                searchDiv.append(p);
                searchDiv.append(image);
                $("#searches").prepend(searchDiv);
            }
        })
})