import { changeUser, getUser } from "@/utils/network";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import NewPasswordModal from "./newPasswordModal";
import styles from "./profilePage.module.scss";

import "react-toastify/dist/ReactToastify.css";

interface RootState {
  user: {
    userName: string;
    id: number;
    email: string;
    description: string;
    password: string;
  };
}

const ProfilePage = (): JSX.Element => {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const user = useSelector((state: RootState) => state.user);

  const { userName, description, email, id, password } = user;
  const [newDescription, setNewDescription] = useState(description);
  const [newUserName, setNewUserName] = useState(userName);
  // const [stateUser, setStateUser] = useState({});

  const updatePassword = () => {
    setIsChangePassword(true);
  };

  const closeModal = () => {
    setIsChangePassword(false);
  };

  const notify = (textError = "something error") => {
    toast(textError, {
      className: "custom_toast",
      draggable: true,
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  (async () => {
    try {
      const res = await getUser(`http://localhost:3000/users/0`);
      console.log(res);
    } catch (error) {
      notify();
    }
  })();

  const changeDescription = (value: string) => {
    setNewDescription(value);
  };
  const changeUserName = (value: string) => {
    setNewUserName(value);
  };

  const saveProfile = async () => {
    try {
      await changeUser(`http://localhost:3000/users/${id}`, {
        email,
        userName: newUserName,
        description: newDescription,
        password,
      });
    } catch (error) {
      notify();
    }
  };
  return (
    <>
      <div className={styles.profile_page}>
        <div className={styles.header_profile}>
          <h3>User Name profile page</h3>
          <hr />
        </div>

        <div className={styles.main_profile}>
          <div className={styles.profile_image}>
            <div className={styles.image_block}>
              <img
                // src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_picture_available.png/401px-No_picture_available.png"
                src="../../../../public/"
                alt="description"
                className={styles.image}
              />
            </div>
            <button type="button" className={styles.image_button}>
              Change profile image
            </button>
          </div>

          <div className={styles.profile_description}>
            <form action="submit" className={styles.profile_form}>
              <div className={styles.username_form}>
                <p>Username</p>
              </div>
              <div className={styles.input_block}>
                <textarea
                  className={styles.inputText}
                  defaultValue={userName}
                  onChange={(e) => changeUserName(e.target.value)}
                  name="userName"
                  cols={30}
                  rows={1}
                />
              </div>
              <div className={styles.description_form}>
                <p>Profile description</p>
              </div>
              <div className={styles.input_block}>
                <textarea
                  className={styles.inputText}
                  value={newDescription}
                  onChange={(e) => changeDescription(e.target.value)}
                  name="description"
                  cols={30}
                  rows={5}
                />
              </div>
            </form>
          </div>

          <div className={styles.profile_options}>
            <button type="button" className={styles.profile_button} onClick={() => saveProfile()}>
              Save profile
            </button>
            <button type="button" className={styles.profile_button} onClick={() => updatePassword()}>
              Change password
            </button>
            {isChangePassword && <NewPasswordModal user={user} closeModal={closeModal} />}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
