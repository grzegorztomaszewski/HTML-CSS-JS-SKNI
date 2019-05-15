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
// console.log(arr);
// arr.push("Marzena");
// console.log(arr);
// arr.unshift(45);
// console.log(arr);
// //usuwanie elementów - pop, shift
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

// //join
// console.log(arr.join("- - - - "));
// //sort
// console.log(arr.sort())
// const num = [12,2,3,45,67];
// console.log(num.sort((a,b) => a - b ))
// //łączenie tablic - concat lub spread operator
// console.log(arr.concat(num));
// console.log([...arr, ...num]);

// //wycinanie kawałka tablicy - slice
// console.log(arr.slice(2, 5))

// //usuwanie i dodawanie elementów - splice
// arr.splice(2, 1, "Grażynka");
// console.log(arr)
// //map
// console.log(num.map(el => el + 2))
// //filtrowanie
// console.log(num.filter(el => el<10));
// //indexOf
// console.log(arr.indexOf("Ania"));
// //pętla dla tablic -for, forEach
// for (let i=0; i< arr.length;i++){
//     console.log(arr[i])
// }
// /*Zad.1
// Napisz funkcję, która zwraca sumę dwóch najmniejszych liczb z tablicy.



// Zad.2
// Napisz funkcję, która usuwa najmniejszą liczbę z tablicy i zwraca tę tablicę (nie zmieniając kolejności elementów w tablicy).
// */

// function sum(arr) {
//     arr.sort((a,b) => a-b);
//     return arr[0] + arr[1]
// }

// console.log(sum([45,6,2,1,45]))

// function remove(arr) {
//     const arr2 = [...arr];
//     arr2.sort((a,b) => a-b);
//     const indexToRemove = arr.indexOf(arr2[0]);
//     arr.splice(indexToRemove,1);
//     return arr
// }

// console.log(remove([45,6,3,46,77]))

// const arr3 = [[1,1,1], [2,3,4]];
// console.log(arr3[1][1])