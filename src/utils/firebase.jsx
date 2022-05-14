import { initializeApp } from "firebase/app";
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const AddBlog = (
  displayName,
  uid,
  photoURL,
  date,
  title,
  imgUrl,
  content,
  comments,
  likes
) => {
  const blogRef = ref(database, "blogs");
  const newBlogRef = push(blogRef);
  set(newBlogRef, {
    displayName,
    uid,
    photoURL,
    date,
    title,
    imgUrl,
    content,
    comments,
    likes
  });
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    setIsLoading(true);
    const blogRef = ref(database, "blogs");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogsArr = [];
      for (let id in data) {
        blogsArr.push({ id, ...data[id] });
      }
      setBlogList(blogsArr);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogList };
};

export const DeleteBlog = (id) => {
  remove(ref(database, "blogs/" + id));
};

export const UpdateBlogDB = (
  displayName,
  date,
  title,
  photoURL,
  imgUrl,
  content,
  id,
  uid,
  comments,
  likes
) => {
  const updates = {};

  updates["blogs/" + id] = {
    displayName,
    date,
    photoURL,
    title,
    imgUrl,
    content,
    id,
    uid,
    comments,
    likes
  };
  return update(ref(database), updates);
};
