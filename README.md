Real-Time Chat Application
A simple, yet powerful, real-time chat application built with Node.js, Express, and WebSockets. This application demonstrates live, bi-directional communication between clients and a server, allowing users to send and receive messages instantly.

Description
This project is a foundational real-time chat application. It provides a backend server that handles WebSocket connections, enabling instant message exchange among connected users. While the primary focus is on the backend logic for real-time communication, a basic frontend is included to demonstrate the functionality.

Features
Real-Time Messaging: Send and receive messages instantly without page reloads.

Broadcast Functionality: Messages sent by one user are broadcast to all other connected users.

Simple Interface: A basic web interface to send messages and view incoming messages.

Scalable Architecture: Built with Node.js's non-blocking I/O model, suitable for handling multiple concurrent connections.

Technologies Used
Node.js: JavaScript runtime environment for server-side execution.

Express.js: A fast, unopinionated, minimalist web framework for Node.js, used for setting up the HTTP server and routes.

ws (WebSocket Library): A simple and robust WebSocket implementation for Node.js, used for establishing and managing real-time connections.

HTML/CSS/JavaScript: For the basic client-side interface.

Setup Instructions
Follow these steps to get the project up and running on your local machine.

Prerequisites
Node.js (LTS version recommended)

npm (comes with Node.js)

Installation
Clone the repository:

git clone <repository-url>
cd real-time-chat-app

(Replace <repository-url> with the actual URL of your repository)

Install dependencies:

npm install

Running the Application
Start the server:

node server.js

(Or nodemon server.js if you have Nodemon installed for automatic restarts during development)

The server will typically start on http://localhost:3000 for the HTTP server and ws://localhost:8080 (or a similar port) for the WebSocket server, depending on the implementation. Check your console for the exact port numbers.

Open in browser:
Open your web browser and navigate to http://localhost:3000 (or the HTTP server port indicated in your console).

Open multiple tabs/browsers:
To test the real-time functionality, open the same URL in multiple browser tabs or even different browsers. Messages sent from one tab should appear in all other connected tabs.

Usage
Once the application is running and you have opened it in your browser:

Type your message into the input field.

Press Enter or click the "Send" button.

Your message will appear in the chat area for all connected users, demonstrating the real-time communication.

Contributing
