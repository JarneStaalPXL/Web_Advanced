
//Use these in Dev Tools Console

//Oefening 1
document.getElementsByClassName('randomtekst');
document.getElementsByTagName('img');
document.querySelectorAll('p.specialetekst');
document.getElementsByTagName('p')[4];
document.querySelectorAll('p.randomtekst')[1];


//Oefening 2
document.body.style.fontFamily = 'Arial, Verdana, sans-serif';
document.getElementsByTagName('h1')[0].style =
    'color: darkgreen;' +
    'text-decoration: underline;';
document.getElementsByTagName('p')[0].style =
    'font-style: italic;' +
    'font-weight: bold;';


//Oefening 3
document.getElementById('red').style.color = 'red';

document.getElementById('weg').remove();
let hoofdDing = document.createElement('h1');
hoofdDing.innerText = 'Welkom Pandix';
document.getElementById('header').appendChild(hoofdDing)

let aside = document.createElement('aside');
aside.innerText = 'Elfde-liniestraat 11';
document.getElementById('main').appendChild(aside);


//Oefening 4
let welkomH1 = document.createElement('h1');
welkomH1.innerText = 'Welkom PandiX';
document.getElementById('header').appendChild(welkomH1);

let adresgegevens = document.createElement('aside')
adresgegevens.innerHTML =
    '<p>PXL</p>'+
    '<p>Elfde liniestraat 24</p>'+
    '<p>lol</p>';
document.getElementById('main').appendChild(adresgegevens);














