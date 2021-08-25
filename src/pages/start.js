import '../assets/fonts.css';
import {Link} from "react-router-dom";
/*import { io } from "socket.io-client";*/

function Start() {

    /*const socket = io('https://f78d-179-34-115-136.ngrok.io/');*/

    return(
        <div id="S1" className="flex flex-row h-screen items-center justify-between w-screen bg-red-800">
            <div id="ad1" className="flex border h-screen w-48 fixed left-0 items-center"></div>
            <div id="content" className="flex flex-1 flex-col items-center justify-center w-64">
                <header className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl text-center text-white fredoka">bitwin</h1>
                    <p className="text-xl text-center fredoka text-black mb-5">Vamos ver se você é bom de palpite?</p>
                </header>
                <div className="flex flex-row items-center justify-around bg-red-700 rounded-3xl px-10 py-8 w-7/12 h-96 py-14">
                    <div id="casual" className="flex flex-1 border-r-2 border-red-800 h-full items-center justify-center flex-col">
                        <p id="disclaimer" className="text-md text-left fredoka text-white">Aqui é pra entrar e já se divertir com pessoas ao redor do mundo. Será que você é bom o bastante?</p>
                        <input type="text" placeholder="Seu nick" name="chute" id="nick" className="mt-5 outline-none w-60 h-16 text-center mx-auto rounded-md text-2xl fredoka cursor-pointer shadow-md shadow-opacity-100" />
                        <Link to="/casual" id="btCasual" className="py-3 mt-8 border-4 border-green-600 border-opacity-60 px-6 text-2xl text-green-900 rounded-xl bg-green-400 fredoka shadow-md cursor-pointer">CASUAL</Link>  
                    </div>
                    <div id="lobby" className="flex flex-1 h-full w-full items-end justify-center ">
                        <Link to="/lobby" id="btLobby"  className="py-3 border-4 border-yellow-600 border-opacity-60 ml-5 px-6 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer">SALA FECHADA</Link>
                    </div>
                </div>
            </div>
            <div id="ad2" className="flex border h-screen w-48 fixed right-0 items-center"></div>
        </div>
    );
}

export default Start;