import CommentListItem from "./comment-list-item";

const CommentList = ({ comments, onCommentEdit,  onCommentRemove }) => {
   return (
      <div className="CommentList">
       {comments.map((comment) => <CommentListItem onCommentEdit={onCommentEdit} onCommentRemove={onCommentRemove} key={comment.id} comment={comment}/>)}
      </div>
   )
}

export default CommentList;