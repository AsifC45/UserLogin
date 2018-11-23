document.getElementById("login").addEventListener("click", login);

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "Asif" || password == "C") {
        document.getElementById("solution").innerHTML = "Sign In Successful";
    } else {
        document.getElementById("solution").innerHTML = "Sign In Unsuccessful";
    }
}
