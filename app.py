import os
from flask import Flask, render_template
from flask_assets import Bundle, Environment
from socket import gethostname, gethostbyname


ip = gethostbyname(gethostname())

template_dir = os.path.abspath('./src/')
print(template_dir)
app = Flask(__name__, template_folder=template_dir)
assets = Environment(app)

app.config["REQUIREJS_BIN"] = os.path.dirname(__file__) + "/../node_modules/requirejs/bin/r.js"
app.config["REQUIREJS_CONFIG"] = "build.js"
app.config["REQUIREJS_RUN_IN_DEBUG"] = False

debug = True

a = [1,2,3,4,5,6]

props = {0: '0', 1: '1'}

@app.route('/')
def index():
    return render_template('index.html', ip=ip, a=a, props=props)

@app.route('/main')
def main():
    return render_template('main.html')

if __name__ == '__main__':
    app.debug = debug
    app.config["ASSETS_DEBUG"] = debug
    app.run()
