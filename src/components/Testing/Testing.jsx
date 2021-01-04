import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OperationTest } from "../../redux/test/testReducer";
import { getUserProfile } from "./../../redux/user/usersSelector";

import { firebase } from "../../utils/firebase.js";

export const Testing = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => getUserProfile(state));

  ///////////////

  const [roomSearch, setRoomSearch] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filteredRoom, setFilteredRoom] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    const unsubscribe = firebase
      .firestore()
      .collection(`rooms`)
      .onSnapshot((snapshot) => {
        const dataRoom = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        setRoomSearch(dataRoom);
        setLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    setFilteredRoom(
      roomSearch.filter((room) =>
        room.info.nameRoom.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, roomSearch]);
  console.log("test");

  if (loading) {
    return <p>Loading room...</p>;
  }

  return (
    <>
      <button>Отправить данные</button>
      <button>Получить данные</button>
      <button
        onClick={() => {
          dispatch(OperationTest.testAddUserToChannel(userProfile.userId));
        }}
      >
        Обновить данные
      </button>
      <button>Удалить данные</button>

      {/* /////////////// */}

      <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredRoom.map((country, idx) => (
        <>
          <p>{country.info.nameRoom}</p>
        </>
      ))}
    </>
  );
};
