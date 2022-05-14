import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

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

const auth = getAuth(firebase);

export const createUser = async (email, password, displayName, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });

    navigate("/");
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    navigate("/");
  } catch (err) {
    alert(err);
  }
};

export const logOut = (navigate) => {
  signOut(auth);
  navigate('/');
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      // User is signed out
      setCurrentUser(currentUser);
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

export const signInGoogleProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
    });
};
