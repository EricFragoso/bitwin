import React, { useEffect, useState } from "react";
import { Adsense } from '@ctrl/react-adsense';


function GameCasual() {
    const [inicial, setInicial] = useState(0);
    const [final, setFinal] = useState(0);
    const [alvo, setAlvo] = useState(0);
    const [text, setText] = useState('');
    const [chute, setChute] = useState(0);
    const [config, setConfig] = useState({
        minInicial: 1,
        maxInicial: 13,
        minFinal: 70,
        maxFinal: 100
    });

    useEffect(() => {
        setInicial(getRandom(config.minInicial, config.maxInicial));
        setFinal(getRandom(config.minFinal, config.maxFinal));
        setAlvo(getRandom(inicial, final));
    }, []);

    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let final = Math.floor(Math.random() * (max - min + 1)) + min;

        return final
    }

    function verificaNumero(numero) {
        console.log(alvo);

        if (numero > alvo) {
            setText('bitwin é menor que '+ numero);
        } else {
            if (numero < alvo) {
                setText('bitwin é maior que '+ numero)
            } else {
                setText('BITWIN')
            }
        }
    }

    function testando(event) {
        event.preventDefault()
        setChute(event.target.value)
    }

    return (
        <div id="S2-CASUAL" className="flex flex-col sm:flex-row w-full h-screen items-center content-center bg-green-800">
            <div id="ad1" className="w-1/6 left-0 hidden sm:block items-center">
                <Adsense
                    client="ca-pub-0701250308092687"
                    slot="4391622951"
                    style={{ width: 150, height: 700 }}
                    format=""
                />
            </div>
            <div id="game" className="flex flex-col text-center w-3/6 mx-auto border-4 border-green-500 bg-green-700 shadow-xl px-10 py-10 rounded-3xl">
                <p className="text-5xl text-center text-white mb-8 fredoka">O número escondido está entre {inicial} e {final}</p>
                <input type="text" id="chute" onChange={event => testando(event)} autoComplete="off" className="outline-none w-40 h-16 text-center mx-auto rounded-md text-2xl fredoka mb-8 cursor-pointer ring-3 ring-yellow-400" />
                <div className="flex justify-center mt-6">
                    <button id="btChute" onClick={() => { verificaNumero(chute) }} className="py-3 border-4 border-yellow-600 border-opacity-60 w-40 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer" >CHUTAR</button>
                </div>
                <p id="dica" className="text-4xl text-center text-white mb-4 fredoka"></p>
                {text && <p id="lista" className="text-4xl text-center text-white mb-4 fredoka">{text}</p>}
            </div>

            <div id="ad2" className="w-1/6 right-0 hidden sm:block items-center">
                <Adsense
                    client="ca-pub-0701250308092687"
                    slot="4391622951"
                    style={{ width: 150, height: 700 }}
                    format=""
                />
            </div>
            <div id="adM" className="hidden w-full bottom-0 sm:hidden h-24 bg-red-600">
            </div>
        </div>
    );
}

export default GameCasual;