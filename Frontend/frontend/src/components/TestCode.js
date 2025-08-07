import React, { useState } from 'react';
import axios from 'axios';

function TestCode() {
  const [code, setCode] = useState("");
  const [summary, setSummary] = useState("");

  const generateCode = async () => {
    const res = await axios.post('http://localhost:5000/api/ai/generate-code', {
      summary
    });
    setCode(res.data.code);
  };

  return (
    <div>
      <textarea placeholder="Paste selected summary" onChange={(e) => setSummary(e.target.value)} />
      <button onClick={generateCode}>Generate Test Code</button>
      <pre>{code}</pre>
    </div>
  );
}

export default TestCode;
