from flask import Flask
from flask import jsonify

app = Flask(__name__)


@app.route("/")
def hello():
    """Return a friendly HTTP greeting."""
    print("I am inside hello world")
    return "Hello World! I can make change at route: /change"


@app.route("/change/<dollar>/<cents>")
def changeroute(dollar, cents):
    print(f"Make Change for {dollar}.{cents}")
    return jsonify({dollar, cents})


if __name__ == "__main__":
    app.run(use_reloader=True, host="0.0.0.0", port=8080, debug=True, threaded=True)
