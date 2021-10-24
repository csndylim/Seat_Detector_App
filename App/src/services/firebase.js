//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: firebase.js                                                                                               //
//    Author: Wilson                                                                                                    //
//  Function: Initialize the firebase app to allow different components to connect and use the api provided by          //
//            firebase. The values initialized below is based on our groups firebase account.                           //
//                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"

//Shared Acc
const app = firebase.initializeApp({
        apiKey: "AIzaSyDBhrO6JEbVl8fd2s-zovBMM18ZbPsGQZo",
        authDomain: "anything-b35f8.firebaseapp.com",
        projectId: "anything-b35f8",
        storageBucket: "anything-b35f8.appspot.com",
        messagingSenderId: "415478575296",
        appId: "1:415478575296:web:484aa80b63797a8eeafd25",
        measurementId: "G-MS685E56T5"  
})

export const auth = app.auth()
export default app