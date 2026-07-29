import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
// abdullahqidwai7@gmail.com
const firebaseconfig={
apikey:import.meta.env.VITE_FIREBASE_APIKEY,
authDomain: "url-shortner-77ac8.firebaseapp.com",
projectId: "url-shortner-77ac8",
storageBucket: "url-shortner-77ac8.firebasestorage.app",
messagingSenderId: "441871035650",
appId: "1:441871035650:web:0e5d5052ff45f179c0a61b",
measurementId: "G-FZ9FYHL123"
}
const app=initializeApp(firebaseconfig);
const auth=getAuth(app);
export {app,auth};