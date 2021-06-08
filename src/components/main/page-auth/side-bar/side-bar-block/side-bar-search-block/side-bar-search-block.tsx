import React from 'react';
import { ActionCreatorApp } from '../../../../../../redux/app/appAction';
import { firebase } from '../../../../../../utils/firebase';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../../../constant';
import { OperationData } from '../../../../../../redux/data/dataReducer';
import { useDispatch } from 'react-redux';
import { LoadUsersRoomInterface } from '../../../../../../redux/data/typesData';

export const SideBarSearchBlock: React.FC = () => {
  const [roomSearch, setRoomSearch] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [filteredRooms, setFilteredRooms] = React.useState([]);
  const [valueSearch, setValueSearch] = React.useState('');
  const inputSearchRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
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
        const dataRoom: any = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        console.log(dataRoom);

        setRoomSearch(dataRoom);
        setLoading(false);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    if (search !== '') {
      setSearch(valueSearch);
      setFilteredRooms(
        roomSearch.filter((room: LoadUsersRoomInterface) =>
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
        className="search-room__input"
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
      <ul className="search-room__list">
        {loading && <li style={{ color: 'white' }}>empty value</li>}
        {!loading &&
          filteredRooms.map(({ info: { nameRoom }, idRoom }, idx) => {
            return (
              <li
                className="search-room__item"
                key={nameRoom + idx}
                onClick={() => {
                  dispatch(ActionCreatorApp.changeChannelId(idRoom));
                  setValueSearch(nameRoom);
                }}
              >
                <Link
                  className="search-room__link"
                  to={AppRoute.MAIN_ID.USER_DESKTOP_ID.FRIEND_ID + `${idRoom}`}
                  onClick={() => {
                    dispatch(OperationData.loadChannel(idRoom));
                  }}
                >
                  {nameRoom}
                </Link>
                <svg
                  className="search-room__icon"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3638 13.866C14.1868 14.04 13.9001 14.04 13.7231 13.866L10.0951 10.2957C9.08286 11.1041 7.79404 11.5901 6.38879 11.5901C3.13655 11.5901 0.500061 8.99556 0.500061 5.79508C0.500061 2.59454 3.13655 2.99811e-05 6.38879 2.99811e-05C9.64103 2.99811e-05 12.2776 2.59454 12.2776 5.79508C12.2776 7.29154 11.6962 8.65109 10.7499 9.67925L14.3638 13.2354C14.5407 13.4097 14.5407 13.6919 14.3638 13.866ZM6.38879 0.891621C3.63681 0.891621 1.40594 3.08689 1.40594 5.79508C1.40594 8.50324 3.63681 10.6986 6.38879 10.6986C9.14069 10.6986 11.3715 8.50324 11.3715 5.79508C11.3715 3.08689 9.14069 0.891621 6.38879 0.891621Z"
                  />
                </svg>
              </li>
            );
          })}
      </ul>
    </form>
  );
};
