import { useState } from "react";

const CommentListItem = ({ comment, onCommentEdit, onCommentRemove }) => {

  const [isEditMode, setIsEditMode] = useState(false);
  const [commentText, setCommentText] = useState(comment.text);

  const onRemoveClick = (event) => {
    event.preventDefault();
    onCommentRemove(comment);
  }

  const onEditClick = (event) => {
    event.preventDefault();
    setIsEditMode(true);
  }

  const onEditSaveClick = (event) => {
    event.preventDefault();
    onCommentEdit(comment.id, {...comment, text: commentText})
    setIsEditMode(false);
  }

  const onEditCancelClick = (event) => {
    event.preventDefault();
    setIsEditMode(false);
    setCommentText(comment.text);
  }
  
  const onCommentTextChange = (event) => setCommentText(event.target.value)

  return (
    <div className="CommentItem">
       <b>{comment.email}</b>
       {!isEditMode ? (
        <p>
          {comment.text}
        </p>
       ): (
         <textarea value={commentText} onChange={onCommentTextChange} required />
       )}
       <div className="CommentItemButtonBar">
         {!isEditMode ? (
          <>
            <a href="/" onClick={onEditClick}>Edit</a>
            <a href="/" onClick={onRemoveClick}>Delete</a>
          </>
         ): (
           <>
             <a href="/" onClick={onEditSaveClick}>Save</a>
             <a href="/" onClick={onEditCancelClick}>Cancel</a>
           </>
         )}
       </div>
    </div>
  )
}

export default CommentListItem;