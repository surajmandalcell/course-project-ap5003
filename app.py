from flask import Flask
from flask import send_from_directory
from backend.routes import app_routes

app = Flask(__name__, static_folder="./frontend/build", static_url_path="/")
app.register_blueprint(app_routes)


# Static React App
@app.route("/")
def serve():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(use_reloader=True, host="0.0.0.0", port=80, debug=True, threaded=True)
