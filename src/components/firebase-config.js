import { initializeApp } from 'firebase/app';





import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBYtEl4nGeZeAFqTLk-a-ooaFRuJxtIIYw",
    authDomain: "spotifyme-6970f.firebaseapp.com",
    projectId: "spotifyme-6970f",
    storageBucket: "spotifyme-6970f.appspot.com",
    messagingSenderId: "359624052026",
    appId: "1:359624052026:web:05d5632e839c3e34bc1403",
    measurementId: "G-LYC8XHNJ25"
  };

const app = initializeApp(firebaseConfig)
export default app
