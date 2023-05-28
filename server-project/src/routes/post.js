const express = require("express");
const PostController = require("../controllers/post");
const middleware_authentication = require("../middlewares/authenticated");
const multiparty = require("connect-multiparty");

const md_upload = multiparty({ uploadDir: "./uploads/posts" });
const api = express.Router();

api.post(
  "/new",
  [middleware_authentication.ensureAuth, md_upload],
  PostController.createPost
);
api.get("/", PostController.getPosts);
api.get("/category/:category", PostController.getPostsByCategory);
api.get("/:id", PostController.getPost);
api.get("/search/:search", PostController.getPostsBySearch);
api.put(
  "/:id",
  [middleware_authentication.ensureAuth, md_upload],
  PostController.updatePost
);
api.delete(
  "/:id",
  [middleware_authentication.ensureAuth],
  PostController.deletePost
);
module.exports = api;
