import React, { useState } from "react";

const Polling = () => {
  const [votes, setVotes] = useState({
    react: 0,
    angular: 0,
    vue: 0,
  });

  const totalVotes = votes.react + votes.angular + votes.vue;

  const handleVote = (option) => {
    setVotes({
      ...votes,
      [option]: votes[option] + 1,
    });
  };

  const styles = {
    container: {
      width: "420px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "thistle",
      borderRadius: "10px",
      boxShadow: "0 4px 10px white",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    button: {
      margin: "8px",
      padding: "10px 15px",
      backgroundColor: "purple",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    resultBox: {
      marginTop: "20px",
      textAlign: "left",
    },
    barContainer: {
      width: "100%",
      height: "10px",
      backgroundColor: "blue",
      borderRadius: "5px",
      marginTop: "5px",
    },
    bar: {
      height: "10px",
      backgroundColor: "blue",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <h2>📊 Classroom Live Poll</h2>
      <p>Which frontend framework do you prefer?</p>

      <button style={styles.button} onClick={() => handleVote("react")}>
        React
      </button>
      <button style={styles.button} onClick={() => handleVote("angular")}>
        Angular
      </button>
      <button style={styles.button} onClick={() => handleVote("vue")}>
        Vue
      </button>

      <div style={styles.resultBox}>
        <h3>Live Results</h3>

        <p>React: {votes.react}</p>
        <div style={styles.barContainer}>
          <div
            style={{
              ...styles.bar,
              width:
                totalVotes === 0
                  ? "0%"
                  : `${(votes.react / totalVotes) * 100}%`,
            }}
          ></div>
        </div>

        <p>Angular: {votes.angular}</p>
        <div style={styles.barContainer}>
          <div
            style={{
              ...styles.bar,
              width:
                totalVotes === 0
                  ? "0%"
                  : `${(votes.angular / totalVotes) * 100}%`,
            }}
          ></div>
        </div>

        <p>Vue: {votes.vue}</p>
        <div style={styles.barContainer}>
          <div
            style={{
              ...styles.bar,
              width:
                totalVotes === 0
                  ? "0%"
                  : `${(votes.vue / totalVotes) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Polling;
