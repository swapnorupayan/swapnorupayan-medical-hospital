import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebfase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

