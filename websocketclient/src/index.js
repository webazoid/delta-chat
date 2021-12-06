import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {w3cwebsocket as W3CWebSocket} from 'websocket';


const client = new W3CWebSocket('ws://127.0.0.1:8000');

export default class App extends Component{

    // onButtonClicked = (value) => {
    //     client.send(JSON.stringify({ 
    //         type: "message",
    //         msg: value

    //     }
             
    //     ));
    // }

    componentDidMount(){
        client.onopen = () =>{
            console.log('websocket client connected');
        };
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('got reply! ', dataFromServer);
        }
    }
    render(){
        return (
            <div>
                {/* <button onClick={this.onButtonClicked("Hello!")}>Send Message</button> */}
                <div>Hey!</div>

                 </div>


        )
    }  
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

