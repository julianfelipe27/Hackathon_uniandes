from flask import Flask, jsonify,request
from flask_cors import CORS


def initModel(variables)
    import pandas as pd
    import os

    os.chdir('/Users/mont_/OneDrive/Documentos/Hackathon')
    prof =pd.read_csv('dataset_training.csv')

    print("Shape:", prof.shape) 
  
    # column names 
    print("\nFeatures:", prof.columns) 

    x = prof[prof.columns[:-1]] 
    y = prof[prof.columns[-1]] 

    print("\nFeature matrix:\n", x.head()) 
    print("\nResponse vector:\n", y.head())

    # splitting X and y into training and testing sets 
    from sklearn.model_selection import train_test_split 
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.4, random_state=1) 

    # training the model on training set 
    from sklearn.neighbors import KNeighborsClassifier 
    knn = KNeighborsClassifier(n_neighbors=9) 
    knn.fit(x_train, y_train) 

    # making predictions on the testing set 
    y_pred = knn.predict(x_test)

# comparing actual response values (y_test) with predicted response values (y_pred) 
    from sklearn import metrics 
    print("kNN model accuracy:", metrics.accuracy_score(y_test, y_pred)) 

# making prediction for out of sample data 
    sample = variables
    preds = knn.predict(sample) 
    pred_species = [prof[prof.columns[-1]][p] for p in preds] 
    print("Predictions:", pred_species) 

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

@app.route('/profVars', methods=['GET'])
def evaluate_var():
    return jsonify(1+1)

@app.route('/updateProfVars', methods=['POST'])
def update_profile_vars(){
    profVars= [request.args.get("rp"),request.args.get('cm'),request.args.get("ps"),request.args.get("ce"),request.args.get("mp"),request.args.get("cr"),request.args.get("ex")]    
    initModel(profVars)
}


if __name__ == '__main__':
    app.run()