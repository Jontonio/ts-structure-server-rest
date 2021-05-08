"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.get('', (req, res) => {
            res.json({ 'msg': 'get petition' });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is online on PORT → ${this.port} `);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map