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
import { GlobalState } from '../../../../redux/typeState';

export const ModalNewChannelForm: React.FC = () => {
  const dispatch = useDispatch();

  const userProfile: any = useSelector((state: GlobalState) =>
    getUserProfile(state)
  );
  const isModalAddChannel = useSelector((state: GlobalState) =>
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
    <ModalSection isModalClick={isModalAddChannel}>
      <ModalWrapper>
        <FormMain
          action="#"
          method="post"
          onSubmit={(evt: React.SyntheticEvent) => {
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
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setNameRoom(evt.target.value)
                  }
                />
              </FormMainItem>
            </FormMainList>

            <BtnWrapper>
              <BtnForm type="submit" disabled={toggleButtonSubmit}>
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
