import { useState, useEffect } from "react";
import { QuestionCard } from "./QuestionCard";
import { Timer } from "./Timer";
import questions from "../Json/quizQuestions.json";

const TIME_LIMIT = 15;

export const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choosenOption, setChoosenOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const optionLocked = choosenOption !== null;

  useEffect(() => {
    if (quizFinished || optionLocked) return;

    const timerId = setInterval(() => {
      setTimeLeft((time) => {
        if (time === 1) {
          clearInterval(timerId);
          setChoosenOption("TIME_UP"); 
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentIndex, optionLocked, quizFinished]);

  const handleOptionClick = (option) => {
    if (optionLocked) return;

    setChoosenOption(option);

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };


  const goToNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setChoosenOption(null);
      setTimeLeft(TIME_LIMIT);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setChoosenOption(null);
    setScore(0);
    setTimeLeft(TIME_LIMIT);
    setQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      <h1>React Quiz Application</h1>

      {quizFinished ? (
        <div className="score-box">
          <h2>
            Your Score: {score} / {questions.length}
          </h2>

          <button className="restart-btn" onClick={resetQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <Timer timer={timeLeft} />

          <QuestionCard
            data={currentQuestion}
            selected={choosenOption}
            selectOption={handleOptionClick}
          />

          {optionLocked && (
            <button className="next-btn" onClick={goToNext}>
              {currentIndex + 1 === questions.length ? "Finish Quiz" : "Next Question"}
            </button>
          )}
        </>
      )}
    </div>
  );
}
