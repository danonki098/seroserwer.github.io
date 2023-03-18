var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var surename = document.getElementById("surename").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var body =
    "<h1>Dane użytkownika: <h1><br>" +
    "Imię: " +
    name +
    "<br>" +
    "Nazwisko: " +
    surename +
    "<br>" +
    "Email: " +
    email +
    "<br>" +
    "<br>" +
    "Treść maila: " +
    "<br>" +
    "<br>" +
    "Temat: " +
    subject +
    "<br>" +
    "Wiadomość: " +
    message +
    "<br>" +
    "<br>" +
    "<h1>by danonki098 TM</h1>";
  if (
    name == "" ||
    surename == "" ||
    email == "" ||
    subject == "" ||
    message == ""
  ) {
    alert("Complete the form!");
    return;
  }

  Email.send({
    SecureToken: "6d117253-9cd8-43e7-b425-d37cfdb31978",
    To: "damianlesniak28@gmail.com",
    From: "servisebotinfo@gmail.com",
    Subject: subject,
    Body: body,
  }).then((message) => alert(message));
});
