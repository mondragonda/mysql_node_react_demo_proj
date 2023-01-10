import { useState } from 'react';
import './App.css';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import { getComments, createComment, deleteComment, editComment} from "./comment-service";
import { useEffect  } from "react";

function App() {

  const [comments, setComments] = useState([]); 

  const fetchComments = () => {
    getComments().then((comments) => {
      setComments([...comments.sort((comment1, comment2) => comment2.id - comment1.id)])
    });
  }

  const createNewComment = async (comment) => {
    await createComment(comment)
    fetchComments();
  }

  const updateCommentText = async (id, commentUpdate) => {
    await editComment(id, commentUpdate);
    fetchComments();
  }

  const removeComment = async (comment) => {
    await deleteComment(comment.id);
    fetchComments();
  }

   useEffect(() => {
    fetchComments();
   }, []);   

    return (
      <div className="Card">
        <h1 className="CardTitle">Leave comments</h1>
        <CommentForm onCommentSubmit={createNewComment}  />
        <CommentList 
          comments={comments}
          onCommentRemove={removeComment}
          onCommentEdit={updateCommentText}
        />
      </div>
    );
    
}

export default App;
