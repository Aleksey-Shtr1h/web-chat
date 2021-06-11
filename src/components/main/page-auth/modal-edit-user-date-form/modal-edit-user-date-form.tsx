import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalEditUserInfoMenu } from './modal-edit-user-info-menu/modal-edit-user-info-menu';
import { ModalEditUserInfoGeneralItem } from './modal-edit-user-info-general-item/modal-edit-user-info-general-item';
import { ModalEditUserInfoSideItem } from './modal-edit-user-info-side-item/modal-edit-user-info-side-item';
import { ModalEditUserInfoStatusItem } from './modal-edit-user-info-status-item/modal-edit-user-info-status-item';
import { OperationData } from '../../../../redux/data/dataReducer';
import {
  getUserAuthId,
  getUserProfile,
} from '../../../../redux/user/usersSelector';
import { getStateEditUserDate } from '../../../../redux/app/appSelector';
import { ActionCreatorApp } from '../../../../redux/app/appAction';

import {
  FormMain,
  WrapperFormMain,
  FormMainList,
  ModalSection,
  ModalWrapper,
  BtnWrapper,
  BtnForm,
} from '../../../../globalStyled/form.styled';
import { GlobalState } from '../../../../redux/typeState';
import { UserProfileInterface } from './../../../../redux/user/typesUser';

export const ModalEditUserDateForm: React.FC = () => {
  const isEditUserData = useSelector((state: GlobalState) =>
    getStateEditUserDate(state)
  );
  const userAuthId = useSelector((state: GlobalState) => getUserAuthId(state));
  const userProfile = useSelector((state: GlobalState) =>
    getUserProfile(state)
  );
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = React.useState('general');
  const [newName, setNewName] = React.useState('');
  const [linkFacebook, setLinkFacebook] = React.useState('');
  const [linkInstagram, setLinkInstagram] = React.useState('');
  const [linkTwitter, setLinkTwitter] = React.useState('');
  const [linkLinkendin, setLinkLinkendin] = React.useState('');
  const [statusDiscription, setStatusDiscription] = React.useState('');
  const [selectFile, setSelectFile] = React.useState(null);

  const onClickActiveMenu = (nameMenu: string) => {
    setMenuActive(nameMenu);
  };

  const onChangeNameUser = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(evt.target.value);
  };

  const onChangeFile = (evt: any) => {
    setSelectFile(evt.target.files[0]);
  };

  // const visibleModal = React.useMemo(() => {
  //   return isEditUserData ? "modal-user-info-show" : "modal-user-info-hide";
  // }, [isEditUserData]);

  const onSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    // const { info, sosialNetworks }: UserProfileInterface  = userProfile;

    let facebookLink: null | string = null;
    let instagramLink: null | string = null;
    let twitterLink: null | string = null;
    let linkendinLink: null | string = null;
    let statusDiscriptionText: null | string = null;
    let photoFile = null;

    const checkDataFireBase = (child: string, parent: any): string | null => {
      if (child in parent) {
        return parent[child];
      }

      return null;
    };

    if (userProfile?.sosialNetworks) {
      facebookLink = checkDataFireBase('facebook', userProfile?.sosialNetworks);
      instagramLink = checkDataFireBase(
        'instagram',
        userProfile?.sosialNetworks
      );
      twitterLink = checkDataFireBase('twitter', userProfile?.sosialNetworks);
      linkendinLink = checkDataFireBase(
        'linkendin',
        userProfile?.sosialNetworks
      );
    }

    statusDiscriptionText = checkDataFireBase('statusDiscription', userProfile);

    photoFile = checkDataFireBase('photoUrl', userProfile);

    const postEditInfo = {
      info: {
        name: newName === '' ? userProfile?.info?.name : newName,
        email: userProfile?.info?.email,
      },
      sosialNetworks: {
        facebook: linkFacebook === '' ? facebookLink : linkFacebook,
        instagram: linkInstagram === '' ? instagramLink : linkInstagram,
        twitter: linkTwitter === '' ? twitterLink : linkTwitter,
        linkendin: linkLinkendin === '' ? linkendinLink : linkLinkendin,
      },
      statusDiscription:
        statusDiscription === '' ? statusDiscriptionText : statusDiscription,
      photoUrl: selectFile ? selectFile : photoFile,
    };

    if (Object.keys(postEditInfo).length !== 0) {
      dispatch(OperationData.changeUserDateInfo(userAuthId, postEditInfo));
    }
  };

  return (
    <ModalSection isModalClick={isEditUserData}>
      <ModalWrapper>
        <FormMain action="#" method="post" onSubmit={onSubmit}>
          <ModalEditUserInfoMenu onClickActiveMenu={onClickActiveMenu} />
          <WrapperFormMain>
            <FormMainList>
              {menuActive === 'general' && (
                <ModalEditUserInfoGeneralItem
                  newName={newName}
                  onChangeNameUser={onChangeNameUser}
                  onChangeFile={onChangeFile}
                />
              )}

              {menuActive === 'side' && (
                <ModalEditUserInfoSideItem
                  linkFacebook={linkFacebook}
                  setLinkFacebook={setLinkFacebook}
                  linkInstagram={linkInstagram}
                  setLinkInstagram={setLinkInstagram}
                  linkTwitter={linkTwitter}
                  setLinkTwitter={setLinkTwitter}
                  linkLinkendin={linkLinkendin}
                  setLinkLinkendin={setLinkLinkendin}
                />
              )}

              {menuActive === 'status' && (
                <ModalEditUserInfoStatusItem
                  statusDiscription={statusDiscription}
                  setStatusDiscription={setStatusDiscription}
                />
              )}
            </FormMainList>

            <BtnWrapper>
              <BtnForm type="submit">Edit</BtnForm>

              <BtnForm
                type="button"
                onClick={() => {
                  dispatch(
                    ActionCreatorApp.toglleModalEditUserForm(!isEditUserData)
                  );
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
