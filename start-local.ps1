$env:MONGO_URI = "mongodb://localhost:27017/"

if (Test-Path ".\\venv\\Scripts\\python.exe") {
    .\venv\Scripts\python.exe -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
} else {
    python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
}
