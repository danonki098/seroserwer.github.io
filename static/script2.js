let baned = ['admin'];
function Start() {
    let l = document.getElementById("Login").value;
    let h = document.getElementById("Haslo").value;

    if (l == l ) //"admin"
    {
        if (h == h) //"1234"
        {
            if(baned == l)
            {
                loop();
            } else {
                alert("Zalogowano");
            }
        } else {
            alert("Błąd w logowaniu sprawdz dane jeszcze raz!");
        }

    } else {
        alert("Błąd w logowaniu sprawdz dane jeszcze raz!");
    }
}

function loop() {
    alert("Twoje konto zostalo zablokowane!");
    loop()
}
