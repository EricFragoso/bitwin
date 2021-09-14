import { useState} from 'react';
import '../assets/fonts.css';
<<<<<<< HEAD
import { Link, useHistory } from "react-router-dom";
//import { Adsense } from '@ctrl/react-adsense';
import io from "socket.io-client";
import {geraHash} from '../services/hashr';
=======
import { Link, useHistory} from "react-router-dom";
import { Adsense } from '@ctrl/react-adsense';
import Socket from '../services/socket.js';
>>>>>>> a01b3644d0590acbc36048c0edc78cc564000abd
import GameCasual from './game-casual';
import {geraHash} from '../services/hashr';

function Start() {
    const room = geraHash();
    const history = useHistory();
    const [nick, setNick] = useState('');

    function ConnectCasual(nick){
        Socket.emit("loginCasual", { nick, room }, Uint8Array.from([1, 2, 3, 4]));
    }

    

    Socket.on("startGame", data => {
        console.log(data);
       history.push({
           pathname: '/gameC',
           state: { 
               inicial: data.numeros.inicial,
               final: data.numeros.final,
               sala: data.currentCasualRoom,
               p1: data.users[0],
               p2: data.users[1]
            },
       });
       console.log( data.numeros.inicial);
       GameCasual.setInicial= data.numeros.inicial;
    });

    function changeNick(event) {
        event.preventDefault()
        setNick(event.target.value)
    }

    return (
        <div id="S1" className="flex flex-row h-screen items-center justify-between w-screen bg-red-800">
            {/*<div id="ad1" className="flex h-screen w-48 fixed left-0 items-center justify-center">
                 <Adsense
                    client="ca-pub-0701250308092687"
                    slot="4391622951"
                    style={{ width: 150, height: 700 }}
                    format=""
                /> 
            </div>*/}
            <div id="content" className="flex flex-col items-center justify-center min-w-full">
                <header className="flex flex-col items-center justify-center w-96">
                    <h1 className="text-6xl text-center text-white fredoka">bitwin</h1>
                    <p className="text-xl text-center fredoka text-black mb-5">Vamos ver se você é bom de palpite?</p>
                </header>
                <div className="flex flex-row items-center justify-around bg-red-700 rounded-3xl px-10 py-8 h-96 py-14">
                    <div id="casual" className="flex border-r-2 border-red-800 h-full items-center justify-center flex-col px-8 w-96">
                        <h3 className="text-3xl text-left fredoka text-white mb-8">JOGAR</h3>
                        <p id="disclaimer" className="text-md text-left fredoka text-white">Aqui é pra entrar e já se divertir com pessoas ao redor do mundo. Será que você é bom o bastante?</p>
                        <input onChange={event => changeNick(event)} autoComplete="off" type="text" placeholder="Seu nick" id="nick" className="mt-5 py-2 outline-none w-60 text-center mx-auto rounded-md text-2xl fredoka cursor-pointer shadow-md shadow-opacity-100" />
                        <Link onClick={() => { ConnectCasual(nick) }} to="/casual" id="btCasual" className="py-3 mt-8 border-4 border-green-600 border-opacity-60 px-6 text-2xl text-green-900 rounded-xl bg-green-400 fredoka shadow-md cursor-pointer">JOGAR</Link>
                    </div>
                    <div id="lobby" className="flex h-full items-end justify-center items-center justify-center flex-col px-10  w-96">
                        <h3 className="text-3xl text-left fredoka text-white mb-8">SALA FECHADA</h3>
                        <p id="disclaimer" className="text-md text-left fredoka text-white mb-8">Crie um lugarzinho para desafiar aquele amigo que se acha sortudo. Mande o código para ele e divirtam-se!</p>
                        <Link to="/lobby" id="btLobby" className="py-3 border-4 border-yellow-600 border-opacity-60 ml-5 px-6 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer">CRIAR LOBBY</Link>
                    </div>
                </div>
            </div>
            {/*<div id="ad2" className="flex h-screen w-48 fixed right-0 items-center justify-center">
                 <Adsense
                    client="ca-pub-0701250308092687"
                    slot="4391622951"
                    style={{ width: 150, height: 700 }}
                    format=""
                /> 
            </div>*/}
        </div>
    );
}

export default Start;