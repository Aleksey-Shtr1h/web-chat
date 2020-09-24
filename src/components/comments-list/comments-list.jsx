import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {OperationData} from '../../redux/data/dataReducer.js';

export const CommentsList = () => {
  const comments = useSelector((state) => state.DATA.comments);

  const dispatch = useDispatch();

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
            <p className="comments__text">{commentChat.description}</p>
            <button
              className="comments__btn-close"
              onClick={() => {
                dispatch(OperationData.deletePost(commentChat.id))
              }}
            />
          </li>
        )
      })}
    </ul>
  )
};