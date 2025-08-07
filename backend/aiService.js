const { Configuration, OpenAIApi } = require("openai");
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}));

exports.generateTestCaseSummary = async (req, res) => {
    const { codeFiles } = req.body;
    const prompt = `Generate test case summaries for the following code:\n${codeFiles.map(f => f.content).join('\n')}`;
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }]
    });
    res.json({ summaries: response.data.choices[0].message.content });
};

exports.generateTestCaseCode = async (req, res) => {
    const { summary } = req.body;
    const prompt = `Generate a complete test case based on this summary:\n${summary}`;
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }]
    });
    res.json({ code: response.data.choices[0].message.content });
};