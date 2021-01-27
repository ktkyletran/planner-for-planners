$(document).ready(function() {

    var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

    // Add a row for each time slot and then adds text box & save button
    function timeSlots() {
        for (i = 0; i < times.length; i++) {
            var createDiv = $("<div>");

            createDiv.addClass("row hour");
            createDiv.text(times[i]);
            
            $(".container").append(createDiv);
        };

        addText();
        saveBtn();
    };


    // Add text boxes
    function addText(){
            var createText = $("<textarea>");

            createText.addClass("textarea");
            
            $(".row").append(createText);
    };


    // Add save buttons
    function saveBtn() {
        var createSave = $("<button>");

        createSave.addClass("saveBtn far fa-save");

        $(".row").append(createSave);
    };


    // Display date function
    function displayDate() {
        var date = moment().format("MMMM Do YYYY - h:mma");
        $("#currentDay").append(date);
    };


    // Pulls data from localstorage to text area
    function loadData() {
        storedItems = localStorage.getItem("userText");
        $(".textarea").text(storedItems);
    }


    // Init function
    function init() {
        timeSlots();
        displayDate();
        loadData();
    };


    init();
    
    $(".saveBtn").on("click", function() {
        var userText = $(".textarea").val();
        localStorage.setItem("userText", userText);
        alert("Saved!");
    });


});