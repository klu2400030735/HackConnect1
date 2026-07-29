import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>🚀 HackConnect</h1>
      <h2>Frontend + Backend Connection</h2>

      <p
        style={{
          fontSize: "22px",
          color: "green",
          fontWeight: "bold",
        }}
      >
        {message}
      </p>
    </div>
  );
}

export default App;