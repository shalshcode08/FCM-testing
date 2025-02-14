import { useEffect } from 'react'
import './App.css'
import { generateToken, messaging } from './config/firebase'
import { onMessage } from 'firebase/messaging'

function App() {

  useEffect(()=>{
    generateToken();
    onMessage(messaging , (payload)=>{
      console.log(payload);
    });
  },[])

  return (
    <>
      HELLO FCM
    </>
  )
}

export default App
