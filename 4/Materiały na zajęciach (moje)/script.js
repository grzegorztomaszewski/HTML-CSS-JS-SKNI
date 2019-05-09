console.log("Hello World");

console.log();

switch(new Date().getDay()){
    case 1:
        day = "Monday";
        console.log(day);
        break;
    case 2:
        day = "Wtorek";
        console.log(day);
        break;
    default:
}

setTimeout(function(){
    console.log("Hello");
}, 3000);

// setInterval(function(){
//     console.log("interval");
// },3000);

const arr = [1,2,3,4];

    console.log(arr[arr.length-1]);
let mainDiv = document.getElementById("main");
console.log(mainDiv);
let para = document.createElement("p");
let node = document.createTextNode("This is it!");

para.appendChild(node);
mainDiv.appendChild(para);

alert("aaaa");
let userInput = prompt("bbb"); //pobieranie danych w alercie
console.log(userInput);

let computerNumber = Math.random();
let computerChoise = '';

if(computerNumber < 0.34){
    computerChoise = "nozyce";
}else if(computerNumber < 0.67){
    computerChoise = "kamien"
}else{
    computerChoise = "papier";
}

if(computerChoise == userInput){
    alert("remis");
}else if(computerChoise == "nozyce" && computerChoise == "kamien" && computerChoise == "papier"){
    alert(won);
}