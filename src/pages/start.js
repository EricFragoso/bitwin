import '../assets/fonts.css';
import {Link} from "react-router-dom";

function Start() {

    return(
        <div id="S1" className="flex flex-row h-screen items-center justify-between w-screen bg-red-800">
            <div id="ad1" className="flex border h-screen w-48 fixed left-0 items-center"></div>
            <div id="content" className="flex flex-1 flex-col items-center justify-center w-64">
                <header className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl text-center text-white fredoka">bitwin</h1>
                    <p className="text-xl text-center fredoka text-black mb-5">Vamos ver se você é bom de palpite?</p>
                </header>
                <div className="flex flex-row items-center justify-around bg-red-700 rounded-3xl px-10 py-8 w-7/12 h-96 py-14">
                    <div id="casual" className="flex flex-1 border-r-2 border-red-800 h-full items-center justify-center flex-col px-8">
                        <h3 className="text-3xl text-left fredoka text-white mb-8">JOGAR</h3>
                        <p id="disclaimer" className="text-md text-left fredoka text-white">Aqui é pra entrar e já se divertir com pessoas ao redor do mundo. Será que você é bom o bastante?</p>
                        <input type="text" placeholder="Seu nick" id="nick" className="mt-5 outline-none w-60 h-24 text-center mx-auto rounded-md text-2xl fredoka cursor-pointer shadow-md shadow-opacity-100" />
                        <Link to="/casual" id="btCasual" className="py-3 mt-8 border-4 border-green-600 border-opacity-60 px-6 text-2xl text-green-900 rounded-xl bg-green-400 fredoka shadow-md cursor-pointer">JOGAR</Link>  
                    </div>
                    <div id="lobby" className="flex flex-1 h-full w-full items-end justify-center items-center justify-center flex-col px-10">
                        <h3 className="text-3xl text-left fredoka text-white mb-8">SALA FECHADA</h3>
                        <p id="disclaimer" className="text-md text-left fredoka text-white mb-8">Crie um lugarzinho para desafiar aquele amigo que se acha sortudo. Mande o código para ele e divirtam-se!</p>
                        <Link to="/lobby" id="btLobby"  className="py-3 border-4 border-yellow-600 border-opacity-60 ml-5 px-6 text-2xl text-yellow-900 rounded-xl bg-yellow-400 fredoka shadow-md cursor-pointer">CRIAR LOBBY</Link>
                    </div>
                </div>
            </div>
            <div id="ad2" className="flex border h-screen w-48 fixed right-0 items-center"></div>
        </div>
    );
}

export default Start;