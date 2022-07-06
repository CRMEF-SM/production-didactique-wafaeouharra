from flask import Flask,request
from flask_cors import CORS
from engine import engine
app = Flask(__name__)
CORS(app)

@app.route('/get-response', methods=['POST'])
def result():
            print('New requesting ...')
            request_data = request.get_json()
            message = request_data["message"]
            print('Request for: ',message)
            response = engine(message)
            print('Response : ',response)
            print('Done !')
            return {"response":response}

@app.route('/')
def hello_world():
   return engine('hey')

if __name__ == '__main__':
   print("server starting on 5000")
   app.run(host="0.0.0.0", port=5000, debug=True)