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
const addSinglePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body.body;
        const title = req.body.title;
        const config = {
            method: 'post',
            url: 'https://jsonplaceholder.typicode.cm/posts/',
            data: {
                title: title,
                body: body
            }
        };
        const response = yield axios(config);
        return res.status(200).json({
            message: response.data
        });
    }
    catch (error) {
        return res.status(404).json({
            message: error.code
        });
    }
});
exports.default = { addSinglePost };
//# sourceMappingURL=post.js.map