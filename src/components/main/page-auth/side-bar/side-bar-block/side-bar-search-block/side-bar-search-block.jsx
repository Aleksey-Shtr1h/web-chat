import React from "react";
import { ActionCreatorApp } from "../../../../../../redux/app/appAction";
import { firebase } from "../../../../../../utils/firebase";
import { Link } from "react-router-dom";
import { AppRoute } from "./../../../../../../constant";
import { OperationData } from "../../../../../../redux/data/dataReducer";
import { useDispatch } from "react-redux";

export const SideBarSearchBlock = () => {
  const [roomSearch, setRoomSearch] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filteredRooms, setFilteredRooms] = React.useState([]);
  const [valueSearch, setValueSearch] = React.useState("");
  const inputSearchRef = React.useRef(null);
  const dispatch = useDispatch();

  const focus = () => {
    inputSearchRef.current.focus();
  };

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
    if (search !== "") {
      setSearch(valueSearch);
      setFilteredRooms(
        roomSearch.filter((room) =>
          room.info.nameRoom.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredRooms([]);
    }
  }, [search, roomSearch, valueSearch]);

  return (
    <form className="search-room" action="#" method="post">
      <input
        className="search-room-input"
        ref={inputSearchRef}
        type="search"
        placeholder="Search room"
        value={valueSearch}
        onChange={(evt) => {
          setSearch(evt.target.value);
          setValueSearch(evt.target.value);
        }}
        onClick={focus}
      />
      <ul className="search-list-conteiner-test">
        {loading && <li style={{ color: "white" }}>empty value</li>}
        {!loading &&
          filteredRooms.map(({ info: { nameRoom }, idRoom }, idx) => {
            return (
              <li
                className="channels__item"
                key={nameRoom + idx}
                onClick={() => {
                  dispatch(ActionCreatorApp.changeChannelId(idRoom));
                  setValueSearch(nameRoom);
                }}
              >
                <Link
                  className="channels__link"
                  to={AppRoute.MAIN_ID.USER_DESKTOP_ID.FRIEND_ID + `${idRoom}`}
                  onClick={() => {
                    dispatch(OperationData.loadChannel(idRoom));
                  }}
                >
                  {nameRoom}
                </Link>
              </li>
            );
          })}
      </ul>
    </form>
  );
};
