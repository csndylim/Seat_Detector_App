const firebase = require('firebase');

const db  = firebase.initializeApp(
    {
        apiKey: "AIzaSyDBhrO6JEbVl8fd2s-zovBMM18ZbPsGQZo",
        authDomain: "anything-b35f8.firebaseapp.com",
        projectId: "anything-b35f8",
        storageBucket: "anything-b35f8.appspot.com",
        messagingSenderId: "415478575296",
        appId: "1:415478575296:web:484aa80b63797a8eeafd25",
        measurementId: "G-MS685E56T5"
    }
)

module.exports = db;

