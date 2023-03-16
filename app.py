from flask import Flask, redirect, url_for, render_template, request, session, flash
from datetime import timedelta
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = "danonki098"
app.permanent_session_lifetime = timedelta(minutes=5)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/home")
def homee():
    return redirect(url_for("home"))

@app.route("/login", methods = ["POST", "GET"])
def login():
    if request.method == "POST":
        session.permanent = True
        user = request.form["nick"]
        session["user"] = user
        flash("Udało ci się zalogować!")
        return redirect(url_for("test"))
    else:
        if "user" in session:
            flash("Jesteś już zalogowany")
            return redirect(url_for("test"))
        return render_template("login.html")

@app.route("/user")
def test():
    if "user" in session:
        user = session["user"]
        return render_template("user.html", user=user)
    else:
        flash("Nie jesteś zalogowany")
        return redirect(url_for("login"))

@app.route("/logout")
def logout():
    flash("Zostałeś wylogowany!", "info")
    session.pop("user", None)
    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)