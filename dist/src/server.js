"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 7041;
app_1.server.listen(port, () => {
    return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});
