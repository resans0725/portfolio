import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxnTVT7Tqde9s-61nlEwtpaocwiIYc3oo",
  authDomain: "portfolio-dc404.firebaseapp.com",
  projectId: "portfolio-dc404",
  storageBucket: "portfolio-dc404.appspot.com",
  messagingSenderId: "755313330204",
  appId: "1:755313330204:web:0c1988c08e43bc522cb7d9",
  measurementId: "G-G1BTKB1HJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
