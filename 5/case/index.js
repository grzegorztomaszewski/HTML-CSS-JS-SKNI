let btn1 = document.getElementById("dodaj");
let btn2 = document.getElementById("szukaj");
let result1 = document.getElementById("formResult");
let myFormDodaj = document.getElementById("form_dodaj");
let myFormSzukaj = document.getElementById("form_szukaj");


myFormDodaj.onsubmit = ((event) => {
    event.preventDefault();
    result1.innerHTML = "";
    let title1 = document.getElementById("title1");
    let year1= document.getElementById("year1");
    let rated1= document.getElementById("rated1");
    let runtime1= document.getElementById("runtime1");
    if (myFormDodaj.title.value.length > 0 && myFormDodaj.year.value.length > 0) {
        fetch("https://simple-movie-api-2019.herokuapp.com/movies", {
                method: 'POST',
                body: JSON.stringify({
                    "title": myFormDodaj.title1.value,
                    "year": myFormDodaj.year1.value,
                    "rated": myFormDodaj.rated1.value,
                    "runtime": myFormDodaj.runtime1.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)));
        result1.innerHTML = "Film został dodany!";
    } else {
        result1.innerHTML = "Tytuł i rok jest wymagany!!";
    }
});

myFormSzukaj.onsubmit = ((event) => {
    event.preventDefault();
    result1.innerHTML = "";
    let title2 = document.getElementById("title2");
    let year2= document.getElementById("year2");
    let rated2= document.getElementById("rated2");
    let runtime2= document.getElementById("runtime2");
    if (myFormSzukaj.title.value.length > 0 && myFormSzukaj.year.value.length > 0) {
        fetch("https://simple-movie-api-2019.herokuapp.com/movies", {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)));

                result1.innerHTML = "Film został znaleziony! (Jeżeli jest dostępny)";
    } else {
        result1.innerHTML = "Tytuł i rok jest wymagany!!";
    }
    if(myFormSzukaj.title.value == title2.value){
        console.log();
    }
});

    

// fetch("https://simple-movie-api-2019.herokuapp.com/movies")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         console.log(JSON.stringify(myJson));
//     });


// myFormSzukaj.onsubmit = ((event) => {
//     event.preventDefault();
//     result1.innerHTML = "";
//     let title2 = document.getElementById("title2");
//     let year2= document.getElementById("year2");
//     let rated2= document.getElementById("rated2");
//     let runtime2= document.getElementById("runtime2");
//     if (myFormSzukaj.title.value.length > 0 && myFormSzukaj.year.value.length > 0) {
//         fetch("https://simple-movie-api-2019.herokuapp.com/movies", {
//                 method: 'GET',
//                 body: JSON.stringify({
//                     "title": myFormSzukaj.title2.value,
//                     "year": myFormSzukaj.year2.value,
//                     "rated": myFormSzukaj.rated2.value,
//                     "runtime": myFormSzukaj.runtime2.value
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }).then(res => res.json())
//             .then(response => console.log('Success:', JSON.stringify(response)));
//         result1.innerHTML = "Film został znaleziony! (Jeżeli jest dostępny)";
//     } else {
//         result1.innerHTML = "Tytuł i rok jest wymagany!!";
//     }
// });

