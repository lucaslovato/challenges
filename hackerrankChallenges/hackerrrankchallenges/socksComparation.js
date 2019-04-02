let arr = [10,20,20,10,10,30,50,10,20];
let n = 9;
let auxArray = new Set([]);
let parityAux = 0;

for(let i = 0 ; i < n ; i++){
    if(auxArray.has(arr[i])){
        parityAux++;
        auxArray.delete(arr[i]);
    }
    else{
        auxArray.add(arr[i]);
    }
}

console.log("auxArray", auxArray);
console.log("quantidade de pares: ", parityAux);