let s = "aba";
let n = 10;

//resposta esperada  => 3

let s_length = s.length;
let off = n % s_length;
let count = 0;
let single_run_count = 0;

for (let i = 0; i < s_length; ++i) {
    if (s[i] === 'a') {
        single_run_count++;

        if (i < off) {
            count++;
        }
    }
}

console.log("single run count: ", single_run_count);
console.log("math floor: ", Math.floor(n / s_length));
console.log("off: ", off);
console.log(count);

count = count + (single_run_count * Math.floor(n / s_length));




