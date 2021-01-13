import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalEditUserInfoMenu } from "./modal-edit-user-info-menu/modal-edit-user-info-menu";
import { ModalEditUserInfoGeneralItem } from "./modal-edit-user-info-general-item/modal-edit-user-info-general-item";
import { ModalEditUserInfoSideItem } from "./modal-edit-user-info-side-item/modal-edit-user-info-side-item";
import { ModalEditUserInfoStatusItem } from "./modal-edit-user-info-status-item/modal-edit-user-info-status-item";
import { OperationData } from "../../../../redux/data/dataReducer";
import {
  getUserAuthId,
  getUserProfile,
} from "../../../../redux/user/usersSelector";
import { getStateEditUserDate } from "../../../../redux/app/appSelector";
import { ActionCreatorApp } from "../../../../redux/app/appAction";

export const ModalEditUserDateForm = () => {
  const isEditUserData = useSelector((state) => getStateEditUserDate(state));
  const userAuthId = useSelector((state) => getUserAuthId(state));
  const userProfile = useSelector((state) => getUserProfile(state));
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = React.useState("general");
  const [newName, setNewName] = React.useState("");
  const [linkFacebook, setLinkFacebook] = React.useState("");
  const [linkInstagram, setLinkInstagram] = React.useState("");
  const [linkTwitter, setLinkTwitter] = React.useState("");
  const [linkLinkendin, setLinkLinkendin] = React.useState("");
  const [statusDiscription, setStatusDiscription] = React.useState("");
  const [selectFile, setSelectFile] = React.useState(null);

  const onClickActiveMenu = (nameMenu) => {
    setMenuActive(nameMenu);
  };

  const onChangeNameUser = (evt) => {
    setNewName(evt.target.value);
  };

  const onChangeFile = (evt) => {
    setSelectFile(evt.target.files[0]);
  };

  const testMemo = React.useMemo(() => {
    return isEditUserData ? "modal-user-info-show" : "modal-user-info-hide";
  }, [isEditUserData]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const { info, sosialNetworks } = userProfile;

    let facebookLink = null;
    let instagramLink = null;
    let twitterLink = null;
    let linkendinLink = null;
    let statusDiscriptionText = null;
    let photoFile = null;

    const checkDataFireBase = (child, parent) => {
      if (child in parent) {
        return parent[child];
      }

      return null;
    };

    if (sosialNetworks) {
      facebookLink = checkDataFireBase("facebook", sosialNetworks);
      instagramLink = checkDataFireBase("instagram", sosialNetworks);
      twitterLink = checkDataFireBase("twitter", sosialNetworks);
      linkendinLink = checkDataFireBase("linkendin", sosialNetworks);
    }

    statusDiscriptionText = checkDataFireBase("statusDiscription", userProfile);

    photoFile = checkDataFireBase("photoUrl", userProfile);

    const postEditInfo = {
      info: {
        name: newName === "" ? info.name : newName,
        email: info.email,
      },
      sosialNetworks: {
        facebook: linkFacebook === "" ? facebookLink : linkFacebook,
        instagram: linkInstagram === "" ? instagramLink : linkInstagram,
        twitter: linkTwitter === "" ? twitterLink : linkTwitter,
        linkendin: linkLinkendin === "" ? linkendinLink : linkLinkendin,
      },
      statusDiscription:
        statusDiscription === "" ? statusDiscriptionText : statusDiscription,
      photoUrl: selectFile ? selectFile : photoFile,
    };

    if (Object.keys(postEditInfo).length !== 0) {
      dispatch(OperationData.changeUserDateInfo(userAuthId, postEditInfo));
    }
  };

  return (
    <section className={`add-channel ${testMemo}`}>
      <div className="add-channel-cantainer">
        <ModalEditUserInfoMenu onClickActiveMenu={onClickActiveMenu} />
        <form
          className="form-main"
          action="#"
          method="post"
          onSubmit={onSubmit}
        >
          <div className="wrap-form-main">
            <ul className="form-main-list">
              {menuActive === "general" && (
                <ModalEditUserInfoGeneralItem
                  newName={newName}
                  onChangeNameUser={onChangeNameUser}
                  onChangeFile={onChangeFile}
                />
              )}

              {menuActive === "side" && (
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

              {menuActive === "status" && (
                <ModalEditUserInfoStatusItem
                  statusDiscription={statusDiscription}
                  setStatusDiscription={setStatusDiscription}
                />
              )}
            </ul>

            <div className="container-flex-row container-channel-btn">
              <button
                className="form-main-btn-submit form-channel-btn"
                type="submit"
              >
                Edit
              </button>

              <button
                className="form-main-btn-submit form-channel-btn"
                type="button"
                onClick={() => {
                  dispatch(
                    ActionCreatorApp.toglleModalEditUserForm(!isEditUserData)
                  );
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
