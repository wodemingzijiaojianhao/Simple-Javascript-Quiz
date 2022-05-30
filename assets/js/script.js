var titleEl = document.querySelector("#title");
var contentEl = document.querySelector("#content");
var timerEl = document.querySelector("#timeCount");
var buttonSectionEl = document.querySelector("#buttonSection");
var buttonsEl = document.querySelector("#buttons");
var button1El = document.querySelector("#button1");
var button2El = document.querySelector("#button2");
var button3El = document.querySelector("#button3");
var button4El = document.querySelector("#button4");
var userInput = document.querySelector("#nameInput");
var submitButton = document.querySelector("#submitButton");
var inputBox = document.querySelector("#inputBox");

var mode = 0;
var secondLeft = 20;
var score = 0;
var historyRecord = JSON.parse(localStorage.getItem("record"));
if (historyRecord === null) {
    historyRecord = [];
    localStorage.setItem("record", JSON.stringify(historyRecord));
}

//localStorage.setItem("name", "null");
//localStorage.setItem("score", 0);
function welcomeScreenRender() {
    //button1El.setAttribute("style", "margin: 50px 45%;");
    button1El.innerHTML = "Start Quiz";
    button2El.setAttribute("style", "display: none;");
    button3El.setAttribute("style", "display: none;");
    button4El.setAttribute("style", "display: none;");
}


function q1Render() {
    buttonSectionEl.innerHTML = "";
    buttonsEl = document.createElement("div");
    buttonsEl.setAttribute("id", "buttons");
    buttonsEl.innerHTML = "";
    buttonSectionEl.appendChild(buttonsEl);
    button1El = document.createElement("button");
    button2El = document.createElement("button");
    button3El = document.createElement("button");
    button4El = document.createElement("button");
    buttonsEl.appendChild(button1El);
    buttonsEl.appendChild(button2El);
    buttonsEl.appendChild(button3El);
    buttonsEl.appendChild(button4El);
    titleEl.innerHTML = "Question 1";
    contentEl.innerHTML = "In Javascript, what is the correct syntax to write something onto the console?";
    button1El.innerHTML = "print(~)";
    button2El.innerHTML = "System.out.println(~)";
    button3El.innerHTML = "console.log(~)"; //correct
    button4El.innerHTML = "writeln(~)";
    buttonsEl.addEventListener("click", function(event) {
        //event.preventDefault();
        event.stopPropagation();
        var elementSelected = event.target;
        if (elementSelected.matches("button")) {
            if (elementSelected === button3El) {
                elementSelected.innerHTML = "correct!";
                elementSelected.setAttribute("style", "background-color: green;");
                mode = 2;
                secondLeft = secondLeft+4;
                score++;
            }
            else {
                elementSelected.innerHTML = "Wrong!";
                elementSelected.setAttribute("style", "background-color: red");
                mode = 2;
                secondLeft = secondLeft-4;
            }
        }
    })
}

function q2Render() {
    buttonSectionEl.innerHTML = "";
    buttonsEl = document.createElement("div");
    buttonsEl.setAttribute("id", "buttons");
    buttonsEl.innerHTML = "";
    buttonSectionEl.appendChild(buttonsEl);
    button1El = document.createElement("button");
    button2El = document.createElement("button");
    button3El = document.createElement("button");
    button4El = document.createElement("button");
    buttonsEl.appendChild(button1El);
    buttonsEl.appendChild(button2El);
    buttonsEl.appendChild(button3El);
    buttonsEl.appendChild(button4El);
    titleEl.innerHTML = "Question 2";
    contentEl.innerHTML = "In Javascript, how many type of primitive variables exist?";
    button1El.innerHTML = "one";
    button2El.innerHTML = "two";
    button3El.innerHTML = "three";
    button4El.innerHTML = "four"; //correct
    buttonsEl.addEventListener("click", function(event) {
        //event.preventDefault();
        event.stopPropagation();
        var elementSelected = event.target;
        if (elementSelected.matches("button")) {
            if (elementSelected === button4El) {
                elementSelected.innerHTML = "correct!";
                elementSelected.setAttribute("style", "background-color: green;");
                mode = 3;
                secondLeft = secondLeft+4;
                score++;
            }
            else {
                elementSelected.innerHTML = "Wrong!";
                elementSelected.setAttribute("style", "background-color: red");
                mode = 3;
                secondLeft = secondLeft-4;
            }
        }
    })
}

function q3Render() {
    buttonSectionEl.innerHTML = "";
    buttonsEl = document.createElement("div");
    buttonsEl.setAttribute("id", "buttons");
    buttonsEl.innerHTML = "";
    buttonSectionEl.appendChild(buttonsEl);
    button1El = document.createElement("button");
    button2El = document.createElement("button");
    button3El = document.createElement("button");
    button4El = document.createElement("button");
    buttonsEl.appendChild(button1El);
    buttonsEl.appendChild(button2El);
    buttonsEl.appendChild(button3El);
    buttonsEl.appendChild(button4El);
    titleEl.innerHTML = "Question 3";
    buttonsEl.setAttribute("style", "font-size: 10px;");
    contentEl.innerHTML = "In Javascript, what is the correct syntax for writting a for loop which iterate all the items in an integer array called list?";
    button1El.innerHTML = "for (var i = 0; i < list.length; i++) {action}"; //correct
    button2El.innerHTML = "for i in list: action";
    button3El.innerHTML = "for (int i = 0; i < list.length; i++) {action}";
    button4El.innerHTML = "for (int i : list) {action}";
    buttonsEl.addEventListener("click", function(event) {
        //event.preventDefault();
        event.stopPropagation();
        var elementSelected = event.target;
        if (elementSelected.matches("button")) {
            if (elementSelected === button1El) {
                elementSelected.innerHTML = "correct!";
                elementSelected.setAttribute("style", "background-color: green;");
                mode = 4;
                secondLeft = secondLeft+4;
                score++;
            }
            else {
                elementSelected.innerHTML = "Wrong!";
                elementSelected.setAttribute("style", "background-color: red");
                mode = 4;
                secondLeft = secondLeft-4;
            }
        }
    })
}

function q4Render() {
    buttonSectionEl.innerHTML = "";
    buttonsEl = document.createElement("div");
    buttonsEl.setAttribute("id", "buttons");
    buttonsEl.innerHTML = "";
    buttonSectionEl.appendChild(buttonsEl);
    button1El = document.createElement("button");
    button2El = document.createElement("button");
    button3El = document.createElement("button");
    button4El = document.createElement("button");
    buttonsEl.appendChild(button1El);
    buttonsEl.appendChild(button2El);
    buttonsEl.appendChild(button3El);
    buttonsEl.appendChild(button4El);
    titleEl.innerHTML = "Question 4";
    contentEl.innerHTML = "In Javascript, which sentence returns the type of variable selected?";
    button1El.innerHTML = "type variableName";
    button2El.innerHTML = "typeOf variableName";
    button3El.innerHTML = "typeof variableName"; //correct
    button4El.innerHTML = "None of these are correct";
    buttonsEl.addEventListener("click", function(event) {
        //event.preventDefault();
        event.stopPropagation();
        var elementSelected = event.target;
        if (elementSelected.matches("button")) {
            if (elementSelected === button3El) {
                elementSelected.innerHTML = "correct!";
                elementSelected.setAttribute("style", "background-color: green;");
                mode = 5;
                secondLeft = secondLeft+4;
                score++;
            }
            else {
                elementSelected.innerHTML = "Wrong!";
                elementSelected.setAttribute("style", "background-color: red");
                mode = 5;
                secondLeft = secondLeft-4;
            }
        }
    })
}

function q5Render() {
    buttonSectionEl.innerHTML = "";
    buttonsEl = document.createElement("div");
    buttonsEl.setAttribute("id", "buttons");
    buttonsEl.innerHTML = "";
    buttonSectionEl.appendChild(buttonsEl);
    button1El = document.createElement("button");
    button2El = document.createElement("button");
    button3El = document.createElement("button");
    button4El = document.createElement("button");
    buttonsEl.appendChild(button1El);
    buttonsEl.appendChild(button2El);
    buttonsEl.appendChild(button3El);
    buttonsEl.appendChild(button4El);
    titleEl.innerHTML = "Question 5";
    contentEl.innerHTML = "Which year is Javascript created?";
    button1El.innerHTML = "1989";
    button2El.innerHTML = "1993";
    button3El.innerHTML = "1995"; 
    button4El.innerHTML = "1996";//correct
    buttonsEl.addEventListener("click", function(event) {
        //event.preventDefault();
        event.stopPropagation();
        var elementSelected = event.target;
        if (elementSelected.matches("button")) {
            if (elementSelected === button4El) {
                elementSelected.innerHTML = "correct!";
                elementSelected.setAttribute("style", "background-color: green;");
                mode = 6;
                secondLeft = secondLeft+4;
                score++;
            }
            else {
                elementSelected.innerHTML = "Wrong!";
                elementSelected.setAttribute("style", "background-color: red");
                mode = 6;
                secondLeft = secondLeft-4;
            }
        }
    })
}

function init() {
    mode = 0;
    welcomeScreenRender();
    button1El.addEventListener("click", function() {
        mode = 1;
        button1El.innerHTML = "Loading...";
        mainGame();
    })
    
    
    
}
function mainGame() {
    var countDown = setInterval(function() {
        secondLeft = secondLeft-2;
        timerEl.innerHTML = secondLeft + " seconds left";
        //console.log(score);
        if (mode === 1) {
            q1Render();
        } else if (mode === 2) {
            q2Render();
        } else if (mode === 3) {
            q3Render();
        } else if (mode === 4) {
            q4Render();
        } else if (mode === 5) {
            q5Render();
        } else {
            clearInterval(countDown);
            finished();
        }
        if (secondLeft <= 0) {
            secondLeft = 0;
            clearInterval(countDown)
            timesUp();
        }
    },2000);
    //button1El.setAttribute("style", "margin: 10px 45%;");
    
}


function timesUp() {
    titleEl.innerHTML = "Times Up!";
    timerEl.innerHTML = "";
    contentEl.innerHTML = "Your score is: " + score*5 +"<br> <br> You did an amazing job! Please input your name below for record:";
    button1El.style.display = "none";
    button2El.style.display = "none";
    button3El.style.display = "none";
    button4El.style.display = "none";
    inputBox.setAttribute("style", "display: flex");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        storeInfo();
        location.replace("./highScore.html");
    });
    
}

function finished() {
    titleEl.innerHTML = "You finished!";
    timerEl.innerHTML = "";
    contentEl.innerHTML = "Your score is: " + score*5 +"<br> <br> You did an amazing job! Please input your name below for record:";
    button1El.style.display = "none";
    button2El.style.display = "none";
    button3El.style.display = "none";
    button4El.style.display = "none";
    inputBox.setAttribute("style", "display: flex");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        storeInfo();
        location.replace("./highScore.html");
    });
}
function storeInfo() {
    var record = {
        name: userInput.value.trim(),
        score: score*5
    };
    historyRecord.push(record);
    localStorage.setItem("record", JSON.stringify(historyRecord));
}
init();
