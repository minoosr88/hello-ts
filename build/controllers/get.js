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
const getAllPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const posts = result.data;
    return res.status(200).json({
        message: posts
    });
});
const getSinglePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = result.data;
        return res.status(200).json({
            message: post
        });
    }
    catch (error) {
        return res.status(404).json({
            message: error.code
        });
    }
});
exports.default = { getAllPosts, getSinglePost };
//# sourceMappingURL=get.js.map