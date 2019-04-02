let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = [...a];
let c = [...a];
let e = [...a];
let cAux = [];
let eAux =[];
let n = 9;
let d = 4;

a = a.concat(a.splice(0,d)); //  left rotation

b = b.concat(b.splice(0,b.length-d)); // right rotation


for(let i = 0; i < c.length; i++){ // left rotation
    if( (d + i) % c.length){
        cAux[i] = c[d+i];
    }
    else{
        cAux[i] = c[( d + i ) - c.length];
    }
}

console.log(cAux);