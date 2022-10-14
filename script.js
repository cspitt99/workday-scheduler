//step 1: put current date using moment()
//step 2: compare the current hour with time-blocks
//step 2.5: translate time from military time
//step 3: use css classes for present, past, and future
//step 4: grab the text area value and store it in local storage

var timeBlocksArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

var currenthour = moment().hour()

var currentDay = $("#currentDay")

var systemTime = moment().format("dddd, MMMM Do")
currentDay.text(systemTime)

function displayColor(){
    for(var i=0; i < timeBlocksArr.length;i++){
        var currentTextEl = $("#" +timeBlocksArr[i])

        if(currenthour>timeBlocksArr[i]){
           currentTextEl.addClass("past")
        }
        else if (currenthour === timeBlocksArr[i]) {
       currentTextEl.addClass("present")     
        }
        else if(currenthour < timeBlocksArr[i]){
            currentTextEl.addClass("future")
        }
    }
}

displayColor()