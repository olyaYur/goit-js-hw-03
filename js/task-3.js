

function filterArray(numbers, value) {
let arNew =[];
    for(let i =0; i<numbers.length; i+=1){
    if(numbers[i]>value) {
        arNew = numbers[i];
       console.log(arNew);
    };
    };
    return arNew; 
};


console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));


