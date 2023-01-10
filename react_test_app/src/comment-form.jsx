import { useState } from "react";


const CommentForm = ({ onCommentSubmit }) => {
  const [comment,  setComment] = useState({email: '', text: ''});  

  const handleEmailChange = (email) => {
    setComment({...comment, email })
  }   

  const handleCommentText = (text) => {
    setComment({...comment, text })
  }   

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onCommentSubmit(comment);
    setComment({email: '', text: ''})
  }  

  return (
    <form className='CommentFormBody' onSubmit={handleSubmit}>
      <input required value={comment.email} onChange={(e) => handleEmailChange(e.target.value)} placeholder='Email' type="email" name="user_email" id="mail" />
      <textarea required value={comment.text} onChange={(e) => handleCommentText(e.target.value)} placeholder='Add a comment...' name="comment_text"  rows="10"></textarea>
      <button className='CommentFormButton' type="submit">
          Comment
      </button>
    </form>
  )
}

export default CommentForm;