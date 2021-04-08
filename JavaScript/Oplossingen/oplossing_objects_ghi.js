window.onload = function () {
    Try();
}

function oefening1() {
    let persoon = {naam: 'Staal', voornaam: 'Jarne', email: 'jarne.staal@pxl.be'};
    console.log('De naam van de persoon is: ' + persoon.naam);
    console.log('De voornaam van de persoon is: ' + persoon.voornaam);

    // Met id's
    document.getElementById('naamtd').innerText = persoon.naam;
    document.getElementById('voornaamtd').innerText = persoon.voornaam;
    document.getElementById('emailtd').innerText = persoon.email;

    // Met classnames
    /*
    document.getElementsByClassName('data')[0].innerHTML = persoon.naam;
    document.getElementsByClassName('data')[1].innerHTML = persoon.voornaam;
    document.getElementsByClassName('data')[2].innerHTML = persoon.email;
    */
}

function oefening2() {
    let gegevens = {
        naam: 'Jarne',
        achternaam: "Staal",
        tel: "0483120249",
        gbdatum: "27/07/2001",
        zinvorm: function () {
            return `Mijn naam is ${this.naam}  ${this.achternaam} en ik ben geboren op  ${this.gbdatum}
                . Mijn telefoonnummer is ${this.tel} . Via deze gegevens kan je mij altijd contacteren!;`
        }
    };
    document.getElementById("pagina").innerText = gegevens.zinvorm();
}

function oefening3() {
    let gegevens = {
        naam: "Jarne",
        achternaam: "Staal",
        tel: "0483120249",
        gbdatum: "27/07/2001",
        oogkleur: "bruin"
    };

    gegevens.lengte = 180;
    gegevens.naam = 'Jarne';
    gegevens.gewicht = 75;

    let uitkomst = "";
    for (const element in gegevens) {
        uitkomst += gegevens[element] + " ";
    }
    console.log(uitkomst);
    document.getElementById("pagina").innerText = uitkomst;
}

function oefening4() {
    let gegevens = {
        naam: "Jarne",
        achternaam: "Staal",
        tel: "0483120249",
        gbdatum: "27/07/2001",
        oogkleur: "bruin",
        lengte: 180,
        gewicht: 75
    };

    delete gegevens.lengte;
    delete gegevens.gewicht;

    let gegevensKeysArray = Object.keys(gegevens); // Haalt alle keys op
    let gegevensValuesArray = Object.values(gegevens); // Haalt alle values op

    let gegevensKeyValuePairsArray = Object.entries(gegevens) // Haal alle key-value pairs op like: [key, value]

    for (const [key, value] of gegevensKeyValuePairsArray) {
        console.log(`${key}: ${value}`);
    }

}

function oefeningTest(){
    let obj = {
        test: "sefsf",
        test1: "drhr",
        test2: "segefsefh",
        straat: "qzdqzdqz",
        naa: "qdzzd",
        lala: 23,
        dida: 23,
    }

    let gegevensKeyValuePairs = Object.entries(obj);

    for (const [key, value] of gegevensKeyValuePairs){
        console.log(`${key}: ${value}`);
    }

}

function oefening5a() {
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Dorien', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];

    let klantenUitGenk = klanten
        .filter(klant => klant.stad === 'Genk')
        .map(klant => klant.voornaam.toUpperCase())

    console.log(klantenUitGenk);

    let dorien = klanten.find(klant => klant.voornaam === 'Dorien');
    let stadVanDorien = dorien.stad;

}

function oefening5b(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Dorien', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];

    klanten.forEach(klant => console.log(klant.naam.length));
}

function oefening5c(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Dorien', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];

    let antwerpenConcatinatie = 'Antwerpen';
    let antwerpenKlanten = klanten.map(klant => {
        klant.stad = antwerpenConcatinatie;
        antwerpenConcatinatie += '-Antwerpen';
        return klant;
    });
    console.log(antwerpenKlanten)
}

function oefening5d(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];
    let namen = '';

    for (let i = 0; i < klanten.length; i++) {
        if (klanten[i].voornaam.length % 2 === 0){
            console.log(namen + klanten[i].voornaam.toUpperCase());
        }else{
            console.log(namen + klanten[i].voornaam);
        }
        namen += klanten[i].voornaam;
    }

}

function oefening5e(){
    let klanten = [
        {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
        {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
        {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
        {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
        {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'}
    ];
    klanten.forEach(klant => {
        let par = document.createElement('h1');
        par.innerHTML = Object.values(klant);
        document.body.appendChild(par);
    });
}

















 function Try(){
    let namen = [
        {naam: 'Jarne', achternaam: 'Staal'},
        {naam: 'Caro', achternaam: 'Meyers'},
        {naam: 'Sara', achternaam: 'Sloeven'},
        {naam: 'Peter', achternaam: 'Loevens'},
        {naam: 'Bart', achternaam: 'Peters'}
    ];

    namen.forEach(name => {
        let par = document.createElement('h1');
        par.innerHTML = Object.values(name);
        document.body.appendChild(par);
    })
 }

















