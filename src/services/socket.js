import {io} from "socket.io-client";

const Socket=io('http://be77-179-34-117-22.ngrok.io');


Socket.on("connected", data => {
    console.log(data);    
});

Socket.on("startGame", data => {
    console.log(data);
   /* 
   */
   console.log(data.numeros.inicial);
   //GameCasual.setInicial= data.numeros.inicial;                  
});



export default Socket;

