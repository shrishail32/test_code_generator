const express = require('express');
const cors = require('cors');
const github = require('./github');
const aiService = require('./aiService');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/github/files', github.getRepoFiles);
app.post('/api/ai/generate-summary', aiService.generateTestCaseSummary);
app.post('/api/ai/generate-code', aiService.generateTestCaseCode);
app.post('/api/github/create-pr', github.createPullRequest);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));