import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "./firebase";

const uploadedFileURLs = [];

export const uploadFile = async (file) => {
  const storage = getStorage(app);
  if (!(file instanceof File)) {
    throw new Error("Invalid file type");
  }

  const name = new Date().getTime() + file.name;
  const storageRef = ref(storage, name);

  const existingURL = Array.from(uploadedFileURLs).find((url) => url.includes(name));
  if (existingURL) {
    return existingURL;
  }

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            uploadedFileURLs.push(downloadURL);
            resolve(downloadURL);
          })
          .catch((error) => {
            reject(error);
          });
      },
    );
  });
};
