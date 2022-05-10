import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { UserAuth } from "../../services/authContext";
import { StorageAuth } from "../../services/storageContext";
import { useNavigate } from "react-router-dom";
import styles from "./AccountBlock.module.css";

const Input = styled("input")({
  display: "none",
});

const AccountBlock = () => {
  const { user, logout } = UserAuth();
  const { upload } = StorageAuth();
  const [loading, setLoading] = useState(false);

  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleClick = () => {
    upload(photo, user, setLoading);
  };

  return (
    <div className={styles.AccountPage}>
      <Typography variant="h2">Account</Typography>
      <div className={styles.AvatarBlock}>
        <div>
          <label>
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleChange}
            />
            <Avatar
              alt="Avatar"
              className={styles.profilePicture}
              src={photoURL}
              sx={{ width: 85, height: 85 }}
            />
          </label>
        </div>
      </div>
      <div className={styles.uploadButton}>
        <Button
          variant="contained"
          component="span"
          disabled={loading || !photo}
          onClick={handleClick}
        >
          Upload
        </Button>
      </div>
      <div className={styles.accountInfo}></div>
      <table className={styles.profileTable}>
        <tbody>
          <tr>
            <td>Username:</td>
            <td>{user && user.displayName}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{user && user.email}</td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>{user && user.secret}</td>
          </tr>
        </tbody>
      </table>

      <Button onClick={handleLogout} variant="primary">
        Logout
      </Button>
    </div>
  );
};

export default AccountBlock;
