"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const books_route_1 = __importDefault(require("./routes/books.route"));
const env_config_1 = require("../env.config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    try {
        res.status(200).json([{ stage: "www=" + env_config_1.message }]);
    }
    catch (error) {
        console.error("An error ocurred:", error);
        res.status(500).json(error);
    }
});
app.use("/books", books_route_1.default);
exports.server = app;
exports.handler = (0, serverless_http_1.default)(app);
