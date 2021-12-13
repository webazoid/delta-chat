
import './App.css';
import { useState } from 'react';
import io from 'socket.io-client';
import Chat from './Chats';


const socket = io.connect('http://localhost:3001');


function App() {

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const[showChat, setShowChat] = useState(false);


  const joinRoom = () => {
    if(username !== '' && room !== ''){
      socket.emit('join_room', room);
      setShowChat(true);


    }


  }


  return (
    <div className="App">
      {!showChat ? (
      <div className="joinChatContainer">
      <h3> Join Chat</h3>
      <input type="text" placeholder="Mohit..." onChange={(e) => {
        setUsername(e.target.value);
      }} />
      <input type="text" placeholder="Room Id.." onChange={(e) => {
        setRoom(e.target.value);}} onKeyPress={(e)=>{e.key=== 'Enter' && joinRoom();}} />
      <button  onClick={joinRoom}>Join a Room </button>


      </div>
      )
      :
      <Chat socket={socket} username={username} room={room} />
      }



    </div>
  );
}

export default App;
