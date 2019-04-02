let n = 8;
let s = "UDDDUDUU";
let arr =[];
let numberOfValeys = 0;
let heightNow = 0;
let lastHeight = 0;

for(let i = 0 ; i < n ; i++){
    if(s[i] === 'D'){lastHeight = heightNow; heightNow--}
    if(s[i] === 'U'){lastHeight = heightNow; heightNow++}
    checkHeight(heightNow, lastHeight);
}

function checkHeight(now, last){
    if(now < 0 && last === 0){
        numberOfValeys++;
    }
}

console.log(numberOfValeys);