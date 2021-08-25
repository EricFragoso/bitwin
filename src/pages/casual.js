import '../assets/fonts.css';
import {Link} from "react-router-dom";

function Casual() {
    return(
        <div id="S1" className="flex flex-col h-screen items-center justify-center w-screen bg-green-800">
            <div className="flex flex-col text-center">
                <h1 className="text-6xl text-center text-white fredoka">bitwin</h1>
                <p className="text-xl text-center text-green-600 mb-10 fredoka">Casual style</p>
            </div>
            <div className="flex">
                <input type="text" placeholder="Seu nick" name="chute" id="chute" className="outline-none w-60 h-16 text-center mx-auto rounded-md text-2xl fredoka mb-8 cursor-pointer ring-3 ring-yellow-400 shadow-md shadow-opacity-100" />
                <Link to="/gameC" id="btPlay" className="py-3 h-16 border-4 border-green-600 border-opacity-60 ml-5 px-6 text-2xl text-green-900 rounded-xl bg-green-400 fredoka shadow-md cursor-pointer">JOGAR</Link>  
            </div>
        </div>
    );
}

export default Casual;