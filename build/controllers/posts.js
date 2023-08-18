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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts = result.data;
    return res.status(200).json({
        message: posts
    });
});
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let result = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post = result.data;
    return res.status(200).json({
        message: post
    });
});
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let id = req.params.id;
    let title = (_a = req.body.title) !== null && _a !== void 0 ? _a : null;
    let body = (_b = req.body.body) !== null && _b !== void 0 ? _b : null;
    let response = yield axios_1.default.put(`https://jsonplaceholder.typicode.com/posts/${id}`, Object.assign(Object.assign({}, (title && { title })), (body && { body })));
    return res.status(200).json({
        message: response.data
    });
});
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let response = yield axios_1.default.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.status(200).json({
        message: 'post deleted successfully'
    });
});
const addPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let title = req.body.title;
    let body = req.body.body;
    let response = yield axios_1.default.post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body
    });
    return res.status(200).json({
        message: response.data
    });
});
exports.default = { getPosts, getPost, updatePost, deletePost, addPost };
//# sourceMappingURL=posts.js.map