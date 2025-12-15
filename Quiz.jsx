import { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS",
    },
    {
      question: "Which is a JavaScript library?",
      options: ["React", "Laravel", "Django", "Flask"],
      answer: "React",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mini Online Quiz</h1>

      {!showResult ? (
        <div style={styles.card}>
          <h2>{questions[currentQ].question}</h2>

          <div>
            {questions[currentQ].options.map((option, index) => (
              <button
                key={index}
                style={{
                  ...styles.optionBtn,
                  backgroundColor:
                    selected === option ? "#dbeafe" : "#ffffff",
                }}
                onClick={() => handleOptionClick(option)}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            style={styles.nextBtn}
            onClick={nextQuestion}
            disabled={selected === null}
          >
            {currentQ + 1 === questions.length ? "Finish" : "Next"}
          </button>

          <p style={styles.score}>Score: {score}</p>
        </div>
      ) : (
        <div style={styles.card}>
          <h2>Quiz Completed 🎉</h2>
          <p style={styles.finalScore}>
            Your Score: {score} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6366f1, #22d3ee)",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    width: "360px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: {
    position: "absolute",
    top: "30px",
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
  },
  optionBtn: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "10px",
    border: "1px solid #c7d2fe",
    cursor: "pointer",
    fontSize: "14px",
  },
  nextBtn: {
    marginTop: "15px",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
  score: {
    marginTop: "15px",
    fontWeight: "bold",
  },
  finalScore: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};
