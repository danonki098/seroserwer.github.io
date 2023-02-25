var logined = false;

var objPeople = [
    {
        username: "admin",
        password: "1234"
    },
    {
        username: "test",
        password: "test"
    }
]

function test() {
    var username = document.getElementById("login").value;
    var password = document.getElementById("password").value

    for(var i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username
            && password == objPeople[i].password) {
                alert(username + " jest zalogowany");
                console.log(username + " jest zalogowany");
                logined = true;
                location.href="/indexs/menu.html";
                return;
            } 
            
    }
    alert("Nieprawidłowe login lub hasło!");
    console.log("Nieprawidłowe login lub hasło!");
}

function register() {
    alert("Narazie nie dziala!")
}