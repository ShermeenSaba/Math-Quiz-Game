function send() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "P-90.html";
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

question_turn = "player1";
answer_turn = "player2";

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score + " : ";
document.getElementById("player2_score").innerHTML = player2_score + " : ";

document.getElementById("player1_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player2_answer").innerHTML = "Answer Turn : " + player2_name;

function send() {
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    console.log(n1);
    console.log(n2);
    var product = number1 * number2;
    console.log(product);
    localStorage.setItem("productanswer", product);
    question_number = number1 + " X " + number2;
    input_box = "<br>Answer : <input type='number' id='input_answer'>";
    check_button = "<br><br><button class='bt btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

function check() {
    get_answer = document.getElementById("input_answer").value;
    var p = localStorage.getItem("productanswer");
    console.log("answer given by user- " + get_answer);
    if (get_answer == p) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player1_question").innerHTML = "Question_turn - " + player2_name;
    }
    else {
        question_turn = "player1"
        document.getElementById("player1_question").innerHTML = "Question_turn - " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player2_answer").innerHTML = "Answer_turn - " + player2_name;
    }
    else {
        answer_turn = "player1"
        document.getElementById("player2_answer").innerHTML = "Answer_turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}