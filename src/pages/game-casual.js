import React, { useEffect, useState} from "react";
//import { Adsense } from '@ctrl/react-adsense';
import {useLocation} from 'react-router-dom';
import Socket from '../services/socket.js';
import user from '../imgs/user.png';
import arrowUp from '../imgs/seta-up.png';
import arrowDown from '../imgs/seta-down.png';



function GameCasual() {
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');
    const [inicial, setInicial] = useState(0);
    const [final, setFinal] = useState(0);
    const [room, setRoom] = useState('');
    const [textmenor, setTextmenor] = useState('');
    const [textmaior, setTextmaior] = useState('');
    const [textcerto, setTextcerto] = useState('');
    const [numerocerto, setNumerocerto] = useState('');
    const [qtChutes, setQtChutes] = useState(0);
    const [chute, setChute] = useState(0);
    const location = useLocation();

    useEffect(() => {
        // setInicial(5);
        // setFinal(90);
        // setRoom('F5RSS');
        // setP1('Julio');
        // setP2('Alexandrinho');
        setInicial(location.state.inicial);
        setFinal(location.state.final);
        setRoom(location.state.sala);
        setP1(location.state.p1);
        setP2(location.state.p2);
    }, []);


    function verificaNumero(numero){
        Socket.emit("verifyAttempt", {numero, room}, Uint8Array.from([1, 2, 3, 4]));
        setQtChutes(qtChutes + 1);        
    }

    Socket.on("tentouMenor", data => {
        setTextmenor(data);
    });

    Socket.on("tentouMaior", data => {
        setTextmaior(data);
    });

    Socket.on("tentouCerto", data => {
        setTextcerto(data);
        setNumerocerto(chute);
    });
    Socket.on("terminou", data => {
        setTextcerto(data);
        setNumerocerto(chute);
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
                <p className="text-md text-center text-white mb-8 fredoka mb-10">Sala {room}</p>

                <div id="headerInfoGame" className="flex flex-row  w-desk justify-between mb-2">
                    <div id="idp1" className="flex flex-row items-center w-96">
                        <img src={user} width="47" height="47" />
                        <p className="text-2xl text-center text-laranja fredoka uppercase ml-4">{p1}</p>
                    </div>
                    <div className="text-6xl text-center text-laranja-claro fredoka">
                        <p>Vs</p>
                    </div>
                    <div id="idp2" className="flex flex-row items-center w-96 justify-end">
                        <p className="text-2xl text-center text-laranja fredoka uppercase mr-4">{p2}</p>
                        <img src={user} width="47" height="47" />
                    </div>
                </div>
            
                <div id="game" className="flex flex-col drop-shadow-2xl items-center bg-roxo rounded-3xl border-4 border-roxo-claro px-10">
                    <div className="flex flex-row items-center mb-5">
                        <p className="text-7xl text-center text-verde mr-8 fredoka"> 0{inicial}...</p>
                        
                        {textcerto ? <p className="text-9xl text-center text-laranja fredoka">{numerocerto}</p> : <p className="text-9xl text-center text-laranja fredoka">?</p>}
                        <p className="text-7xl text-center text-vermelho ml-8  fredoka">...{final}</p>
                    </div>
                    <div className="flex flex-row items-start">
                        <div id="infoChuteBaixo" className="flex flex-col h-full items-center justify-center px-8 w-64">
                            <img src={arrowUp} width="97" />
                            {textmenor && <p className="text-xl text-center text-laranja fredoka mt-4 uppercase">{textmenor}</p>}
                        </div>
                        <div id="chuteForm" className="flex flex-col h-full items-center justify-center px-8 w-96 mb-10">
                            {textcerto ? <input type="text" id="chute" onChange={event => testando(event)} autoComplete="off" className="outline-none w-40 h-16 text-center text-white mx-auto rounded-xl text-4xl fredoka mb-8 cursor-pointer ring-3 ring-yellow-400 bg-roxo-escuro invisible" /> : <input type="text" id="chute" onChange={event => testando(event)} autoComplete="off" className="outline-none w-40 h-16 text-center text-white mx-auto rounded-xl text-4xl fredoka mb-8 cursor-pointer ring-3 ring-yellow-400 bg-roxo-escuro" /> }
                            {textcerto ? <p className="text-xl text-center text-laranja fredoka mt-4 uppercase">{textcerto}</p> : <button id="btChute" onClick={() => { verificaNumero(chute) }} className="py-3 border-4 border-laranja-claro border-opacity-60 w-40 text-3xl text-roxo rounded-xl bg-laranja fredoka shadow-md cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-yellow-300" >CHUTAR</button>}
                        </div>
                        <div id="infoChuteAlto" className="flex flex-col h-full items-center justify-center px-8 w-64">
                            <img src={arrowDown} width="97"/>
                            {textmaior && <p className="text-xl text-center text-laranja fredoka mt-4 uppercase">{textmaior}</p>}
                        </div>
                    </div>
                    <div id="stats" className="py-3 px-3 mb-6 rounded-2xl bg-roxo-claro">
                        <p className="uppercase fredoka text-white uppercase" >Você já palpitou <span className="uppercase bg-roxo-medio fredoka text-white uppercase px-2 py-2 rounded-md">{qtChutes}</span> vezes</p>
                    </div>

                    {/* <input type="text" id="chute" onChange={event => testando(event)} autoComplete="off" className="outline-none w-40 h-16 text-center mx-auto rounded-md text-2xl fredoka mb-8 cursor-pointer ring-3 ring-yellow-400" />
                    <div className="flex justify-center mt-6">
                        <button id="btChute" onClick={() => { verificaNumero(chute) }} className="py-3 border-4 border-yellow-600 border-opacity-60 w-40 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-yellow-300" >CHUTAR</button>
                    </div>
                    <p id="dica" className="text-4xl text-center text-white mb-4 fredoka"></p>
                    {text && <p id="lista" className="text-2xl text-center text-white mb-4 fredoka transition duration-500 ease-in-out transform opacity-100">{text}</p>}
                    {text && <p id="qtChutes" className="text-2xl text-center text-white mb-4 fredoka transition duration-500 ease-in-out transform opacity-100">{qtChutes}</p>} */}
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

export default GameCasual;