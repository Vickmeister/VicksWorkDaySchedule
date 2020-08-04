let currentDay = { "9AM": "10AM": "11AM": "12PM": "1PM": "2PM": "3PM": "4PM": "5PM"};

$(document).ready(function()){
    if(!localStorage.getItem('currentDay'))
    {
        updateCalendarTasks(currentDay)
    }
} else 

{
    updateCalendarTasks(JSON.parse(localStorage.getItem('currentDay')));
}

$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

let counter = 1;
for (currentDay){
    let textBox = "#textbox" + counter
    let timeName = "#timename" + counter
    let timeString = $(timename).text()
    let currentHour = moment().hour()
    let timeHour = specificHour(timeString)
    $(textBox).text(workDay[property])
    
    if(timeHour < currentHour){
        $(textBox).addClass("past-hour");
        }
        else if (timeHour > currentHour);
        {
        $(textEntry).addClass("future-hour");
        }
        else {
        $(textEntry).addClass("present-hour");
        }
        counter ++;
    }
}

$("button").onclick(function()){
    value = $(this).siblings(textsection).val();
    hourString = $(this).siblings("div").text();
    saveSchedule(hourString, value);
}

function specificHour(timeHour){
    switch(hourString){
        case "9AM": return 9;
        case "10AM": return 10;
        case "11AM": return 11;
        case "12PM": return 12;
        case "1PM": return 1;
        case "2PM": return 2;
        case "3PM": return 3;
        case "4PM": return 4;
        case "5PM": return 5;
    }
}

//FUNCTIONS
function saveTimes() {
    result = localStorage.getItem('currentDay');
    return (result ? result : currentDay);
}

function localStorage() {
    localStorage.setItem('currentDay', JSON.stringify(currentDay));
}
// CONTINUE FROM HERE  
function saveToLocalStorage(actionDay) {
localStorage.setItem('currentDay', JSON.stringify(actionDay));
}
  
function saveSchedule(hours, action) {
if(!localStorage.getItem('currentDay') {
initializeLocalStorage();
}
  
let dayTime = JSON.parse(localStorage.getItem('currentDay'));
dayTime[hours] = action
saveToLocalStorage(dayTime);
}
  
function recordDayTasks(dayTask) {
$(".calendar-row").each(function(index) {
let res = $(this).children("div");
$(this).children("textarea").text(dayTask[res.text()]);
})
}