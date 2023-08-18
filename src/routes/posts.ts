/** src/routes/posts.ts */
const express = require("express");
import getController from '../controllers/get';
import putController from '../controllers/put';
import postController from '../controllers/post';
import deleteController from '../controllers/delete';
const router = express.Router();

router.get('/posts', getController.getAllPosts);
router.get('/posts/:id', getController.getSinglePost);
router.put('/posts/:id', putController.updateSinglePost);
router.delete('/posts/:id', deleteController.deleteSinglePost);
router.post('/posts', postController.addSinglePost);

export = router;