import React, { useState } from "react";
import '../assets/fonts.css';
/*import {GeraNumeros} from '../services/engine';*/




function GameCasual() {

    const [numero, setNumero] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`${numero}`)
    }



    return(
        <div id="S2-CASUAL" className="flex flex-col sm:flex-row w-full h-screen items-center content-center bg-green-800">
            <div id="ad1" className="w-1/6 left-0 hidden sm:block items-center">
                {/*<img src="./assets/ad-skyscrapper.jpg" height="690" width="128" className="mx-auto" />*/}
            </div>
            <div id="game" className="flex flex-col text-center w-3/6 mx-auto border-4 border-green-500 bg-green-700 shadow-xl px-10 py-10 rounded-3xl">
                <p className="text-5xl text-center text-white mb-8 fredoka"></p>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={e => setNumero(e.target.value)} value={numero} name="chute" id="chute" className="outline-none w-40 h-16 text-center mx-auto rounded-md text-2xl fredoka mb-8 cursor-pointer ring-3 ring-yellow-400" />
                    <div className="flex justify-center mt-6">
                        <input type="submit" value="CHUTAR" id="btChute" className="py-3 border-4 border-yellow-600 border-opacity-60 w-40 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer" />  
                    </div>
                </form> 
                <p id="dica" className="text-4xl text-center text-white mb-4 fredoka"></p>
                <p id="lista" className="text-4xl text-center text-white mb-4 fredoka"></p>
            </div>
            <div id="ad2" className="w-1/6 right-0 hidden sm:block items-center">
                {/*<img src="./assets/ad-skyscrapper.jpg" height="690" width="128" className="mx-auto" />*/}
            </div>
            <div id="adM" className="hidden w-full bottom-0 sm:hidden h-24 bg-red-600">
            </div>
        </div>
    );
}

export default GameCasual;