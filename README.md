
https://github.com/user-attachments/assets/3f56d8a3-b76f-4283-832b-85d74c1d3e3e
# React Chatbot Project

This project is a simple chatbot application created with React as part of the **CS 471 Learn New Skills Extra Credit** assignment.

# ChatBot Demo Video
https://github.com/user-attachments/assets/0dd8dcd4-1eff-4576-95c6-3e0a5da65218


## Course

**React Tutorial Full Course - Beginner to Pro (React 19, 2025)**  
Instructor: SuperSimpleDev

The course teaches React by building projects and covers topics including JSX, components, props, state, event handlers, hooks, CSS, Vite, React Router, testing, and deployment.

## About the Project

This chatbot was created to practice the React concepts covered in the course.

The user can type a message into the input box and the chatbot will respond based on the message.

Some example prompts are:

- `hello chatbot`
- `what time is it?`
- `what is today's date?`
- `flip a coin`
- `roll a dice`
- `thank you`

## React Concepts Used

### Components

The application is divided into multiple React components:

- `App` - Main application component
- `ChatInput` - Handles the input box and Send button
- `ChatMessage` - Displays an individual message
- `ChatMessages` - Displays the list of chat messages

### Props

Props are used to pass information between components, such as the message text, sender, and list of chat messages.

### State

React's `useState` hook is used to store and update the chat messages and user input.

### Event Handlers

The application uses event handlers to detect when the user types a message, clicks the Send button, or presses Enter.

### JSX

JSX is used to combine JavaScript and HTML-like syntax when creating the user interface.

### CSS

CSS is used to style the chatbot, messages, input box, and Send button.

## Running the Project

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in the terminal.

## Project Structure

```text
ChatBot/
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    └── components/
        ├── ChatInput.jsx
        ├── ChatMessage.jsx
        └── ChatMessages.jsx
```

## What I Learned

While working through the course and building this project, I learned how React applications can be separated into reusable components. I also learned how to use props to share information between components and state to make an application interactive.

Building the chatbot helped me understand how JSX, components, props, state, event handlers, hooks, and CSS work together in a React application.
