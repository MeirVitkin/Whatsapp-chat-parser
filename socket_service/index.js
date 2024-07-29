import { Server } from 'socket.io';

let io;

export function initIo(server) {
    io = new Server(server);
    io.on('connection', (socket) => {
        console.log('a user connected');
        
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
    return io;
}
export function getIo() {
    if (!io) throw new Error('Socket.io not initialized!');
    return io;
}

