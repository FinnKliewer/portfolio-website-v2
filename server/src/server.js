const express = require('express');
const app = express();
const { fetchData } = require('./fetchGitHubData');
const fs = require('fs');
const path = require('path');

const repoDataPath = path.join(__dirname, 'repoData.json');
const localOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];
const configuredOrigins = (process.env.CORS_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
const allowedOrigins = new Set([...localOrigins, ...configuredOrigins]);

app.use((req, res, next) => {
    const origin = req.get('Origin');

    if (origin && allowedOrigins.has(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Vary', 'Origin');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    }

    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }

    return next();
});

const loadRepoData = () => {
    if (!fs.existsSync(repoDataPath)) {
        return [];
    }

    return JSON.parse(fs.readFileSync(repoDataPath, 'utf8'));
};

let repoData = loadRepoData();
const updateData = async () => {
    try {
        await fetchData();
        repoData = loadRepoData();
        console.log('GitHub data updated successfully');
    } catch (error) {
        console.error('Error updating GitHub data:', error);
    }
};

setInterval(updateData, 12 * 60 * 60 * 1000);

updateData().then();

app.get('/api/repos', (req, res) => {
    res.json(repoData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
