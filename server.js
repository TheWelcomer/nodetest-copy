const WebSocket = require('ws');
const app = require('express')();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log('Client connected');
    if (wss.clients.size === 1) { 
        console.log("Player 1 connected");
        ws.send();
    }
    ws.on('message', message => {
        const notPotatoes = new Set(wss.clients);
        notPotatoes.delete(ws);
        const randWS = Array.from(notPotatoes)[Math.floor(Math.random() * notPotatoes.size)];
        randWS.send()
    });
});

app.get('/', (req, res) => res.send('Hello World!'));
server.listen(3000, () => console.log('Server running on port 3000'));