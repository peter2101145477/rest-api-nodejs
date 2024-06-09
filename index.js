const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// JSONPlaceholder的API端点
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// 用户信息获取端点
app.get('/users', async (req, res) => {
	try {
		const response = await axios.get(API_URL);
		const users = response.data;
		let html = `<h1>User List</h1>`;
		html += `<ul>`;
		users.forEach(user => {
			html += `<li>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> <a href="http://${user.website}">${user.website}</a></p>
                <p><strong>Company:</strong> ${user.company.name}</p>
                <p><strong>Catchphrase:</strong> ${user.company.catchPhrase}</p>
            </li>`;
		});
		html += `</ul>`;
		res.send(html);
	} catch (error) {
		res.status(500).send('Error fetching users');
	}
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

