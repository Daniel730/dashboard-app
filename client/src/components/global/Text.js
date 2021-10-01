import { PostAuthor, PostText, PostTitle } from '.';

export default function Text(props) {
  const { postTitle, postAuthor, postText } = props;

  if (postText) {
    const { text } = props;
    return <PostText>{text}</PostText>;
  }

  if (postTitle) {
    const { title } = props;
    return <PostTitle>{title}</PostTitle>;
  }

  if (postAuthor) {
    const { username } = props;
    return <PostAuthor>{username}</PostAuthor>;
  }
}
