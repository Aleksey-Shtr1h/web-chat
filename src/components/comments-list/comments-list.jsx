import React from 'react';
import {useSelector} from 'react-redux';

export const CommentsList = () => {
  const comments = useSelector((state) => state.DATA.comments);

  return (
    <ul className="comments__list">
      {comments
        .sort((prev, next) => prev.date - next.date)
        .map((commentChat, id) => {
        return (
          <li 
            className="comments__item"
            key={commentChat.description + id}
          >
            {commentChat.description}
          </li>
        )
      })}
    </ul>
  )
};