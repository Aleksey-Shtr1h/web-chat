import React, {useState, useEffect} from 'react';
import './App.css';
import firebase from 'firebase';
import {connect} from 'react-redux';

import {ActionCreatorData} from './redux/data/dataAction.js';
import {OperationData} from './redux/data/dataReducer.js';

export const App = ({comments, comment, onChangeCommentPlace, onSubmitReview})  => {
  const [com, setCom] = useState(null)
  let commentsValues = [];
  console.log(com);

  if(com !== null) {
    commentsValues = Object.values(com); 
  }

  useEffect(() => {
    setTimeout(() => {
      const dataBase = firebase.database();
      const refComments = dataBase.ref('comments');

      refComments.once('value')
      .then((snapshot) => {
        if (com !== snapshot.val()) {
          setCom(snapshot.val());  
        }
      });
    }, 2000);
  }, [com])

  return (
    <div className="App">

      {commentsValues.map((commentChat, id) => {
        return (
          <p key={commentChat.comment + id}>{commentChat.comment}</p>
        )
      })}

      <form 
        className="reviews__form"
        action="#"
        method="post"
        disabled="disabled"
        onSubmit={(evt) => {
          evt.preventDefault();
          onSubmitReview(comment);
        }}

      >

        <textarea
          className="reviews__textarea"
          id="review"
          name="review"
          placeholder="Add"
          onChange={(evt) => {
            onChangeCommentPlace(evt.target.value);
          }}
          required
      >
      </textarea>

      <button
        className="reviews__submit"
        type="submit"
      >
        Submit
      </button>

      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  comments: state.DATA.comments,
  comment: state.DATA.comment,
});

const mapDispatchToProps = (dispatch) => ({

  onChangeCommentPlace(comment) {
    dispatch(ActionCreatorData.actionChangeCommentPlace(comment));
  },

  onSubmitReview(comment) {
    dispatch(OperationData.postComments(comment));
  },
});

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);