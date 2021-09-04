export default function InputGame({setProps, value}){
    
    function setProps(){}

    return(
        <input type="text" id="chute" value={value} onChange={e => setProps(e.target.value)} className="outline-none w-40 h-16 text-center mx-auto rounded-md text-2xl fredoka mb-8 cursor-pointer ring-3 ring-yellow-400" />
    )
}