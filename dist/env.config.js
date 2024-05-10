"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const message = process.env.message;
exports.message = message;
