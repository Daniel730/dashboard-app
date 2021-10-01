import React from 'react';
import { Content, ContentBigger } from '../global';
import Text from '../global/Text';
import { Formik, Form, Field, ErrorMessage, FormikProvider } from 'formik';

export default function Card(props) {
  const { post, createPost, postGet } = props;

  if (post) {
    const { username, title, postText, history, id } = props;
    return (
      <Content
        onClick={() => {
          history.push(`/post/${id}`);
        }}
        style={{ cursor: 'pointer' }}
      >
        <Text postTitle title={title} />
        <Text
          postText
          text={
            postText.length > 200
              ? `${postText.substring(0, 200)}...`
              : postText
          }
        />
        <Text postAuthor username={username} />
      </Content>
    );
  }

  if (postGet) {
    const { username, title, postText } = props;
    return (
      <ContentBigger style={{ width: '80% !important' }}>
        <Text postTitle title={title} />
        <Text postText text={postText} />
        <Text postAuthor username={username} />
      </ContentBigger>
    );
  }

  if (createPost) {
    const { initialValues, onSubmit, validationSchema } = props;
    return (
      <Content>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Title</label>
            <ErrorMessage name="title" component="span" />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="title"
              placeholder="Ex: Your Title Here..."
            />
            <label>Post</label>
            <ErrorMessage name="postText" component="span" />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="postText"
              placeholder="Ex: Description Here..."
            />
            <label>Username</label>
            <ErrorMessage name="username" component="span" />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="username"
              placeholder="Ex: Your Name Here..."
            />
            <button type="submit">Create Post</button>
          </Form>
        </Formik>
      </Content>
    );
  }
}
