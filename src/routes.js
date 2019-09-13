import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Posts } from './components/Posts/Posts';
import { PostDetails } from './components/PostDetails/PostDetails';

export const MainRouter = () => (
  <Router>
    <Route path="/" exact component={Posts} />
    <Route path="/details/:id" exact component={PostDetails} />
  </Router>
);

export default MainRouter;
