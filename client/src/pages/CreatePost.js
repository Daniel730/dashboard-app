import React from 'react';

import Card from '../components/Card';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreatePost() {
  const initialValues = {
    title: '',
    postText: '',
    username: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required!'),
    postText: Yup.string().required('This field is required!'),
    username: Yup.string().min(3).max(15).required('This field is required!'),
  });

  let history = useHistory();

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts', data).then((res) => {
      history.push('/');
    });
  };

  return (
    <Card
      createPost
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  );
}

export default CreatePost;
