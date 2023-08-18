"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const updateSinglePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const id = req.params.id;
    const title = (_a = req.body.title) !== null && _a !== void 0 ? _a : null;
    const body = (_b = req.body.body) !== null && _b !== void 0 ? _b : null;
    const response = yield axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: title,
        body: body
    });
    return res.status(200).json({
        message: response.data
    });
});
exports.default = { updateSinglePost };
//# sourceMappingURL=put.js.map