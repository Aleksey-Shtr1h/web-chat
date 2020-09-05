import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ActionCreatorData} from '../../redux/data/dataAction.js';
import {OperationData} from '../../redux/data/dataReducer.js';

export const FormNewComment = props => {
  const comment = useSelector((state) => state.DATA.comment);

  const dispatch = useDispatch();

  return (
    <form 
      className="comments__form"
      action="#"
      method="post"
      disabled="disabled"
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(OperationData.postComments(comment))
      }}
    >

      <textarea
        className="comments__textarea"
        id="review"
        name="review"
        value={comment}
        onChange={(evt) => {
          dispatch(ActionCreatorData.actionChangeCommentPlace(evt.target.value));
        }}
        required
    >
    </textarea>

    <button
      className="comments__submit"
      type="submit"
    >
      Отправить
    </button>

    </form>
  )
};