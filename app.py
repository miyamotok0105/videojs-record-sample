# coding:utf-8
import json
import os
from flask import Flask, jsonify, make_response, request, Response
from flask import Flask, request, jsonify, abort, render_template
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['JSON_AS_ASCII'] = False
CORS(app)

@app.after_request
def after_request(response):
  # response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080/')
  response.headers.add('Access-Control-Allow-Origin', 'http://127.0.0.1:5000/')
  # response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route('/status', methods=['GET'])
def status():
  return jsonify({'message': 'OK'})

@app.route('/')
def home():
    return render_template('index_vue.html', title='home')
    # return render_template('index.html')

@app.route('/upload', methods=['POST'])
def post_camera():
  print(request.files)
  if 'file' not in request.files:
        return abort(400, {'message': 'ファイルは必須です'})
  fileStorageObj = request.files['file']
  filename = secure_filename(fileStorageObj.filename)
  fileStorageObj.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
  return jsonify({'message': 'アップロード成功'})


if __name__ == "__main__":
  app.run()
