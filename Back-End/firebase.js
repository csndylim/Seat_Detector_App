const firebase = require('firebase');

const db  = firebase.initializeApp(
    {
        apiKey: "AIzaSyBMDsS786CU9bbNB3TD-yuIT-eEYE_x2Wo",
        authDomain: "anythingase-6a8d7.firebaseapp.com",
        projectId: "anythingase-6a8d7",
        storageBucket: "anythingase-6a8d7.appspot.com",
        messagingSenderId: "524491645779",
        appId: "1:524491645779:web:1dc852c52599c3cffdf7a6",
        measurementId: "G-76DSMM8BJ1"      
    }
)

module.exports = db;

