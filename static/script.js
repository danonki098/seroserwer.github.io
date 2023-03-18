var objPeople = [
    {
        email: "admin@wp.pl",
        password: "1234"
    },
    {
        email: "test@wp.pl",
        password: "test"
    }
]

function toLogin() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    for (var i = 0; i < objPeople.length; i++) {
        if (email == objPeople[i].email
            && pass == objPeople[i].password) {
                alert("Zalogowano!");
                location.href = "/indexs/menu.html";
                return;
            }
    }
    alert("Błędne dane!");
}


//EVENTY
var btn1 = document.getElementById('logout');
btn1.addEventListener('click', function(e) {
     e.preventDefault()
     location.href="/indexs/login.html";
})

var btn2 = document.getElementById('menu');
btn2.addEventListener('click', function(e) {
    e.preventDefault()
    location.href="/";
})