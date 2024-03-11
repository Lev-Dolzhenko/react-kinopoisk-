import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { updateProfile } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password, personName, personGender, datePerson) {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          name: personName,
        }); // Обновляем профиль пользователя, добавляя имя
        return setDoc(doc(db, "users", email), {
          savedShows: [],
          name: personName, // Добавляем имя пользователя в документ пользователя
          gender: personGender,
          date: datePerson,
        });
      }
    );
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
