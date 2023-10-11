// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}
 function appendCat(name){ 
    const catsCopy = [...cats];
    catsCopy.push(name);
    return catsCopy;
 }

 function prependCat(name){ 
    const catsCopy = [...cats];
    catsCopy.unshift(name);
    return catsCopy;
 }

 function removeLastCat(){
    const catsCopy = [...cats];
    catsCopy.pop();
    return catsCopy;
 }

 function removeFirstCat(){
    const catsCopy = [...cats];
    catsCopy.shift();
    return catsCopy;
 }