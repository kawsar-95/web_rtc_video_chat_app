import { createContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const socketContext = createContext();

const socket = io('http://localhost:5000')

const ContextProvider = ({children}) =>{
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [call, setCall] = useState(null);


    const myVideo = useRef()

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((currentStream) =>{
            setStream(currentStream)
            myVideo.current.srcObject = currentStream;
        })
        socket.on('me',(id) => setMe => (id));

        socket.on('calluser', ({from, name:callerName,signal}) =>{
            setCall({isReceievedCall:true, from, name:callerName, signal})

        })
        
    })

    const answercall = () =>{

    }

    const calluser =() =>{

    }
    const leavecall = () =>{

    }
}