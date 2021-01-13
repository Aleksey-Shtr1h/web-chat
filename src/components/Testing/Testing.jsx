import React from "react";
import { firebase } from "../../utils/firebase";
import { useSelector } from "react-redux";

export const Testing = () => {
  const [fileUrl, setFileUrl] = React.useState(null);
  const userAuthId = useSelector((state) => state.USER.userAuthId);

  const onChange = async (evt) => {
    const file = evt.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(
      `images/${userAuthId}/logo-${userAuthId}.svg`
    );
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  React.useEffect(() => {
    if (fileUrl) {
      const db = firebase.database().ref("/users/" + userAuthId);
      db.update({ photoUrl: fileUrl });
    }
  }, [fileUrl, userAuthId]);

  return (
    <>
      <form>
        <input type="file" onChange={onChange} />
      </form>
    </>
  );
};
