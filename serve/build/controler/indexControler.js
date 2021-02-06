"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControler = void 0;
class IndexControler {
    index(req, res) {
        res.send('hello');
    }
}
exports.indexControler = new IndexControler();
