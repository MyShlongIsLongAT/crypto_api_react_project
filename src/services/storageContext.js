import { createContext, useContext } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

const StorageContext = createContext();

export const StorageContextProvider = ({ children }) => {
  const storage = getStorage();

  const upload = async (file, user, setLoading) => {
    const fileRef = ref(storage, "images/" + user.uid + ".png");

    setLoading(true);
    await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
    updateProfile(user,{photoURL});
    setLoading(false);
    console.log("Uploaded file!");
    window.location.reload()
  };
  return (
    <StorageContext.Provider value={{ upload }}>
      {children}
    </StorageContext.Provider>
  );
};

export const StorageAuth = () => {
  return useContext(StorageContext);
};
