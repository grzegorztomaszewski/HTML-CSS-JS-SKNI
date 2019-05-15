// let userNumber = document.getElementById("userNumber").value;
// const computerNumber = Math.floor(Math.random() * 10) +1;
// console.log(computerNumber);

// document.getElementById("submit").addEventListener("click", (event) => {
//     userNumber = document.getElementById("userNumber").value;
//     console.log(userNumber);
//     if(userNumber > computerNumber){
//         document.getElementById("result").innerHTML = "Twoja liczba jest za duża";
//     }else if(userNumber < computerNumber){
//         document.getElementById("result").innerHTML = "Twoja liczba jest za mała";
//     }else{
//         document.getElementById("result").innerHTML = "Wygrałeś!";
//     }

// });

//API

//stary sposób
// apiCall = () => {
//     let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         let pokemon = JSON.parse(this.responseText);
//         console.log(pokemon);
//     }
// };  
// xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto/", true); //GET - otrzymujemy dane, które są na serwerze,test1.txt - otrzymujemy plik z serwera(komputera), true - określa (a)synchroniczność
// xhttp.send(); //wysłanie zapytania do pliku
// }

// apiCall();

//nowszy sposob
fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
 .then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

//https://simple-movie-api-2019.herokuapp.com/
// /movies
//comamnd

//narzędzie postmath
//the net ninja -youtube
//object oriented JS playlista od the net ninja
//redit daily programmer
//days javascirpt
//vanilla js

let myForm = document.getElementById("form");

myForm.onsubmit = ((event) => {
    event.preventDefault();
    if(myForm.title >0){
        return true;
    }else{
        document.getElementById("formResult").innerHTML = "Title jest konieczny";
    }

    
    console.log("aaa");
});

//https://forms.gle/MP65CjCDARSJpkxf7