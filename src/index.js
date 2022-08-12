import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2V2XrrtO9HxknLhKfxruv47a_J48IBy0",
  authDomain: "cartoon-search-62364.firebaseapp.com",
  projectId: "cartoon-search-62364",
  storageBucket: "cartoon-search-62364.appspot.com",
  messagingSenderId: "657802628066",
  appId: "1:657802628066:web:c3b6adf9b571aa929787bb",
  measurementId: "G-MBJ80D40ZM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App db={db}/>
  </React.StrictMode>
);
