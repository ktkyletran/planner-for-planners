// var generateDiv = document.querySelector(".container");
// var textArea = document.getElementById("text-area");

// var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// function timeSlots() {
//     for (var i = 0; i < times.length; i++) {
//         var timeSlots = document.createElement("div");
//         var userInput = document.createElement("TEXTAREA");

//         timeSlots.textContent = times[i];
//         // textArea.textContent = userInput[i];
//         timeSlots.setAttribute("class", "row textarea hour");
//         timeSlots.setAttribute("id", "text-area");
//         // userInput.setAttribute("class", "row")
//         generateDiv.append(timeSlots);
//         // textArea.append(userInput);
//     }
// ;}

// timeSlots();

$(document).ready(function() {

var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

function timeSlots() {
    for (var i = 0; i < times.length; i++) {
        var createDiv = $("<div>");

        createDiv.addClass("row hour");
        createDiv.text(times[i]);
        
        $(".container").append(createDiv);
    };

    addText();
};

function addText(){
        var createText = $("<textarea>");

        createText.addClass("textarea");

        $(".row").append(createText);
};

function displayDate() {
    var date = moment().format("MMMM Do YYYY");
    $("#currentDay").append(date);
};

timeSlots();
displayDate();

});