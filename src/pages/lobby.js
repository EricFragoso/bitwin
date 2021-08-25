import '../assets/fonts.css';
import {Link} from "react-router-dom";

function Lobby() {
    return(
        <div id="S1" className="flex flex-col h-screen items-center justify-center w-screen bg-purple-800">
            <div className="flex flex-col text-center">
                <h1 className="text-6xl text-center text-white fredoka">bitwin</h1>
                <p className="text-xl text-center text-purple-600 mb-10 fredoka">Lobbyzinho</p>
            </div>
            <div className="flex">
                <Link to="/lobbyC" id="btPlay" className="py-3 h-16 border-4 border-purple-600 border-opacity-60 ml-5 px-6 text-2xl text-purple-900 rounded-xl bg-purple-400 fredoka shadow-md cursor-pointer">CRIAR SALA</Link>  
                <Link to="/lobbyJ" id="btPlay" className="py-3 h-16 border-4 border-purple-600 border-opacity-60 ml-5 px-6 text-2xl text-purple-900 rounded-xl bg-purple-400 fredoka shadow-md cursor-pointer">JUNTAR-SE</Link>  
            </div>
        </div>
    );
}

export default Lobby;