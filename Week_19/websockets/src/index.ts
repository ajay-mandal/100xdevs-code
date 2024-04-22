import express from 'express'
import { WebSocketServer, WebSocket } from 'ws'

const app = express()
const httpServer = app.listen(8080)

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', function connection(ws: WebSocket) {
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary: boolean) {
        wss.clients.forEach(function each(client: WebSocket) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });

    ws.send('Hello! Message From Server!!');
});