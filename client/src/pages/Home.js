import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { useHistory } from 'react-router';
import { CardsContainer } from '../components/global';

function Home() {
  const history = useHistory();
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((res) => {
      setListOfPosts(res.data);
    });
  }, []);
  return (
    <CardsContainer>
      {listOfPosts.map((val, key) => {
        return (
          <Card
            key={key}
            title={val.title}
            username={val.username}
            postText={val.postText}
            id={val.id}
            history={history}
            post
          />
        );
      })}
    </CardsContainer>
  );
}

export default Home;
