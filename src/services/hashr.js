let hash = '';
let base = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export function geraHash(){  
    let casa1 = getRandom(0, 35);
    let casa2 = getRandom(0, 35);
    let casa3 = getRandom(0, 35);
    let casa4 = getRandom(0, 35);
    let casa5 = getRandom(0, 35);
    let casa6 = getRandom(0, 35);
    
    hash = base[casa1]+base[casa2]+base[casa3]+base[casa4]+base[casa5]+base[casa6];

    return hash
}

function getRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let final = Math.floor(Math.random()*(max-min+1))+min; 

    return final
}
