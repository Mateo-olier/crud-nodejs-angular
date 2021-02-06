"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controler/userController");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userControler.index);
    }
}
const userRoutes = new UserRouter();
exports.default = userRoutes.router;
