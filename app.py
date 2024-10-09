# app.py

from flask import Flask, request, jsonify, render_template
import pandas as pd
from surprise import Dataset, Reader, SVD
from surprise.model_selection import train_test_split
from surprise import accuracy

app = Flask(__name__)

# Load the dataset (Assuming you have a dataset named 'songs.csv')
# Sample dataset for testing purposes
songs_data = {
    'user_id': [1, 1, 2, 2, 3, 3, 4, 4],
    'track_id': [101, 102, 101, 103, 102, 104, 101, 104],
    'rating': [5, 4, 3, 4, 5, 2, 3, 4]
}
df = pd.DataFrame(songs_data)

# Step 3: Recommendation Approach
def get_recommendations(user_id):
    reader = Reader(rating_scale=(1, 5))
    data = Dataset.load_from_df(df[['user_id', 'track_id', 'rating']], reader)
    trainset, testset = train_test_split(data, test_size=0.25)

    # Build the SVD model
    model = SVD()
    model.fit(trainset)

    # Get predictions for the user
    track_ids = df['track_id'].unique()
    predictions = []
    for track_id in track_ids:
        pred = model.predict(user_id, track_id)
        predictions.append((track_id, pred.est))
    
    # Sort predictions based on estimated ratings
    predictions.sort(key=lambda x: x[1], reverse=True)
    return predictions

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    user_id = int(request.form['user_id'])
    recommendations = get_recommendations(user_id)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
