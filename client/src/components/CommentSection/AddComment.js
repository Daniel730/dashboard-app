import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { AddCommentContainer } from '../global';

function AddComment(props) {
  let { id } = useParams();
  const [newComment, setNewComment] = useState('');

  const AddCommentFunction = () => {
    if (newComment !== '') {
      axios
        .post('http://localhost:3001/comments', {
          commentBody: newComment,
          PostId: id,
        })
        .then(() => {
          props.updateComments();
          setNewComment('');
        });
    }
  };

  return (
    <AddCommentContainer>
      <input
        placeholder="Comment here..."
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={() => AddCommentFunction()}>Add Comment</button>
    </AddCommentContainer>
  );
}

export default AddComment;
