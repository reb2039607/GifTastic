$(function(){
    populateButtons(searchArray, "searchButton", "#buttonsArea");
    console.log("Page Loaded");
})

let searchArray = ["Cat", "Hamster", "Dragon"];

function populateButtons(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for(let i = 0; i < searchArray.length; i++){
        let a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}