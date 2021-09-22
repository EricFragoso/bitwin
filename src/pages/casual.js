import '../assets/fonts.css';
import { Link } from "react-router-dom";

function Casual() {
    return (
        <div id="S1" className="flex flex-col h-screen items-center justify-center w-screen bg-bg">
            {/* <div id="ad1" className="flex h-screen w-48 fixed left-0 items-center"></div> */}
            <div id="content" className="flex flex-1 flex-col items-center justify-center w-96">
                <header className="flex flex-col text-center">
                    <h1 className="text-7xl text-center text-laranja fredoka">bitwin</h1>
                    <p className="text-xl text-center text-white mb-20 fredoka">Você gosta de uma casualzinha né?</p>
                </header>
                <div className="flex flex-col">
                    <p className="text-xl text-center text-white mb-10 fredoka animate-pulse">Esperando oponente.</p>
                    <p className="text-xl text-center text-white fredoka">Não se preocupe que o jogo iniciará automaticamente...</p>
                </div>
            </div>
            {/* <div id="ad2" className="flex h-screen w-48 fixed right-0 items-center"></div> */}
        </div>
    );
}

export default Casual;