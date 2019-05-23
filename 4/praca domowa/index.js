// Praca domowa nr 4
// zad.1
// Napisz funkcję, która przyjmuje dwa argumenty - element oraz tablicę i sprawdza czy dany element znajduje się w tablicy.
// Jeżeli dany element nie znajduje się w tablicy funkcja zwraca "Nie ma takiego elementu w tablicy", a jeśli jest to zwraca
// numer indeksu tego elementu.
const x = 5;
const arr = [1,2,3,4,5];

function CheckArray(arr, x){
    let check = arr.indexOf(x);
    if(check !=-1){
        console.log(check);
    }else{
        console.log("Nie ma takiego elementu");
    }
}

CheckArray(arr, x);
// // zad.2
// // Napisz funkcję, który wyświetli po kolei wszystkie elementy dwuwymiarowej tablicy (np.[[1,1,1],[2,3,4,5]]).
const arr1 = [[1,1,1,1],[2,3,4,5]];
function ShowAllElements(){
    for(i=0; i < arr1.length; i++){
        for(j=0; j < arr1[i].length; j++){
            console.log(arr1[[i],[j]]);
        }
    }
}

ShowAllElements();

// zad.3
// Napisz funkcję, która usuwa środkowy element z tablicy.
const arr2 = [1,2,3,4,5];
const y = arr2.length;
const u = y/2;

console.log(Math.ceil(u));
console.log(arr2);
arr2.splice(u, 1)
console.log(arr2)

// zad.4 
// Napisz funkcję, która przyjmuje jako argumenty dwie tablice i zwraca sumę ich elementów.
const arr3 =[10,20,30];
const arr4 =[40,50,60];

function SumaDwochTablic(arr3, arr4){
   let sum = arr3.reduce((a,b) => a+b);
   let sum1 = arr4.reduce((a,b) => a+b);
    console.log(sum+sum1);
}

SumaDwochTablic(arr3, arr4);

// zad. 5
// Dokończyć grę papier kamień nożyce. 
// Może być po przez prompt i alert ale zalecamy zbudować do tego interfejs dla użytkownika(html) .

// zad. 6
// Podaj hasło obecności na zajęciach (okoń2)