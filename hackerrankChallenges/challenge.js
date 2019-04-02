/**
 * Brick Abode challenge - javaScript
 * @author Lucas Lovato da Cunha Silveira
 */

let inputSample = [1, 10, 7, 0];
let inputSample2 = [1, 10, 7, 4, 50, 2, 40, 2, 30, 4, 60, 4, 5, 15, 3, 6, 3, 12, 3, 70, 5, 71, 1, 0]
let arrayIndexes = [];
let result = 0;
let finalResult = [];
let parityVerification = null;

inputSample2.pop();

do{
    arrayIndexes = inputSample2.splice(0,(((inputSample2[0])*2)+1));
    result =  funcao(arrayIndexes);
    finalResult.push(result);
}while(inputSample2.length !== 0)

function funcao(array){
    let auxiliar = [];
    for(let i = 0; i < (array[0])*2;){
        i = i+2;
        parityVerification = array[i] % 2;
        if(!parityVerification){
            auxiliar.push(array[i]); 
        }else{
            auxiliar.push(array[i] - 1 );
        }
    }
    return  numberOfCombinations(auxiliar);
}

 function numberOfCombinations(data){
    let sum = 0;
    for(let i = 0; i < data.length; i++){
        sum += data[i];
    }
    return Math.trunc(sum / 4);
}

console.log(finalResult);
