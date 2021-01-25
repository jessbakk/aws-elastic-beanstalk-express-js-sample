const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('If you see this then the AWS Pipeline test was successful'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
