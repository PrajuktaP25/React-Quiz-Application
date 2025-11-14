React Quiz App

A simple React.js quiz application that displays one question at a time, allows users to select an option, and shows the final score at the end.
This project uses functional components, React Hooks, a JSON file for questions, and normal CSS (no frameworks).

📁 Project Structure
src/
 ├── App.jsx
 ├── components/
 │     ├── Quiz.jsx
 │     ├── Timer.jsx
 │     ├── QuestionCard.jsx
 ├── questions.json
 ├── styles.css

🚀 Features

One question at a time

Multiple choice options

Final score display

JSON-based questions

Clean UI with normal CSS

Timer component included

⚙️ Installation & Setup

Follow these steps to run the project locally 👇

1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

2. Navigate into the project folder
cd your-repo-name

3. Install dependencies
npm install

4. Start the development server
npm run dev

📦 Build for Production
npm run build


The production-ready files will be generated in the dist/ folder.

📝 File: questions.json
[
  { "id": 1, "question": "What is React?", "options": ["Library","Framework","Language"], "answer": "Library" },
  { "id": 2, "question": "Which hook is used for state?", "options": ["useState","useEffect","useContext"], "answer": "useState" }
]

🛠️ Technologies Used

React.js

JavaScript (ES6+)

CSS

Vite (for development server)

📤 Steps to Push Code to GitHub
1. Initialize Git
git init

2. Add all files
git add .

3. Commit changes
git commit -m "Initial commit"

4. Add remote repository
git remote add origin https://github.com/your-username/your-repo-name.git

5. Push code
git push -u origin main


If the default branch is master:

git push -u origin master

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

📄 License

This project is open-source and free to use.
