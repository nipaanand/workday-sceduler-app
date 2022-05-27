var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// each time block is color-coded to indicate whether it is in the past, present, or future
function timeBlockChanger() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        // console.log(this); //each time-block

        if (currHour > hour) {
            $(this).addClass("future");
            $(this).removeclass("present");
            $(this).removeclass("past");
        } else if (currHour === hour) {
            $(this).addClass("present");
            $(this).removeclass("past");
        } else {
            $(this).addClass("past");

        }
    })
};
// Get item from local storage if any

$("#9 .description").val(localStorage.getItem("9"));
$("10 .description").val(localStorage.getItem("10"));
$("11 .description").val(localStorage.getItem("11"));
$("12 .description").val(localStorage.getItem("12"));
$("13 .description").val(localStorage.getItem("13"));
$("14 .description").val(localStorage.getItem("14"));
$("15 .description").val(localStorage.getItem("15"));
$("16 .description").val(localStorage.getItem("16"));
$("17 .description").val(localStorage.getItem("17"));



// WHEN I click the save button for that time block
saveBtn.on("click", function() {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});

// WHEN I refresh the page
// THEN the saved events persist
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        // console.log(this);
        // console.log(currHour);

        if (currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

/**
 * CALL FUNCTIONS
 */

timeBlockChanger();
usePlanner();
var interval = setInterval(timeBlockChanger, 1000); {

};