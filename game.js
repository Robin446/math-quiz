player_1name = localStorage.getItem("player_1_name");
player_2name = localStorage.getItem("player_2_name");

score1 = 0;
score2 = 0;

document.getElementById("player_1name").innerHTML = player_1name + ":";
document.getElementById("player_2name").innerHTML = player_2name + ":";
document.getElementById("score1").innerHTML = score1;
document.getElementById("score2").innerHTML = score2;
document.getElementById("player_question").innerHTML = "question turn -" + player_1name;
document.getElementById("player_answer").innerHTML = "answer turn -" + player_2name;

function send(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    inputBox = "<br> answer:<input type='text' id='inputCheckbox'>";
    checkbutton = "<br><br> <button class='btn btn-info' onclick='check()'> check</button>";
    number = num1 + "x" + num2;
    row = number + inputBox + checkbutton;
    
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}