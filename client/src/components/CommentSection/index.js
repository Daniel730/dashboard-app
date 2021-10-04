import React from 'react';
import { CommentContainer } from '../global';
import Text from '../global/Text';
import AddComment from './AddComment';

export default function CommentSection(props) {
  const { comments } = props;
  return (
    <div>
      <CommentContainer style={{ maxHeight: '80vh', overflow: 'auto' }}>
        {comments.map((comment, key) => (
          <Text key={key} text={comment.commentBody} comment />
        ))}
      </CommentContainer>
      <AddComment updateComments={() => props.updateComments()} />
    </div>
  );
}
