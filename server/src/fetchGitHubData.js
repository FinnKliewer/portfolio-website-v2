// fetchGitHubData.js
require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const repoDataPath = path.join(__dirname, 'repoData.json');

const repoUrls = [
    'https://github.com/FinnKliewer/early-trace',
    'https://github.com/FinnKliewer/pyopengl-mandelbrot',
    'https://github.com/FinnKliewer/react-pictionary-game',
    'https://github.com/FinnKliewer/portfolio-website-v2',
    'https://github.com/ArcticDevelopment/ArcticTools',
    // 'https://github.com/FinnKliewer/ShoppingList',
];

function parseRepoUrl(url) {
    const regex = /github\.com\/([^\/]+)\/([^\/]+)/;
    const match = url.match(regex);
    if (match) {
        return { owner: match[1], repo: match[2] };
    } else {
        throw new Error(`Invalid GitHub URL: ${url}`);
    }
}

async function fetchData() {
    const token = process.env.GITHUB_TOKEN;
    const headers = token
        ? { Authorization: `token ${token}` }
        : {};

    const repoDataList = [];

    for (const url of repoUrls) {
        try {
            const { owner, repo } = parseRepoUrl(url);

            const repoResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, {
                headers,
            });
            const repoData = repoResponse.data;

            const languagesResponse = await axios.get(
                `https://api.github.com/repos/${owner}/${repo}/languages`,
                { headers }
            );

            const languages = languagesResponse.data;
            const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);

            repoDataList.push({
                name: repoData.name,
                description: repoData.description,
                stars: repoData.stargazers_count,
                forks: repoData.forks_count,
                languages: {
                    data: languages,
                    total_bytes: totalBytes
                },
                primary_language: repoData.language,
                url: repoData.html_url,
                updated_at: repoData.updated_at,
                created_at: repoData.created_at,
                size: repoData.size,
                open_issues: repoData.open_issues_count
            });

            console.log(`Fetched ${Object.keys(languages).length} languages for ${owner}/${repo}`);
        } catch (error) {
            console.error(`Error fetching data for ${url}: ${error.message}`);
        }
    }

    fs.writeFileSync(repoDataPath, JSON.stringify(repoDataList, null, 2));
    console.log('Data saved to repoData.json');
}

if (require.main === module) {
    fetchData()
        .then(() => process.exit(0))
        .catch(error => {
            console.error('Script failed:', error);
            process.exit(1);
        });
}

module.exports = { fetchData };
