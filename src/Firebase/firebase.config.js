// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ7bgBRjTk1xjzdVaK-_Bnk5O3sFq0Y8o",
  authDomain: "react-dragon-news-8cc89.firebaseapp.com",
  projectId: "react-dragon-news-8cc89",
  storageBucket: "react-dragon-news-8cc89.appspot.com",
  messagingSenderId: "672256648839",
  appId: "1:672256648839:web:77cfacd04b5d51d83e3a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);