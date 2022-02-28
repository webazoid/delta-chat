import "./App.css";
import { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chats";
import Webcam from 'react-webcam';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);


  const videoConstraints = {
    facingMode: "user"
};

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <h1> Mingle</h1>
=======
      <h1 style={{textAlign: "center"}}> Welcome to Delta Chat </h1>
      
>>>>>>> 5af5737c8a5369b36aa50915ee45cac4c1a5304c
      {!showChat ? (
        <div className="joinChatContainer">
          <h3> Join Chat Now!</h3>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => {
              setUsername(e.target.value);  
            }}
          />
          <input
            type="text"
            placeholder="Room ID"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
            onKeyPress={(e) => {
              e.key === "Enter" && joinRoom();
            }}
          />
          <button onClick={joinRoom}>Join a Room </button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
