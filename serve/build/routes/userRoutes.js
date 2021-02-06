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
        this.router.get('/', userController_1.userControler.list);
        this.router.get('/:id', userController_1.userControler.listOne);
        this.router.post('/', userController_1.userControler.createUser);
        this.router.put('/:id', userController_1.userControler.updateUser);
        this.router.delete('/:id', userController_1.userControler.deleteUser);
    }
}
const userRoutes = new UserRouter();
exports.default = userRoutes.router;
