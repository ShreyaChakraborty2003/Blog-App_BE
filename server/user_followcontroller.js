const User = require('../models/User');
const Post = require('../models/Post');

// FOLLOW a user
exports.followUser = async (req, res) => {
  try {
    const { userIdToFollow } = req.params;
    const user = await User.findById(req.user._id);
    const userToFollow = await User.findById(userIdToFollow);

    if (!userToFollow) return res.status(404).json({ message: "User not found." });

    if (!user.following.includes(userIdToFollow)) {
      user.following.push(userIdToFollow);
      userToFollow.followers.push(req.user._id);
      await user.save();
      await userToFollow.save();
    }

    res.json({ message: "User followed successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UNFOLLOW a user
exports.unfollowUser = async (req, res) => {
  try {
    const { userIdToUnfollow } = req.params;
    const user = await User.findById(req.user._id);
    const userToUnfollow = await User.findById(userIdToUnfollow);

    if (!userToUnfollow) return res.status(404).json({ message: "User not found." });

    user.following.pull(userIdToUnfollow);
    userToUnfollow.followers.pull(req.user._id);
    await user.save();
    await userToUnfollow.save();

    res.json({ message: "User unfollowed successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
