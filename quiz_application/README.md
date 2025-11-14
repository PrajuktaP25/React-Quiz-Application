
# React Quiz Application

This project is a simple and clean **React + Vite** quiz application that shows one question at a time, allows users to select an answer, runs a timer, and displays the final score at the end.

## Features
- One-question-at-a-time quiz flow  
- Multiple-choice questions  
- Timer for each question  
- Score tracking  
- Clean and simple UI  
- Questions stored in a JSON file  
- Fast development with Vite + HMR  

## Run the Project Locally

### 1. Install dependencies
```bash
bun install
2. Start the development server
bash

bun dev
3. Build for production
bash
bun build

Project Structure
src/
 ├── App.jsx
 ├── components/
 │     ├── Quiz.jsx
 │     ├── Timer.jsx
 │     ├── QuestionCard.jsx
 ├── Json/
 │     └── quizQuestions.json
 ├── index.css
 ├── main.jsx

How the App Works
The quiz starts from the first question.
A 15-second timer counts down for each question.
Once the user selects an option, the answer is locked.
Clicking Next moves to the next question.
After the last question, the final score is displayed.
User can restart the quiz anytime.
Vite
JavaScript (ES6+)
CSS


License
This project is open-source and free to use.
