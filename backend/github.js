const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

exports.getRepoFiles = async (req, res) => {
    const { owner, repo } = req.query;
    try {
        const contents = await octokit.repos.getContent({ owner, repo, path: '' });
        const files = contents.data.filter(f => f.type === "file");
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createPullRequest = async (req, res) => {
    const { owner, repo, branch, filePath, content } = req.body;
    try {
        await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: filePath,
            message: "Add generated test case",
            content: Buffer.from(content).toString('base64'),
            branch,
        });

        res.json({ message: "PR Created" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};