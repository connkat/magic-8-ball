import { FormEvent, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { findAnswer } from "./lib/helperFunctions";

function App() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(!answer);
    setAnswer(answer);
  };

  return (
    <div className="App">
      <h1>Magic 8 Ball</h1>        
      <Button
        type="submit"
        color="info"
        variant="outlined"
        onClick={handleSubmit}
      >
        Tell me my future
      </Button>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;
