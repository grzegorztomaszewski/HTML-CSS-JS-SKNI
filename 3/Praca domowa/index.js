//Praca domowa 3
//1. Stwórz zmienne:
//name, surname, age, animal, PI, country, year i przypisz im dowolne wartosci. Nastepnie w konsoli wypisz według schematu każdą zmienną:
const name = "Jan";
const surname = "Kowalski";
const age = 24;
let animal = "Kot";
var PI = 3.14
let country = "Poland";
let year = 2019;

console.log(`Name: ${name}`);
console.log(`Surname: ${surname}`);
console.log(`Age: ${age}`);
console.log(`Animal: ${animal}`);
console.log(`PI: ${PI}`);
console.log(`Country: ${country}`);
console.log(`Year: ${year}`);

// 2. Zmień wartość zmiennej animal na inne zwierze.
animal = "Pies";
console.log(`Animal: ${animal}`);

// 3. Napisz instrukcję warunkową która wyświetli dowolny komunikat w konsoli jeśli zmienna country przyjmuje wartość "poland". Zadbaj o to by wielkość liter nie miała znaczenia. Jeśli zmienna ma inną wartość wypisz w konsoli: "End is near."
if(country.toLowerCase() == "poland"){
    console.log("Yey, Twój kraj to Polska!");
}else{
    console.log("End is near.");
}

// 4. Stwórz funkcje która będzie przyjmowała 2 parametry. Funkcja ma zwracać(return) informację ile lat jest pomiędzy jednym i drugim rokiem. Zakładamy że drugi parametr tej funkcji jest większy .
// Dla chętnych wersja zadania bez ograniczenia która liczba jest większa . Domyślnie każda może być większa a funkcja ma zwracać liczbę dodatnią lub 0.
function wiek(age1, age2){
    return Math.abs(age1 - age2);
}
// 5. Napisz program(nie musi być funkcja), który wyświetla liczby od 1 do 100. Dla liczb podzielnych przez 3 niech program wyświetli „Fizz”; dla liczb podzielnych przez 5 niech wyświetli ‚Buzz’; a dla liczb podzielnych przez 15 niech wyświetli ‚FizzBuzz’.
// Czyli początek wygląda tak:
// 1
// 2
// Fizz
// 4
// Buzz
// 6
// 7
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 15 != 0){
        console.log("Fizz");
    }else if (i % 5 == 0 && i % 15 !=0){
        console.log("Buzz");
    }else if (i % 15 == 0){
        console.log("FizzBuzz");
    }else{
        console.log(i);
    }
}

// Termin do 28.04 15:00

// Mail: tomaszswirski@wp.pl 
// Lub do Ani na priv 