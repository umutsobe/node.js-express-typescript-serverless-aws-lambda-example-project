import {server} from './app';

const port = 7041;

server.listen(port, () => {
    return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});