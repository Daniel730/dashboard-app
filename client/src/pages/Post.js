import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';

function Post() {
  let { id } = useParams();

  const [post, setPost] = useState({
    id: 0,
    title: '',
    username: '',
    postText: '',
  });
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  }, []);

  return (
    <Card
      title={post.title}
      username={post.username}
      postText={post.postText}
      postGet
    />
  );
}

export default Post;
