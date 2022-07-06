
from neuralintents import GenericAssistant
# import requests

def function_for_greetings():
    print("You triggered the greetings intent!")
    # Some action you want to take

def function_for_stocks():
    print("You triggered the stocks intent!")
    # Some action you want to take

mappings = {'greeting' : function_for_greetings, 'stocks' : function_for_stocks}

intentsPath = 'educatif.json'

assistant = GenericAssistant(intentsPath, intent_methods=mappings ,model_name="test_model")

assistant.train_model()

assistant.save_model()

done = False

# intents = []
# def init(self, intents):
#     if intentsPath.endswith(".json"):
#         self.load_json_intents(intentsPath)
#         intents = self.intents

def engine(message):
        response = assistant.request(message)
        if response :
           return response
        else:
            # r = requests.get('https://api.github.com/users/naveenkrnl')
            # https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=
            return "I don't understand! please ask google"

# while not done:
#     message = input("Enter a message: ")
#     if message == "STOP":
#         done = True
#     else:
#        assistant.request(message)