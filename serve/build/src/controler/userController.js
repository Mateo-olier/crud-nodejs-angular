"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControler = void 0;
class UserControler {
    index(req, res) {
        res.send('user');
    }
}
exports.userControler = new UserControler();
