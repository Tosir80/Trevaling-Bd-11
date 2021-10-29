import { GoogleAuthProvider, signInWithPopup, getAuth,onAuthStateChanged,signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import firebaseIntailize from '../Firebase/firebase.init';

const UseFirebase = () => {
  firebaseIntailize();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProivder = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProivder)
      .then((result) => setUser(result.user))
      .finally(setIsLoading(false));
  };

  // logout function
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(setIsLoading(false));
  };

  useEffect(() => {
    const unsubsribed = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(user);
      setIsLoading(false);
    });
    return unsubsribed;
  }, []);

  return {
    signInUsingGoogle,
    user,
    isLoading,
    logOut
  };
}
export default UseFirebase;
