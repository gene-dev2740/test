from flask import Flask
import sqlite3

app = Flask(__name__)
con = sqlite3.connect("sample.db")

@app.route("/")
def index():
    return "Hello Flask"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")