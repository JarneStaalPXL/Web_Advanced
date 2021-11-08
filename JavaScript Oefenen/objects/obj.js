window.onload = function (){
    oef7();
}

let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Dorien', naam: 'Verhoeven', stad: 'Oudsbergen'}
];


function oef1(){
    let klantenVoorNaamContainsA = klanten.filter(klant => klant.voornaam.toLowerCase().includes('a'))
        .map(klant => klant.voornaam.toUpperCase());
    console.log(klantenVoorNaamContainsA);
    krijgStad('Jasper');
}

function krijgStad(klantVoornaam){
    let nameOfKlant = klantVoornaam;
    klantVoornaam = klanten.find(klant => klant.voornaam === klantVoornaam);
    console.log(`De stad van ${nameOfKlant} is`,klantVoornaam.stad);
}

function oef2(){
    let lengthOfNames = klanten.filter(klant => klant.naam).map(klant => klant.naam.length);
    console.log(lengthOfNames)
}

function oef3(){
    let antwerpenConcatinatie = 'Antwerpen';
    let antwerpenKlanten = klanten.map(klant => {
        klant.stad = antwerpenConcatinatie;
        antwerpenConcatinatie += '-Antwerpen';
        return klant;
    });

    console.log(antwerpenKlanten)
}

function oef5(){
    for (let i = 0; i < klanten.length; i++) {
        let paragraph = document.createElement('p');
        let obj =  Object.values(klanten[i]);
        
        paragraph.innerText = obj;
        document.body.appendChild(paragraph);
    }

}

function oef6(){
    let boekenlijstElement = document.createElement('h1');
    boekenlijstElement.innerText = 'Boekenlijst';


    let boekenlijst = [
        {
            titel : 'The theory of everything',
            auteur :'Stephen Hawking',
            gelezen : 'Ja'
        },
        {
            titel : '12 rules for life',
            auteur :'Jordan Peterson',
            gelezen : 'Nee'
        },
    ]

    //creating UL

    document.body.appendChild(boekenlijstElement);

    //Adding to DOM



    for (let i = 0; i < boekenlijst.length; i++) {
        let unorderedlist = document.createElement('UL');
        document.body.appendChild(unorderedlist);

        let titel = document.createElement('h3');
        titel.innerText=`${boekenlijst[i].titel}`

        let auteur = document.createElement('li');
        auteur.innerText=`${boekenlijst[i].auteur}`

        let gelezen = document.createElement('li');
        gelezen.innerText=`${boekenlijst[i].gelezen}`;



        unorderedlist.appendChild(titel);
        unorderedlist.appendChild(auteur);
        unorderedlist.appendChild(gelezen);
    }
}


function oef7(){
    document.getElementById('btnsend').addEventListener('click', function (){
        let value =  document.getElementById('inputvalue').value;
        let p = document.createElement('p');
        p.innerText = value ;
        p.className = 'paragraph';


        let para = document.querySelector('.paragraph');
        if (para){
            para.innerText = value;
        }
        else {
            document.body.appendChild(p)
        }

})
}