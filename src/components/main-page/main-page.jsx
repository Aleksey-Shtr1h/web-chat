import React from 'react';

import {CommentsList} from '../comments-list/comments-list.jsx';
import {FormNewComment} from '../form-new-comment/form-new-comment.jsx';

export const MainPage = () => {

  return (
    <main className="main">
      <CommentsList />
      <FormNewComment />
    </main>
  )
};