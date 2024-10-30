"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataRoute_1 = __importDefault(require("./dataRoute"));
const mainRouter = express_1.default.Router();
mainRouter.use("/", dataRoute_1.default);
exports.default = mainRouter;
