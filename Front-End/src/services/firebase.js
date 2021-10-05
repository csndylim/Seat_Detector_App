//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: firebase.js                                                                                               //
//    Author: Candy                                                                                                 //
//  Function: Initialize the firebase app to allow different components to connect and use the api provided by          //
//            firebase. The values initialized below is based on our groups firebase account.                           //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"

//Shared Acc
const app = firebase.initializeApp({
    apiKey: "AIzaSyBMDsS786CU9bbNB3TD-yuIT-eEYE_x2Wo",
    authDomain: "anythingase-6a8d7.firebaseapp.com",
    projectId: "anythingase-6a8d7",
    storageBucket: "anythingase-6a8d7.appspot.com",
    messagingSenderId: "524491645779",
    appId: "1:524491645779:web:1dc852c52599c3cffdf7a6",
    measurementId: "G-76DSMM8BJ1"
})

export const auth = app.auth()
export default app