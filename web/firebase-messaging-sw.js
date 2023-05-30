importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBmx3Xp-yrOyUMd1JVt_6GrLAfaLXW9y9Q",
   authDomain: "shndyapp.firebaseapp.com",
   projectId: "shndyapp",
   storageBucket: "shndyapp.appspot.com",
   messagingSenderId: "1091881147447",
   appId: "1:1091881147447:web:4cb1404a8a076743e233b2",
   measurementId: "G-DPKJ56MLJ2"
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});