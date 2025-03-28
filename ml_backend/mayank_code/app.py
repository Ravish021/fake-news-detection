# from fastapi import FastAPI
# from pydantic import BaseModel
# import pickle

# app = FastAPI()

# # Load model and vectorizer
# with open('model.pkl', 'rb') as f:
#     loaded_model, loaded_vectorizer = pickle.load(f)

# # Define request body format
# class NewsInput(BaseModel):
#     text: str

# @app.post("/predict")
# async def predict_news(news: NewsInput):
#     text_vectorized = loaded_vectorizer.transform([news.text])
#     prediction = loaded_model.predict(text_vectorized)

#     return {"prediction": "Fake News ha" if prediction == 0 else "Fake News Nhi ha"}
from fastapi import FastAPI, Request
import joblib
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Change this in production to specific domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class NewsInput(BaseModel):
    text: str

loaded_model, loaded_vectorizer = joblib.load('model1.pkl') 
@app.post("/predict")
async def predict_news(request: Request):
    data = await request.json()  
    text = data.get("text")
    print(data)

    if text:
        text_vectorized = loaded_vectorizer.transform([text])
        prediction = loaded_model.predict(text_vectorized)
        if prediction == 0:
            return {"prediction": "Fake News h"}
        return {"prediction": "Fake News Nhi h"}
    else:
        return {"error": "No text provided"}