import pickle

with open('model/hf_chain.pickle','rb') as file:
    chain = pickle.load(file)

with open('model/hf_database.pickle','rb') as file:
    database = pickle.load(file)

def chatbot(query):
    docs = database.similarity_search(query)
    answer = chain.run(input_documents=docs ,question=query)

    return answer