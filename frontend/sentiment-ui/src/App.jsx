// usestate lets your ui remember values.
import { useState } from "react";

//brings in the backend calling function
import { analyzeSentiment } from "./api";

function App() {
  // text-> current text in the area 
  // settext-> function to update it 
  const [text, setText] = useState("");

  //result response from backend
  const [result, setResult] = useState(null);

  //this functions click when you call analyze or click on button analyze 
  const handleSubmit = async () => {
    const res = await analyzeSentiment(text);
    // save result in state 
    setResult(res);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Sentiment Analyzer</h1>

      <textarea
        rows="4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Analyze</button>

      {/* // conditional rendering only show if result exists initally null nothing shown */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>{result.label}</h3>
          <p>Confidence: {(result.score * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
