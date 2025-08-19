# TrueSelf-ChatBot
AI Chatbot build with NEXT.js, React &amp; OpenAI API

Welcome to my personal AI chatbot project, built with **Next.js**, **React**, and the **OpenAI API**. This project serves as a learning example of how to build a secure and scalable web application with an AI backend.

The project is structured with a German codebase, but this README provides all the necessary information in English for a broader audience.

## ✨ Features

- **Secure API Communication**: The OpenAI API key is handled on the server side using a Next.js API route to prevent it from being exposed in the frontend code.
- **Context-Aware Conversation**: The application sends the entire conversation history to the AI, allowing it to maintain the context of the dialogue.
- **Clean UI**: A simple, clean user interface ensures a smooth user experience.
- **Easy Setup**: The project is designed for quick configuration and local startup.

## 🚀 Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 16 or higher recommended)
- An API Key from [OpenAI](https://platform.openai.com/api-keys)

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/your-project-name.git](https://github.com/your-username/your-project-name.git)
    cd your-project-name
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

1.  Create a new file in the root directory of your project named `.env.local`. **This file must not be committed to Git!**

2.  Open the `.env.local` file and add your OpenAI API key:
    ```
    OPENAI_API_KEY=your_openai_api_key
    ```

### Running the Project

Run the following command to start the project in development mode:

```bash
npm run dev