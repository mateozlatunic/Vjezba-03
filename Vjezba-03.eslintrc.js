
// -------------------------------------- Zadaci za Vjezbu III ------------------------------------------------- //

//1. UKOLIKO JE CINJENICA LAZNA, IZBRISI CINJENICU I POSTAVI SKRIVENO NA TRUE, ZATIM FILTRIRAJ
//   ARRAY I PRIKAZI SAMO ONE CINJENICE KOJE SU ISTINITE

/*
let randomFacts = [
    {
        factoid: "Previse vode te moze ubiti",
        istina: true,
        skriveno: null
    },
    {
        factoid: "RH je 57 na svijetu po indeksu koruptivne percepcije",
        istina: true,
        skriveno: null
    },
    {
        factoid: null,
        istina: false,
        skriveno: null
    },
    {
        factoid: "Medijalna placa je iznosila 6290kn, a prosjecna 7574kn u 2022.",
        istina: true,
        skriveno: null
    },
    {
        factoid: "Proslo je 20 godina otkad je Hajduk bio prvak",
        istina: false,
        skriveno: null
    },
]

// Rjesenje:
for (let i = 0; i < randomFacts.length; i++) {
    if (randomFacts[i].istina == false) {
        randomFacts.splice(i, 1);
        i--; // smanjiti i jer smo uklonili element
    }
}
let istiniteCinjenice = randomFacts.filter(c => c.istina == true);
console.log(istiniteCinjenice);
*/

// -------------------------------------------------------------------------------------- //

//2. AKO JE DRZAVA CLANICA SCHENGENSKOG PROSTORA, POSTAVI PROPERTY 
//   "slobodanProlazak" NA true I ANALOGNO TOME.

/*
let europskeDrzave = [
    {
        drzava: "Austrija",
        uSchengenu: true,
        slobodanProlazak: null
    },
    {
        drzava: "Hrvatska",
        uSchengenu: true,
        slobodanProlazak: null
    },
    {
        drzava: "Srbija",
        uSchengenu: true,
        slobodanProlazak: null
    },
    {
        drzava: "Velika Britanija",
        uSchengenu: false,
        slobodanProlazak: null
    },
    {
        drzava: "Island",
        uSchengenu: true,
        slobodanProlazak: null
    }
];

// Rjesenje:
for(let i=0; i<europskeDrzave.length; i++){
    if(europskeDrzave[i].uSchengenu==true){
        europskeDrzave[i].slobodanProlazak=true;  
        console.log(europskeDrzave[i]);
    }   
}
*/

// -------------------------------------------------------------------------------------- //


//3. IZRACUNAJ PROSJEK JUNIORSKIH PLACA
//4. IZRACUNAJ MEDIJAN SVIH PLACA

/*
let prosjekDeveloperskihPlaca = [
    { 
        placa: 1300,
        senioritet: "junior",
        area: "frontend",
        tech: "Vuejs",
    },
    {
        placa: 2600,
        senioritet: "senior",
        area: "frontend",
        tech: "React.js",
    },
    {
        placa: 1400,
        senioritet: "junior",
        area: "frontend",
        tech: "Angular.js",
    },
    {
        placa: 1900,
        senioritet: "medior",
        area: "backend",
        tech: ".NET",
    },
    {
        placa: 2300,
        senioritet: "senior",
        area: "backend",
        tech: "Django",
    }
];

// Prosjek placa:
let sum=0;
let brojac=0;
let prosjek=0;

for(let i=0; i<prosjekDeveloperskihPlaca.length; i++){
    sum+=prosjekDeveloperskihPlaca[i].placa;
    brojac++;
}
prosjek=sum/prosjekDeveloperskihPlaca.length;
console.log("Prosjek placa: ", prosjek);


// Medijan:
// sortiranje podataka
prosjekDeveloperskihPlaca.sort((a, b) => a.placa - b.placa);

// izracun medijana
let medijan;
let n = prosjekDeveloperskihPlaca.length;

if (n % 2 == 0) {
  medijan = (prosjekDeveloperskihPlaca[n/2 - 1].placa + prosjekDeveloperskihPlaca[n/2].placa) / 2;
} else {
  medijan = prosjekDeveloperskihPlaca[Math.floor(n/2)].placa;
}
console.log("Medijan: ", medijan);
*/

// -------------------------------------------------------------------------------------- //

//5. ISPISI

/*
let levels = {
    prvaRazina: {
        printMe: () => console.log("1"),
        drugaRazina: {
            printMe: () => console.log("2"),
            trecaRazina: {
                printMe: () => console.log("3"),
                cetvrtaRazina: {
                    printMe: () => console.log("4"),
                    petaRazina: {
                        printMe: () => console.log("5"),
                        sestaRazina: {
                            printMe: () => console.log("6"),
                            sedmaRazina: {
                                printMe: () => console.log("7"),
                                osmaRazina: {
                                    printMe: () => console.log("8"),
                                    devetaRazina: {
                                        printMe: () => console.log("9"),
                                        desetaRazina: {
                                            printMe: () => console.log("10"),
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
// Rjesenje:
console.log(levels.prvaRazina.printMe());
console.log(levels.prvaRazina.drugaRazina.printMe());
console.log(levels.prvaRazina.drugaRazina.trecaRazina.printMe());
console.log(levels.prvaRazina.drugaRazina.trecaRazina.cetvrtaRazina.printMe());
console.log(levels.prvaRazina.drugaRazina.trecaRazina.cetvrtaRazina.petaRazina.sestaRazina.printMe());
console.log(levels.prvaRazina.drugaRazina.trecaRazina.cetvrtaRazina.petaRazina.sestaRazina.sedmaRazina.printMe());
console.log(levels.prvaRazina.drugaRazina.trecaRazina.cetvrtaRazina.petaRazina.sestaRazina.sedmaRazina.osmaRazina.printMe());
*/
