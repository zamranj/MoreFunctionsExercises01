function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}
let nonSusFunction = function(a){
  if(checkFuel(a) === "green"){
    return a - 100001;
  }
  else if(checkFuel(a) === "yellow"){
    return a - 500001;
  }
  else{
    return a;
  }
};
function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

console.log("=====Test new function====\n");
function deckMops(array){
    let out=[];
    return  out = array.splice(3, 2,"brick","xbox");
    
  }
 

let innocentSwipe = function(levelOfFuel, itemsCargo){
 let arr = deckMops(itemsCargo);
 return `Raided ${nonSusFunction(levelOfFuel)}kg of fuel from the tanks, and stole ${arr[0]} and ${arr[1]} from the cargo hold.`
}


console.log(innocentSwipe(20000,cargoHold))
