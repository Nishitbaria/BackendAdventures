const express = require("express");
const router = express.Router();

//importing the controller
const { createComment } = require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/likeController");
//mapping the routes
router.get("/Nishit", (req, res) => {
  res.send("Hello Nishit 1");
});

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
//exporting the router
module.exports = router;
