import {io} from "socket.io-client";

const Socket=io('https://0a73-179-34-117-67.ngrok.io');


Socket.on("connected", data => {
    console.log(data);    
});

Socket.on("startGame", data => {
    console.log(data);
    console.log(data.numeros.inicial);
   //GameCasual.setInicial= data.numeros.inicial;                  
});



export default Socket;

