"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const get_1 = __importDefault(require("../controllers/get"));
const put_1 = __importDefault(require("../controllers/put"));
const post_1 = __importDefault(require("../controllers/post"));
const delete_1 = __importDefault(require("../controllers/delete"));
const router = express_1.default.Router();
router.get('/posts', get_1.default.getAllPosts);
router.get('/posts/:id', get_1.default.getSinglePost);
router.put('/posts/:id', put_1.default.updateSinglePost);
router.delete('/posts/:id', delete_1.default.deleteSinglePost);
router.post('/posts', post_1.default.addSinglePost);
module.exports = router;
//# sourceMappingURL=posts.js.map