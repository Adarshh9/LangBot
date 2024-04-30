## Langchain Chatbot

### Overview

This project is a chatbot application that allows users to interact with an AI-powered chatbot. The chatbot can answer user queries and analyze uploaded documents. It utilizes Flask for the backend server, HTML/CSS/JavaScript for the frontend interface, and LangChain/Hugging Face for natural language processing capabilities.

### Features

- Chatbot interface for interacting with the AI-powered chatbot.
- Text input for asking questions or providing input.
- File upload functionality for analyzing documents.
- Responses provided by the chatbot are powered by LangChain's QA Chain.
- Clean and intuitive user interface.

### Setup Instructions

To set up and run the project locally, follow these steps:

1. **Clone the Repository**: Clone the project repository to your local machine.

   ```bash
   git clone <repository_url>
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using pip (Python package manager).

   ```bash
   cd LangBot
   pip install -r requirements.txt
   ```

3. **Run the Flask Server**: Start the Flask server to run the backend of the application.

   ```bash
   python app.py
   ```

4. **Access the Chatbot**: Open a web browser and navigate to `http://localhost:5000` to access the chatbot application.

### Backend Routes

- `/`: Renders the main HTML page for the chatbot interface.
- `/get_response`: Handles POST requests containing user queries or uploaded documents and returns responses from the chatbot.
- `/upload_file`: Handles file uploads from the frontend.

### Frontend Functions

- `sendMessage()`: Sends user queries to the backend and displays responses.
- `uploadFile()`: Handles file uploads and displays a message upon successful upload.
- `displayMessage()`: Displays messages in the chat interface.

### Model Building

The LangChain QA Chain is used for question-answering capabilities. The model (`google/flan-t5-large`) is loaded using the Hugging Face Hub (`langchain.HuggingFaceHub`) with specific model configurations.

### Conclusion

This README provides an overview of the chatbot project, including its features, setup instructions, backend routes, frontend functions, and model building process. Follow the instructions to set up and run the project locally on your machine.

---

Feel free to customize this README with additional information or instructions as needed for your project.
