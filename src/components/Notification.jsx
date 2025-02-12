import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { requestForToken, onMessageListner } from "../config/firebase";

const NotificationComponent = () => {
    const [token, setToken] = useState("");
    const [notification, setNotification] = useState({ title: "", body: "" });

    useEffect(() => {
        // Request permission and get token
        const requestPermission = async () => {
            try {
                const permission = await Notification.requestPermission();
                if (permission === "granted") {
                    const fcmToken = await requestForToken();
                    setToken(fcmToken);
                }
            } catch (error) {
                console.error("Error getting permission:", error);
            }
        };

        requestPermission();

        // Listen for messages
        const unsubscribe = onMessageListner().then((payload) => {
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
            });

            toast.info(`${payload.notification.title}: ${payload.notification.body}`);
        });

        return () => {
            unsubscribe.catch((err) => console.log("failed: ", err));
        };
    }, []);

    // Function to send notification (for testing)
    const sendTestNotification = async () => {
        if (!token) {
            toast.error("No FCM token available");
            return;
        }

        try {
            const response = await fetch("https://fcm.googleapis.com/fcm/send", {
                method: "POST",
                headers: {
                    Authorization: "key=YOUR-SERVER-KEY", // Get this from Firebase Console
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: token,
                    notification: {
                        title: "Test Notification",
                        body: "This is a test notification",
                    },
                }),
            });

            if (response.ok) {
                toast.success("Test notification sent!");
            } else {
                toast.error("Failed to send notification");
            }
        } catch (error) {
            console.error("Error sending notification:", error);
            toast.error("Error sending notification");
        }
    };

    return (
        <div>
            <button
                onClick={sendTestNotification}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Send Test Notification
            </button>

            {notification?.title && (
                <div className="mt-4 p-4 border rounded">
                    <h3 className="font-bold">{notification.title}</h3>
                    <p>{notification.body}</p>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default NotificationComponent;
