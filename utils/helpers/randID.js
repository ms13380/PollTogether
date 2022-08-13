// Sets upper and lower bounds for random ID generation
const idMin = 100000;
const idMax = 999999;

// Function for generating random ID > takes min and max range as inputs
function randID(idMin,idMax){
    return Math.floor(Math.random()*(idMax - idMin + 1))+idMin;
}

let ID = randID(idMin,idMax); // Random number between min and max

console.log("Random ID: "+ID); // Console logging the function result
