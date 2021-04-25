function addUser() {
    window.location = "P-90.html";
    user_name1 = document.getElementById("player1_name_input").value;
    user_name2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("user name 1 is", user_name1);
    localStorage.setItem("user name 2 is", user_name2);
}