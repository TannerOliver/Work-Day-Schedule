//state=["", "note", ""]   [9, 10, 11, etc.] make an area for all of the time blocks inside of the timeblock array

//when I save: update the global variable "allTheNotes"

//selectors
var mainContainer = document.getElementById("container");
$("#currentDay").text(moment());

//variables
var allTheNotes = []; //single source of truth

var saveBtn = $(".saveBtn");

//functions
function init() {
  //check local storage
  localStorage.getItem("allTheNotes");
  console.log(localStorage.getItem("allTheNotes"));
  //update global variable with local storage
  //populate the form fields with whatever saved data exists
  // populate with whatever saved data exits <textarea data-hour="9" /> put this into the text area to make it a specific hour block or to identify that text block
  // use momentjs to see if the current time vloack is past , present or future
  //$(this).addClass("") this point to a specific field
}

//this checks the time and should display the class for the css
function checkTime() {
  var hours = moment().format("H");
  $(".time").each(function () {
    var currentRow = parseInt($(this).val(".time"));
    console.log(currentRow);
    //if (".row")
  });
}

//this function runs when user clicks save button
saveBtn.on("click", function () {
  $("textarea").each(function () {
    console.log($(this).val());
    allTheNotes.push($(this).val());
  });
  localStorage.removeItem("allTheNotes");
  localStorage.setItem("allTheNotes", allTheNotes);
  console.log("clicked");
});

//calling functions here
checkTime();
init();
