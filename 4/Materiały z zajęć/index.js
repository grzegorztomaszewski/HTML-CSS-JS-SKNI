//deklaracja tablicy
const arr = ["Ania", "Tomek", "Marcin", 67,
 {name: "ania", age:15}];
console.log(arr);
console.log(arr[2]);
console.log(arr[4].age)
arr[1] = "Michał"
console.log(arr)
//length
console.log(arr.length)
// //dodawanie elementów - push lub po indeksie, unshift
arr[5] = "Kasia";
console.log(arr);
arr.push("Marzena");
console.log(arr);
arr.unshift(45);    //dodaje elemnt na początku tablicy 
console.log(arr);
//usuwanie elementów - pop, shift
arr.pop();          //wyrzuca ostani element z tablicy
console.log(arr);
arr.shift();        //wyrzuca pierwszy element z tablicy
console.log(arr);

//join
console.log(arr.join("- - - - ")); //Łączy elementy z tablicy znakiem podanym w funkcji
//sort
console.log(arr.sort()); //sortuje elementy w danej tablicy
const num = [12,2,3,45,67];
console.log(num.sort((a,b) => a - b )); //sortowanie w odpowiedniej kolejności
// //łączenie tablic - concat lub spread operator
console.log(arr.concat(num));
console.log([...arr, ...num]);  //... wyświetla elementy danej tablicy

//wycinanie kawałka tablicy - slice
console.log(arr.slice(2, 5))    //zostawia tylko elementy między pierwszym podanym argumentem a drugim (pierwszy argument zostaje, drugi jest juz usuwany)

//usuwanie i dodawanie elementów - splice (zmienia zawartość tablicy, dodając
//nowe elementy podczas usuwania starych)
//(arr.splice(startowy index, liczba ele,elementów do usunięcia, element dodawany do tablcy))
console.log(arr)
arr.splice(2, 1, "Grażynka");
console.log(arr)
//map (tworzy nową tablicę zawierajc wyniki podanej funkcji dla kadego elemntu wywojcej tablicy - taka pseudo pętla)
console.log(num);
console.log(num.map(el => el + 2))
console.log(num);
// //filtrowanie - filtruje liczby w tablicy - pokazuje tylko te spełniające warunek
console.log(num.filter(el => el<10));
//indexOf
console.log(arr.indexOf("Ania")); //(pokazuje liczbę argumentów)
// //pętla dla tablic -for, forEach
for (let i=0; i< arr.length;i++){
    console.log(arr[i])
}
// /*Zad.1
// Napisz funkcję, która zwraca sumę dwóch najmniejszych liczb z tablicy.
function suma(){
    console.log(num.sort((a,b) => a-b));
    sumal = num[0]+num[1];
    console.log(sumal);
}
suma();

// Zad.2
// Napisz funkcję, która usuwa najmniejszą liczbę z tablicy i zwraca tę tablicę (nie zmieniając kolejności elementów w tablicy).

function sum(arr) {
    arr.sort((a,b) => a-b);
    return arr[0] + arr[1]
}

console.log(sum([45,6,2,1,45]))

function remove(arr) {
    const arr2 = [...arr];
    arr2.sort((a,b) => a-b);
    const indexToRemove = arr.indexOf(arr2[0]);
    arr.splice(indexToRemove,1);
    return arr
}

console.log(remove([45,6,3,46,77]))

const arr3 = [[1,1,1], [2,3,4]];
const test = [[0,1,2],[2,1,0]];
console.log(arr3);
console.log(arr3[1][1]);
console.log("__________");
console.log(...test);
console.log("__________");
console.log(test[2][0]);