import '../assets/fonts.css';


function GameCasual() {
    return(
        <div id="S2-CASUAL" className="flex flex-col sm:flex-row w-full h-screen items-center content-center bg-green-800">
            <div id="ad1" className="w-1/6 left-0 hidden sm:block items-center">
                {/*<img src="./assets/ad-skyscrapper.jpg" height="690" width="128" className="mx-auto" />*/}
            </div>
            <div id="game" className="text-center w-3/6 mx-auto border-4 border-green-500 bg-green-700 shadow-xl px-10 py-10 rounded-3xl">
                <p id="dialogo" className="text-5xl text-center text-white mb-8 fredoka"></p>
                <input type="text" name="chute" id="chute" className="outline-none w-40 h-16 text-center mx-auto rounded-md text-2xl fredoka mb-8 cursor-pointer ring-3 ring-yellow-400" />
                <div className="flex justify-center mt-6">
                    <input type="button" value="CHUTAR" id="btChute" className="py-3 border-4 border-yellow-600 border-opacity-60 mr-5 w-40 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer" />  
                    <input type="button" value="RESET" id="btRecomeça"  className="py-3 border-4 border-yellow-600 border-opacity-60 ml-5 w-40 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer" />
                </div> 
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