import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import CommentSection from '../components/CommentSection';
import { ContentSides } from '../components/global';

function Post() {
  let { id } = useParams();

  const updateComments = () => {
    axios.get(`http://localhost:3001/comments/${id}`).then((res) => {
      setComments(res.data);
    });
  };

  const [post, setPost] = useState({
    id: 0,
    title: '',
    username: '',
    postText: '',
  });

  const [comments, setComments] = useState([
    {
      id: 0,
      commentBody: '',
    },
  ]);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setPost(res.data);
    });

    updateComments();
  }, []);

  return (
    <ContentSides>
      <Card
        title={post.title}
        username={post.username}
        postText={post.postText}
        postGet
      />
      <CommentSection
        comments={comments}
        updateComments={() => updateComments()}
      />
    </ContentSides>
  );
}

export default Post;
