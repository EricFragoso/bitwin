import '../assets/fonts.css';
import { Link } from "react-router-dom";

function Casual() {
    return (
        <div id="S1" className="flex flex-col h-screen items-center justify-center w-screen bg-green-800">
            <div id="ad1" className="flex h-screen w-48 fixed left-0 items-center"></div>
            <div id="content" className="flex flex-1 flex-col items-center justify-center w-60">
                <header className="flex flex-col text-center">
                    <h1 className="text-6xl text-center text-white fredoka">bitwin</h1>
                    <p className="text-xl text-center text-green-600 mb-10 fredoka">Casual style</p>
                </header>
                <div className="flex flex-col">
                    <p className="text-xl text-center text-white mb-10 fredoka">Esperando oponente...</p>
                    <Link to="/gameC" id="btPlay" className= "py-3 border-4 border-green-600 border-opacity-60 px-2 text-2xl text-green-900 text-center rounded-xl bg-green-400 fredoka shadow-md cursor-pointer">JOGAR</Link>
                </div>
            </div>
            <div id="ad2" className="flex h-screen w-48 fixed right-0 items-center"></div>
        </div>
    );
}

export default Casual;