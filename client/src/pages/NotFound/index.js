import React from 'react';
import {
  A,
  Content404,
  MainTitle,
  TextBlur,
  TopTitle,
} from '../../components/global';

export default function NotFound() {
  return (
    <Content404>
      <TopTitle>Oops!</TopTitle>
      <MainTitle>404</MainTitle>
      <TextBlur>
        Looks like the page you're looking for does not exist.
      </TextBlur>
      <TextBlur>
        Return to <A href="/">Homepage</A>.
      </TextBlur>
    </Content404>
  );
}
