const Post = require('../models/Post');

// SAVE a post
exports.savePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const user = await User.findById(req.user._id);

    if (!user.savedPosts.includes(postId)) {
      user.savedPosts.push(postId);
      await user.save();
    }

    res.json({ message: "Post saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UNSAVE a post
exports.unsavePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const user = await User.findById(req.user._id);

    user.savedPosts.pull(postId);
    await user.save();

    res.json({ message: "Post unsaved successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LIKE a post
exports.likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    if (!post.likes.includes(req.user._id)) {
      post.likes.push(req.user._id);
      post.dislikes.pull(req.user._id); // remove dislike if already disliked
      await post.save();
    }

    res.json({ message: "Post liked!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DISLIKE a post
exports.dislikePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    if (!post.dislikes.includes(req.user._id)) {
      post.dislikes.push(req.user._id);
      post.likes.pull(req.user._id); // remove like if already liked
      await post.save();
    }

    res.json({ message: "Post disliked!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
