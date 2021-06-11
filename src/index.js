import firebase from "firebase/app";
import "firebase/firestore";
import { initializeGame, createMouseOverEffect } from "./dom/game";
import "./style/game-interface.css";

var firebaseConfig = {
  apiKey: "AIzaSyDHh-1T43VnTlfENQMinKVZtl-3djGBkYg",
  authDomain: "wheres-waldo-2ef2d.firebaseapp.com",
  projectId: "wheres-waldo-2ef2d",
  storageBucket: "wheres-waldo-2ef2d.appspot.com",
  messagingSenderId: "626248038873",
  appId: "1:626248038873:web:d6985613af38a2c7bd81c8",
};

firebase.initializeApp(firebaseConfig);
initializeGame();
createMouseOverEffect();
