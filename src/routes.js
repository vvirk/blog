import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { BlogContainer } from './containers/BlogContainer';
import { PostDetailsContainer } from './containers/PostDetailsContainer';
import { AddNewPostContainer } from './containers/AddNewPostContainer';

export const MainRouter = () => (
  <Router>
    <Route path="/" exact component={BlogContainer} />
    <Route path="/new" exact component={AddNewPostContainer} />
    <Route path="/details/:id" exact component={PostDetailsContainer} />
  </Router>
);

export default MainRouter;
