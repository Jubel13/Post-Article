const { Posts, sequelize } = require("../models");

const createPost = async (req, res, next) => {
  try {
    const { Title, Content, Category, Status } = req.body;
    const post = await Posts.create({
      Title,
      Content,
      Category,
      Status,
    });

    res.status(201).json({ post, message: "Post Created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPosts = async (req, res, next) => {
  try {
    const limit = req.params.limit;
    const offset = req.params.offset;

    const posts = await Posts.findAndCountAll({
      limit,
      offset,
    });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPost = async (req, res, next) => {
  try {
    const id = req.params.id;

    const post = await Posts.findByPk(id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const changePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { Title, Content, Category, Status } = req.body;

    const foundPost = await Posts.findByPk(id);

    if (!foundPost) {
      throw new Error("Post not found");
    }

    await Posts.update(
      {
        Title,
        Content,
        Category,
        Status,
      },
      { where: { id: foundPost.id } }
    );

    res.status(200).json({ message: "Post updated" });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;

    const deletedPost = await Posts.destroy({
      where: { id },
    });

    if (!deletedPost) {
      throw new Error("Post not found");
    }

    res.status(200).json({ message: "Post deleted succesfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createPost, getPosts, getPost, changePost, deletePost };
