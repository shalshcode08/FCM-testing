/* eslint-disable no-undef */
// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp ({
  apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    mesurementId: import.meta.env.VITE_MESUREMENT_ID
});

const messaging = firebase.messaging();con

messaging.onBackgroundMessage((payload)=>{
  console.log("service-worker : message recived ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body : payload.notification.body,
    icon : payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions);
})