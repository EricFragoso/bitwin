import React, { useEffect, useState } from "react";
//import { Adsense } from '@ctrl/react-adsense';
import { useLocation } from 'react-router-dom';
import Socket from '../services/socket.js';
import { Link } from 'react-router-dom'



function GameOver() {
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');
    const [inicial, setInicial] = useState(0);
    const [final, setFinal] = useState(0);
    const [room, setRoom] = useState('');
    const [text, setText] = useState('');
    const [qtChutes, setQtChutes] = useState(0);
    const [chute, setChute] = useState(0);
    const location = useLocation();

    /*useEffect(() => {
        setInicial(location.state.inicial);
        setFinal(location.state.final);
        setRoom(location.state.sala);
        setP1(location.state.p1);
        setP2(location.state.p2);
    }, []);*/


    function verificaNumero(numero) {
        Socket.emit("verifyAttempt", { numero, room }, Uint8Array.from([1, 2, 3, 4]));
        setQtChutes(qtChutes + 1);
    }

    Socket.on("tentouMenor", data => {
        console.log(data)
        setText(data);
    });

    Socket.on("tentouMaior", data => {
        setText(data);
        console.log(data)
    });

    Socket.on("tentouCerto", data => {
        setText(data);
        console.log(data)
    });



    function testando(event) {
        event.preventDefault()
        setChute(event.target.value);

    }

    return (
        <div id="S2-CASUAL" className="flex flex-row h-screen items-center justify-between w-screen bg-bg">
            {/* <div id="ad1" className="w-1/6 left-0 hidden sm:block items-center">
                <Adsense
                    client="ca-pub-0701250308092687"
                    slot="4391622951"
                    style={{ width: 150, height: 700 }}
                    format=""
                />
            </div> */}
            <div id="content" className="flex flex-col items-center justify-center min-w-full">
                <header className="flex flex-col items-center justify-center w-96">
                    <h1 className="text-5xl text-center text-laranja fredoka">bitwin</h1>
                </header>
                <p className="text-md text-center text-white mb-8 fredoka mb-10">GAME OVER - Sala {room}</p>


            <div id="announcer" className="flex flex-col text-center w-3/6 mx-auto">

                <div id="game" className="flex py-10 flex-col drop-shadow-2xl items-center bg-roxo rounded-3xl border-4 border-roxo-claro px-10">
                    <div className="flex flex-row mb-8">
                        <div className="flex flex-col text-center px-10 w-96">
                            <p className="text-4xl text-center text-verde fredoka">Vencedor</p>
                            <p className="text-2xl text-center text-white fredoka mb-10">player 1</p>
                            <span className="text-5xl text-center text-laranja fredoka">8</span>
                            <p className="text-2xl text-center text-white mb-1 fredoka">Chutes</p>
                            <p className="text-md text-center text-roxo-claro mb-5 fredoka">19, 79, 28, 45, 36, 42</p>
                            <span className="text-5xl text-center text-laranja fredoka">1:22</span>
                            <p className="text-2xl text-center text-white mb-1 fredoka">Tempo</p>
                        </div>
                        <div className="flex flex-col text-center px-10 w-96">
                            <p className="text-4xl text-center text-vermelho fredoka">Quer revanche</p>
                            <p className="text-2xl text-center text-white fredoka mb-10">player 2</p>
                            <span className="text-5xl text-center text-laranja fredoka">9</span>
                            <p className="text-2xl text-center text-white mb-1 fredoka">Chutes</p>
                            <p className="text-md text-center text-roxo-claro mb-5 fredoka">19, 79, 28, 45, 36, 42</p>
                            <span className="text-5xl text-center text-laranja fredoka">1:13</span>
                            <p className="text-2xl text-center text-white mb-1 fredoka">Tempo</p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Link id="btChute" to="/" className="py-3 border-4 border-yellow-600 border-opacity-60 w-72 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-yellow-300" >JOGAR NOVAMENTE</Link>
                    </div>
                </div>
            </div>
            </div>

            {/* <div id="ad2" className="w-1/6 right-0 hidden sm:block items-center">
                <Adsense
                    client="ca-pub-0701250308092687"
                    slot="4391622951"
                    style={{ width: 150, height: 700 }}
                    format=""
                />
            </div> */}
            <div id="adM" className="hidden w-full bottom-0 sm:hidden h-24 bg-red-600">
            </div>
        </div>
    );
}

export default GameOver;