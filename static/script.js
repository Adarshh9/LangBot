function uploadFile() {
    var fileInput = document.getElementById("file-input").files[0];
    var formData = new FormData();
    formData.append('file', fileInput);

    // Send file to server
    fetch('/upload_file', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        var botResponse = data.chatbot_response;
        displayMessage(botResponse, 'bot');

        // Show file upload message
        document.getElementById("file-upload-message").style.display = "block";
        
        fileInput.value = ''; // Reset the value of the file input to clear it
    })
    .catch(error => console.error('Error:', error));
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim();
    var fileInput = document.getElementById("file-input").files[0];
    var formData = new FormData();
    formData.append('query', userInput);
    
    // Check if a file is uploaded
    if (fileInput) {
        formData.append('file', fileInput);
    }

    // Send user input and file to server
    fetch('/get_response', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        var userMessage = userInput; // Store user's message
        var botResponse = data.chatbot_response;
        displayMessage(userMessage, 'user'); // Display user's message
        displayMessage(botResponse, 'bot'); // Display bot's response
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("file-input").addEventListener("change", function() {
    uploadFile(); // Upload file immediately when selected
});

function displayMessage(message, sender) {
    var chatMessages = document.getElementById("chat-messages");
    var messageElement = document.createElement("div");
    messageElement.className = "message " + sender + "-message";
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
