const jsonServer = require('server/package.json');
const path = require('path');
const express = require('express');

const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use('/api', router);
server.use(express.static(path.join(__dirname, 'build')));

server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.use(middlewares);

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
