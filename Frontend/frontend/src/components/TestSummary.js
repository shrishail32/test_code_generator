import React, { useState } from 'react';
import axios from 'axios';

function TestSummary() {
  const [summary, setSummary] = useState("");

  const generateSummary = async () => {
    const dummyCodeFiles = [{ content: 'function add(a, b) { return a + b; }' }];
    const res = await axios.post('http://localhost:5000/api/ai/generate-summary', {
      codeFiles: dummyCodeFiles
    });
    setSummary(res.data.summaries);
  };

  return (
    <div>
      <button onClick={generateSummary}>Generate Test Summary</button>
      <pre>{summary}</pre>
    </div>
  );
}

export default TestSummary;
