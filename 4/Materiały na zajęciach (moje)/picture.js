   //zmiennych colors i tab w tym zadaniu nie zmieniaj
        const colors = ['#ffffff', '#F8AA00', '#7E1C03', '#DB0F3B', '#0026FF'];
        const tab = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,3,3,3,3,3,0,0,0,0,0],[0,0,0,3,3,3,3,3,3,3,3,0,0,0],[0,0,0,2,2,2,1,1,2,1,0,0,0,0],[0,0,2,1,2,1,1,1,2,1,1,1,0,0],[0,0,2,1,2,2,1,1,1,2,1,1,1,0],[0,0,2,2,1,1,1,1,2,2,2,2,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,3,3,4,3,3,3,0,0,0,0,0],[0,0,3,3,3,4,3,3,4,3,3,3,0,0],[0,3,3,3,3,4,4,4,4,3,3,3,3,0],[0,1,1,3,4,1,4,4,1,4,3,1,1,0],[0,1,1,1,4,4,4,4,4,4,1,1,1,0],[0,1,1,4,4,4,4,4,4,4,4,1,1,0],[0,0,0,4,4,4,0,0,4,4,4,0,0,0],[0,0,2,2,2,0,0,0,0,2,2,2,0,0],[0,2,2,2,2,0,0,0,0,2,2,2,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ];

        /*
        -----------------------------------------
        ZADANIE JEST TAKIE:
        -----------------------------------------
        1) zrob petle po 2 wymiarowej talicy "tab"
        2) Kazdą pobraną wartość z tablicy dodawaj do tekstu za pomocą instrukcji:
           tekst += '<div style="background:' + pobranyKolor + '"></div>';
           gdzie pobranyKolor pobieraj z tablicy colors. Indeks koloru pobierzesz z danego miejsca w tablicy tab np:
           tab[0][0] = 0; czyli pobranyKolor = #ffffff
        3) Po zakonczeniu kazdej pętli po tablicy 2 wymiaru, do tekstu dodawaj "<br>"
        4) W rezultacie powinienes otrzymac rysunek
        */


        //-----------------------------------------
        //START
        //-----------------------------------------
        let tekst = '';

        //tutaj zrob odpowiednie petle - np. for:

        for(let i=0; i<tab.length;i++){
            for(let j=0; j<tab[i].length; j++){
                  let pobranyKolor = colors[tab[i][j]];
                  tekst += '<div style="background:' + pobranyKolor + '"></div>';
            }
            tekst += "<br>";
        }

        //tutaj wstawiamy do div wygenerowany html - nie ruszaj poniższej linijki
        document.querySelector('.canvas').innerHTML = tekst;
        //Żródło: https://kursjs.pl/kurs/super-podstawy/tablice.php
