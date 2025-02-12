import React, { useEffect, useState } from "react";
import {toast} from "react-toastify";
import {requestForToken, onMessageListner} from '../config/firebase'

const Notification = () => {
    const [notification, setNotification] = useState({title : '', body: ''})

    useEffect(()=> {
        const requestPermission = async () => {
            const permission = await Notification.requestPermission();
            if (permission === 'granted'){
                const token = await requestForToken();
                console.log("Notification permission granted");
            }
        }

        requestPermission();

        const unsubscribe = onMessageListner().then(payload => {
            setNotification({
                title : payload.notification.title,
                body : payload.notification.body
            })

            toast.info(`${payload.notification.title}: ${payload.notification.body}`, {
                position : "top-right",
                autoClose : 5000,
                hideProgressBar : false,
                closeOnClick : true,
                pauseOnHover : true,
                draggable : true,
            })
        });

        return(()=>{
            unsubscribe.catch(err => console.log("failed", err));
        })
    }, [])

    return(
        <div>
            {notification.title && (
                <div>
                    <h2>{notification.title}</h2>
                    <p>{notification.body}</p>
                </div>
            )}
        </div>
    )
}


export default Notification;