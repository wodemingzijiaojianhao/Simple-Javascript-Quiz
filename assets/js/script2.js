var mainContent = document.querySelector("#highScoreContent");
var buttonBack = document.querySelector("#buttonBack");
var clearResult = document.querySelector("#clearResult");
var historyRecord = JSON.parse(localStorage.getItem("record"));
function init() {
    console.log(historyRecord);
    if (historyRecord == null) {
        mainContent.innerHTML = "No Record Yet";
        console.log("haha");
    } else {
        var result = "";
        for (var i = 0; i < historyRecord.length; i++) {
            result = result+historyRecord[i].name+": "+historyRecord[i].score+"<br>";
            console.log(result);
        }
        mainContent.innerHTML = result;
        console.log(mainContent.innerHTML);
    }
    buttonBack.addEventListener("click", function() {
        location.replace("./index.html");
    });
    clearResult.addEventListener("click", function(){
        localStorage.clear();
        mainContent.innerHTML = "All records cleared!";
    })
}
init();