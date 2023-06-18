import { ComentarioModel } from "../models/ComentarioModel.js";
import { UserModel } from "../models/UserModel.js";

export const getPostWIthComment = async (req, res) => {
  const { post_id } = req.body;
  try {
    const postWithComment = await ComentarioModel.findAll({
      where: { post_id: post_id },
      include: UserModel,
    });
    return res.json({
      post: postWithComment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });

  }
};
export const createCommentPost = async (req, res) => {
  const { comentario, post_id, user_id } = req.body;
  if (!(comentario || post_id || user_id)) {
    res.status(400).json({ message: "all input is required" });
  }
  try {
    const newComment = await ComentarioModel.create({
      comentario,
      post_id,
      user_id,
    });
    return res.json({
      message: "comentario creado al post",
      newComment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
