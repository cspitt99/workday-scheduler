var timeBlocksArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currenthour = moment().hour()
var currentDay = $("#currentDay")

var systemTime = moment().format("dddd, MMMM Do")
currentDay.text(systemTime)

function displayColor() {
    for (var i = 0; i < timeBlocksArr.length; i++) {
        var currentTextEl = $("#" + timeBlocksArr[i])

        if (currenthour > timeBlocksArr[i]) {
            currentTextEl.addClass("past")
        }
        else if (currenthour === timeBlocksArr[i]) {
            currentTextEl.addClass("present")
        }
        else if (currenthour < timeBlocksArr[i]) {
            currentTextEl.addClass("future")
        }
    }
}

displayColor()

let textAreaEl = $("textarea");
let saveBtn = $(".saveBtn");

let planEvent = localStorage.getItem("input");

function saveAndResetTextContent(event) {

    let currentTxtArea = $(event.target).parents().children("div").children("textarea");
    let inputEl = $('<p>');
    let inputVal = currentTxtArea.val();

    localStorage.setItem("input", inputVal);
    inputEl.text(inputVal);
    currentTxtArea.append(inputEl);

}