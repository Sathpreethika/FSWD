import React from "react";
import ExamRegistrationForm from "./FullStack/React/ExamRegistrationForm";
import bg from "./assets/exam.jpg";

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>
      <ExamRegistrationForm />
    </div>
  );
}

const styles = {
  page: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.45)", // fixed!
  },
};

export default App;
