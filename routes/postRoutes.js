const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController");

router.post("/", PostController.createPost);
router.get("/:id", PostController.getPost);
router.get("/:limit/:offset", PostController.getPosts);
router.put("/:id", PostController.changePost);
router.delete("/:id", PostController.deletePost);

module.exports = router;
