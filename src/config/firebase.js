import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey : import.meta.env.VITE_API_KEY,
    authDomain : import.meta.env.VITE_AUTH_DOMAIN,
    projectId : import.meta.env.VITE_PROJECT_ID,
    storageBucket : import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId : import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId : import.meta.env.VITE_APP_ID,
    mesurementId : import.meta.env.VITE_MESUREMENT_ID
}

const vapidKey = import.meta.env.VITE_VAPID_KEY;

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = async() => {
    try{
        const currentToken = await getToken(messaging, {
            vapidKey : vapidKey,
        })
        if(currentToken){
            console.log("CurrentToken : ",currentToken);
            return currentToken;
        }
        else{
            console.log("no registration token available");
        }
    }
    catch(err){
        console.log("An error occured while retreving token", err);
    }
}

export const onMessageListner = () => {
    new Promise((resolve)=>{
        onMessage(messaging, (payload)=>{
            resolve(payload);
        })
    })
}