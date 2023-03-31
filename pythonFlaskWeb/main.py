import os
import secrets

from flask import Flask, render_template
from PIL import Image

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def index():
    return render_template("index.html")


def save_picture(form_picture):
    random_hex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(form_picture.filename)
    picture_fn = random_hex + f_ext
    picture_path = os.path.join(app.root_path, 'static/images', picture_fn)

    output_size = (1920 / 3, 1920 / 3)
    i = Image.open(form_picture)
    i.thumbnail(output_size)

    form_picture.save(picture_path)

    return picture_fn


if "__name__" == "__main__":
    app.run(debug=True)
