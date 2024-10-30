"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3033;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", routers_1.default);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
