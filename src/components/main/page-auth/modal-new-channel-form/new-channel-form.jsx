import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreatorApp } from '../../../../redux/app/appAction';

import { OperationData } from '../../../../redux/data/dataReducer';
import { getUserProfile } from '../../../../redux/user/usersSelector';
import { getStateModalAddChannel } from '../../../../redux/app/appSelector';

import {
  FormMain,
  WrapperFormMain,
  FormMainList,
  FormMainItem,
  FormMainLabel,
  FormMainInput,
  ModalSection,
  ModalWrapper,
  BtnWrapper,
  BtnForm,
} from '../../../../globalStyled/form.styled';

export const ModalNewChannelForm = () => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => getUserProfile(state));
  const isModalAddChannel = useSelector((state) =>
    getStateModalAddChannel(state)
  );

  const [nameRoom, setNameRoom] = React.useState(``);
  const [toggleButtonSubmit, setToggleButtonSubmit] = React.useState(false);

  const escFunction = React.useCallback(
    (event) => {
      if (event.keyCode === 27) {
        dispatch(ActionCreatorApp.toglleModalAddChannel(false));
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  React.useEffect(() => {
    if (userProfile !== null) {
      setToggleButtonSubmit(true);
    }
  }, [userProfile, toggleButtonSubmit]);

  return (
    <ModalSection showModalClick={isModalAddChannel}>
      <ModalWrapper>
        <FormMain
          action="#"
          method="post"
          onSubmit={(evt) => {
            evt.preventDefault();

            dispatch(
              OperationData.createChannel(
                nameRoom,
                [userProfile.userId],
                [userProfile.userId]
              )
            );
          }}
        >
          <WrapperFormMain>
            <FormMainList>
              <FormMainItem>
                <FormMainLabel htmlFor="room-text">
                  Enter name room
                </FormMainLabel>
                <FormMainInput
                  type="text"
                  id="room-text"
                  placeholder="name room"
                  value={nameRoom}
                  onChange={(evt) => setNameRoom(evt.target.value)}
                />
              </FormMainItem>
            </FormMainList>

            <BtnWrapper>
              <BtnForm
                type="submit"
                disabled={toggleButtonSubmit ? '' : 'disabled'}
              >
                Add room
              </BtnForm>

              <BtnForm
                type="button"
                onClick={() => {
                  dispatch(ActionCreatorApp.toglleModalAddChannel(false));
                }}
              >
                Cancel
              </BtnForm>
            </BtnWrapper>
          </WrapperFormMain>
        </FormMain>
      </ModalWrapper>
    </ModalSection>
  );
};
