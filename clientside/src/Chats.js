import React from "react";
import {useState} from 'react';

function Chat({socket, username, room}) {

    const [currMessage, setCurrMessage] = useState('');

    const sendMessage = ()=>{
        if(currMessage !== ''){
            
        }
    }

    return (
        <>
        <div className="chat-header">
        <p> Live Chat</p>
        </div>
        <div className="chat-body"></div>
        <div className="chat-footer">
            <input type="text" placeholder="heyaa!!" 
            onChange={(e)=>{setCurrMessage(e.target.value)}}/>
            <button> &#9658; </button>

        </div>
        
        </>
    )



}

export default Chat;