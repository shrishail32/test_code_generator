import React from 'react';
import FileSelector from './components/FileSelector';
import TestSummary from './components/TestSummary';
import TestCode from './components/TestCode';

function App() {
  return (
    <div className="container">
      <h1>AI Test Case Generator</h1>
      <FileSelector />
      <TestSummary />
      <TestCode />
    </div>
  );
}

export default App;
