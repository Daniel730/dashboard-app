import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Container } from './components/global';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import './App.css';
import Navbar from './components/Navbar';
import Post from './pages/Post';

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
