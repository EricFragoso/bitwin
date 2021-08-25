import '../assets/fonts.css';
import {Link} from "react-router-dom";
import { io } from "socket.io-client";

function Start() {

    const socket = io('https://f78d-179-34-115-136.ngrok.io/');

    return(
        <div id="S1" className="flex flex-col h-screen items-center justify-center w-screen bg-red-800">
            <div className="flex">
                <h1 className="text-6xl text-center text-white mb-8 fredoka">bitwin</h1>
            </div>
            <p>{socket}</p>
            <div className="flex">
                <Link to="/casual" id="btCasual" className="py-3 border-4 border-green-600 border-opacity-60 mr-5 px-6 text-2xl text-green-900 rounded-xl bg-green-400 fredoka shadow-md cursor-pointer">CASUAL</Link>  
                <Link to="/lobby" id="btLobby"  className="py-3 border-4 border-yellow-600 border-opacity-60 ml-5 px-6 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer">SALA FECHADA</Link>
            </div>
        </div>
    );
}

export default Start;