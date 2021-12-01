import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const initializetion = () => {
  initializeApp(firebaseConfig);
};
export default initializetion;
