var number : number = 20;

if (number%2 == 0){
    console.log(number+" :is even")
}
else{
    console.log(number+" :is odd")
}

console.log("-------------------------------------")

var prices :number[] = [20.3,5000.2 ,4000,1000.2,930];

for (let i = 0; i < prices.length; i++) {
    if (prices[i]>900){
        console.log(prices[i])
    }
    
}

console.log("-------------------------------------")

var Nums :number[] = [20,50 ,40,10,930];
let c : number = 0;
for (let i = 0; i < prices.length; i++) {
   c+= prices[i];
}

console.log(c)