import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { AiOutlineEdit } from "react-icons/ai";
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
   const [photoURL, setPhotoURL] = useState("/static/images/avatar/1.jpg");

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
         <div className={styles.PictureBlockWrapper}>
            <div className={styles.PictureBlock}>
               <div>
                  <div className={styles.AvatarBlock}>
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
                           sx={{ width: 200, height: 200 }}
                           src={
                              user?.photoURL
                                 ? user.photoURL
                                 : "/static/images/avatar/1.jpg"
                           }
                           className={styles.profilePicture}
                        />
                     </label>
                  </div>
                  <div className={styles.uploadButton}>
                     <Button
                        variant="contained"
                        component="span"
                        size="large"
                        disabled={loading || !photo}
                        onClick={handleClick}
                     >
                        Upload
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.AccountInfoWrapper}>
            <div className={styles.AccountInfo}>
               <table className={styles.profileTable} width="70%">
                  <tbody>
                     <tr>
                        <td width="40%">Username:</td>
                        <td width="60%">
                           {user && user.displayName}
                           <AiOutlineEdit />
                        </td>
                     </tr>
                     <tr>
                        <td width="40%">Email: </td>
                        <td width="60%">
                           {user && user.email}
                           <AiOutlineEdit />
                        </td>
                     </tr>
                     <tr>
                        <td width="40%">Password:</td>
                        <td width="60%">
                           Reset
                           <AiOutlineEdit />
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <div className={styles.logDelButtons}>
            <div className={styles.logoutButton}>
               <Button onClick={handleLogout} size="large" variant="contained">
                  Logout
               </Button>
            </div>
            <div className={styles.deleteButton}>
               <Button
                  size="large"
                  variant="contained"
                  sx={{ backgroundColor: "red" }}
               >
                  Delete Account
               </Button>
            </div>
         </div>
      </div>
   );
};

export default AccountBlock;
