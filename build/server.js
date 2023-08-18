"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const posts_1 = __importDefault(require("./routes/posts"));
const http = require("http");
const express = require("express");
const router = express();
router.use((0, morgan_1.default)('ss'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});
router.use('/', posts_1.default);
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
const httpServer = http.createServer(router);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
//# sourceMappingURL=server.js.map