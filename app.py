from flask import Flask,render_template,request,session,redirect,url_for
import sqlite3
from flask.helpers import url_for
import requests
import json


app = Flask(__name__)
app.secret_key = "fjdisjifhhddfiojpihfhpfd"
db = sqlite3.connect('mydb.db',check_same_thread=False)
c = db.cursor()

@app.route("/register",methods=["GET","POST"])
def register():
    if request.method == "GET":
        return render_template("register.html",message=None)
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        exists = c.execute("select * from users where username = ?",[username]).fetchall()
        if exists: 
            message = "user already exists"
            return render_template("register.html",message=message)
        c.execute("insert into users(username, password) values (?,?)",[username,password])
        db.commit()
        return render_template("login.html",message=None)

@app.route("/login",methods=['GET','POST'])
def login():
    session.clear()
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        exists = c.execute("select * from users where username = ?",[username]).fetchall()
        if not exists:
            message = "username does not exist"
            return render_template("login.html",message=message)
        if exists[0][2] != password :
            message = "incorrect password"
            return render_template("login.html",message=message)
        session["user_id"] =  exists[0][0]
        return redirect(url_for("index"))
        
    if request.method == "GET":
        return render_template("login.html",message=None)

@app.route("/")
def index():
    if session.get("user_id") == None:
        return redirect(url_for("login"))

    url ="http://metaphorpsum.com/paragraphs/1"
    response = requests.get(url)
    paragraph = response.text
    paragraph = paragraph.split(' ')
    words_n = len(paragraph) 
    return render_template("index.html",paragraph=paragraph,word_c = words_n)

@app.route("/score",methods=["POST"])
def score():
    score = json.loads(request.data.decode('utf-8'))
    score = round(score["score"])
    exist = c.execute("select * from scores where user_id = ?",[session["user_id"]]).fetchall()
    if exist :
        if  score > exist[0][1] :
            c.execute("update scores set score =? where user_id =?",[score,session["user_id"]])
            db.commit()
    else :
        c.execute("insert into scores(user_id,score) values(?,?)",[session["user_id"],score])
        db.commit()
    return "success"

@app.route("/leadboards")
def leadboards():
    scores = c.execute("select username,score from users inner join scores on user_id = id order by score desc limit 10").fetchall()
    return render_template("leadboards.html",scores=scores,length=len(scores))

@app.route("/logout")
def logout():
    return redirect(url_for("login"))



if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")