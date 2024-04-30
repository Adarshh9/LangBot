from flask import Flask, request, jsonify, render_template
from werkzeug.utils import secure_filename
from utils import chatbot
import os

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def predict():
    user_query = request.form.get('query')  # Access user query from form data

    # Send user query to server
    chatbot_response = chatbot(user_query)

    response = jsonify({
        'chatbot_response': chatbot_response
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/upload_file', methods=['POST'])
def upload_file():
    file = request.files['file']  # Access uploaded file from form data

    if file:
        # Ensure a secure filename and save the file to the upload folder
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

    return jsonify({
        'message': 'File uploaded successfully'
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
