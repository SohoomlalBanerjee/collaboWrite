# CollaboWrite

CollaboWrite is a real-time collaborative document editor web application built with React, Socket.IO, and Quill.

## Overview

This application allows multiple users to collaborate on documents in real time. Each user can see changes made by other users instantly, enabling seamless collaboration on shared documents.

## Features

- **Real-Time Collaboration:** Multiple users can edit the same document simultaneously, with changes being synced across all connected clients in real time.
- **Rich Text Editing:** Utilizes the Quill rich text editor, providing a familiar and feature-rich interface for creating and editing documents.
- **Socket.IO Integration:** Socket.IO is used for real-time communication between the server and clients, facilitating instant updates and synchronization of document changes.
- **Document Persistence:** Documents are stored in a MongoDB database, allowing users to access and continue working on their documents across sessions.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/collabowrite.git
    ```

2. Navigate to the project directory:

    ```bash
    cd collabowrite
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```plaintext
    REACT_APP_SOCKET_URL=ws://localhost:3001
    ```

    Replace `ws://localhost:3001` with the URL of your Socket.IO server.

5. Start the development server:

    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. Open the application in your web browser.
2. Create or select a document to collaborate on.
3. Start editing the document. Any changes you make will be immediately visible to other users collaborating on the same document.
4. Save your changes when finished.

## Technologies Used

- React
- Socket.IO
- Quill
- MongoDB
- Node.js
- Express

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
