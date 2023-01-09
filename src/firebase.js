import { initializeApp } from "firebase/app";

import{getAuth,signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUXmlNyFgkOVS6Ij1WAYukyKyA2aPTX-o",
  authDomain: "instagram-web-clone-93884.firebaseapp.com",
  projectId: "instagram-web-clone-93884",
  storageBucket: "instagram-web-clone-93884.appspot.com",
  messagingSenderId: "74887495029",
  appId: "1:74887495029:web:e4653d4f6ada5ec95fe73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export const login=async(email,password)=>{
    try{
    const response= await signInWithEmailAndPassword(login,email,password)
    console.log(response.user)
    }catch(err){
        alert(err.message)

    }
}
