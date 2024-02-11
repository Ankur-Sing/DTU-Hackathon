const socket = io();

// Function to display chat message
function displayMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML += `<div>${message}</div>`;
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom
}

// Function to send message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        socket.emit('chatMessage', message); // Send message to server
        messageInput.value = ''; // Clear input field
    }
}

// Event listener for receiving messages from server
socket.on('chatMessage', message => {
    displayMessage(message);
});
