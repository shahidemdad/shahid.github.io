from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__,template_folder='templates')
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:2021@localhost/bmiapp'
db=SQLAlchemy(app)

class Data(db.Model):

    def __init__(self,email_,height_,weight_):
        self.email_=email_
        self.height_=height_
        self.weight_=weight_


    __tablename__="data"
    id=db.Column(db.Integer, primary_key=True)
    email_=db.Column(db.String(120), unique=True)
    height_=db.Column(db.Integer)
    weight_=db.Column(db.Integer)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/thankyou", methods=['POST'])
def thankyou():
    if request.method=='POST':
        email=request.form["email_name"]
        height=request.form["height_name"]
        weight=request.form["weight_name"]
        return render_template("thankyou.html")

if __name__=='__main__':
    app.debug=True
    app.run()