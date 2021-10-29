import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';


const firebaseIntailize = () => {
  initializeApp(firebaseConfig);
};

export default firebaseIntailize;
