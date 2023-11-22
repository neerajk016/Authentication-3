import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZimwWxKUWHj-RwpVegb0CcBqBHbSo-9U",
  authDomain: "auth3-5f376.firebaseapp.com",
  projectId: "auth3-5f376",
  storageBucket: "auth3-5f376.appspot.com",
  messagingSenderId: "574631982028",
  appId: "1:574631982028:web:106aefd233d4286f16e369"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
