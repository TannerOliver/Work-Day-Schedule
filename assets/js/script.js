//selectors
var mainContainer = document.getElementById("container");
$("#currentDay").text(moment());

//variables
var allTheNotes = [];
var saveBtn = $(".saveBtn");

//functions
function init() {
  var storedNotes = JSON.parse(localStorage.getItem("allTheNotes"));
  $(".description").each(function (index) {
    $(this).val(storedNotes[index]);
  });
}

//this checks the time and should display the class for the css
function checkTime() {
  var hours = moment().format("H");
  $(".time").each(function () {
    var currentRow = parseInt($(this).attr("id"));
    if (currentRow < hours) {
      $(".description").addClass("past");
    } else if (currentRow === hours) {
      $(".description").addClass("present");
    } else currentRow > hours;
    $(".description").addClass("future");
  });
}

//this function runs when user clicks save button
saveBtn.on("click", function () {
  $("textarea").each(function () {
    allTheNotes.push($(this).val());
  });
  localStorage.removeItem("allTheNotes");
  localStorage.setItem("allTheNotes", JSON.stringify(allTheNotes));
});

//calling functions here
checkTime();
init();
