import { Comment } from './comment-model.js';

const getComments = async() => Comment.findAll();

const getComment = async(id) => Comment.findByPk(id);

const createAComment = async({ email, text }) => {
    Comment.create({ email, text })
}

const updateComment = async(id, { email, text }) => {
    const comment = await getComment(id);
    comment.text = text;
    comment.save();
}

const deleteComment = async(id) => {
    const comment = await getComment(id);
    comment.destroy();
}

export {
    getComments,
    getComment,
    createAComment,
    updateComment,
    deleteComment
}