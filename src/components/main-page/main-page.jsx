import React from 'react';
import {useSelector} from 'react-redux';

import {CommentsList} from '../comments-list/comments-list.jsx';
import {FormNewComment} from '../form-new-comment/form-new-comment.jsx';
import {Preload} from '../preload/preload.jsx';

export const MainPage = () => {
  const comments = useSelector((state) => state.DATA.comments);

  return (
    <main className="main">
      {comments.length !== 0 ?
        <React.Fragment>
          <CommentsList /> 
          <FormNewComment />
        </React.Fragment>

        : 

        <Preload />
      }
    </main>
  )
};