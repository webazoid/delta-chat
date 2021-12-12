import React, { useEffect } from "react";
import {useState} from 'react';

function Chat({socket, username, room}) {

    const [currMessage, setCurrMessage] = useState('');

    const sendMessage = async()=>{
        if(currMessage !== ''){
            const messageData = {
                room: room,
                author: username,
                message: currMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),

            }

            await socket.emit('send_message', messageData)

        }
    }

    useEffect(()=>{ 
        socket.on('receive_message', (data)=>{
            console.log(data);

        }
        )
    }
    
    )

    return (
        <>
        <div className="chat-header">
        <p> Live Chat</p>
        </div>
        <div className="chat-body"></div>
        <div className="chat-footer">
            <input type="text" placeholder="heyaa!!" 
            onChange={(e)=>{setCurrMessage(e.target.value)}}/>
            <button onClick={sendMessage}> &#9658; </button>

        </div>
        
        </>
    )



}

export default Chat;