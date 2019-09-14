import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { BlogContainer } from './containers/BlogContainer';
import { PostDetailsContainer } from './containers/PostDetailsContainer';
import { AddNewPostContainer } from './containers/AddNewPostContainer';
import { EditPostContainer } from './containers/EditPostContainer';

export const MainRouter = () => (
  <div className="inner">
    <div className="content">
      <Router>
        <Route path="/" exact component={BlogContainer} />
        <Route path="/new" exact component={AddNewPostContainer} />
        <Route path="/details/:id" exact component={PostDetailsContainer} />
        <Route path="/details/:id/edit" exact component={EditPostContainer} />
      </Router>
    </div>
  </div>
);

export default MainRouter;
