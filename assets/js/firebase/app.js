
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBTvUM7GJs8QtlBuQHlLGsvJpvkyhs6WSA",
    authDomain: "teste-8a8b3.firebaseapp.com",
    projectId: "teste-8a8b3",
    storageBucket: "teste-8a8b3.appspot.com",
    messagingSenderId: "916770848224",
    appId: "1:916770848224:web:6ac88a96ed2ddcd9df3f85",
    measurementId: "G-HJY2SWQCJX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;
