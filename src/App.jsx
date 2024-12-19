import React from "react";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(null);
  const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];
  return (
    <div className="p-6 grid grid-cols-3 gap-6" onClick={() => setIsOpen(null)}>
      {questions.map((item) => (
        <Box
          question={item.question}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          answer={item.answer}
          id={item.id}
        />
      ))}
    </div>
  );
};
function Box({ question, answer, id, isOpen, setIsOpen }) {
  const isActive = id === isOpen;

  return (
    <div
      className={`${
        isActive ? "bg-red-500 text-white" : "bg-gray-100 text-black"
      } h-[300px] flex items-center justify-center font-bold text-xl p-4 text-center rounded-lg transition-all duration-300 ease-in-out`}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(isActive ? null : id);
      }}
    >
      <span>{isActive ? answer : question}</span>
    </div>
  );
}
export default App;
