import React, { useState } from 'react';
import axios from 'axios';

function FileSelector() {
  const [files, setFiles] = useState([]);

  const loadFiles = async () => {
    const res = await axios.get('http://localhost:5000/api/github/files?owner=your-username&repo=your-repo');
    setFiles(res.data);
  };

  return (
    <div>
      <button onClick={loadFiles}>Load GitHub Files</button>
      {files.map(f => <div key={f.name}><input type="checkbox" /> {f.name}</div>)}
    </div>
  );
}

export default FileSelector;
