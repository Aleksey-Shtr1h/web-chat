import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreatorTest } from "../../redux/test/tetsAction";

export const Test = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.TEST.userProfile);

  // console.log(userProfile);

  return (
    <>
      <button>Отправить данные</button>
      <button>Получить данные</button>
      <button
        onClick={() => dispatch(ActionCreatorTest.addChannelUser(userProfile))}
      >
        Обновить данные
      </button>
      <button>Удалить данные</button>
    </>
  );
};
