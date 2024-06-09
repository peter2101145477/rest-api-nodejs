const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// JSONPlaceholderのAPIエンドポイント
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// ユーザー情報を取得するエンドポイント
app.get('/users', async (req, res) => {
	try {
		const response = await axios.get(API_URL);
		res.json(response.data);
	} catch (error) {
		res.status(500).send('Error fetching users');
	}
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

