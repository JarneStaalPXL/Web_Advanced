window.onload = function () {
    //oefening8();
    oefening9();
}

function oefening1() {
    let opleidingen = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding3'];
    console.log(opleidingen.length);
}

function oefening2() {
    let opleidingen = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding3'];
    opleidingen.push('bachelor multimedia', 'communicatie');
    console.log(opleidingen, opleidingen.length);
}

function oefening3a() {
    let opleidingen = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding4'];
    let tekst = '';
    for (let i = 0; i < opleidingen.length; i++) {
        tekst += opleidingen[i] + '\n';
    }
    document.getElementById('oefening3').innerText = tekst;
}

function oefening3b() {
    let pxlDigital = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding4'];
    let printdigital = pxlDigital.join(" \n ")
    document.getElementById('oefening3').innerText = printdigital;
}

function oefening4() {
    let honden = ['golden retriever', 'labrador', 'chihuaua', 'dobberman', 'golden retriever', 'labrador', 'chihuaua', 'dobberman', 'chihuaua', 'dobberman'];
    let vraag = parseInt(prompt('Geef een getal van 1 tot 10'));

    if (vraag <= 0 || vraag > 10) {
        alert('uw getal is niet geldig');
    } else {
        document.getElementById('oefening4').innerText = honden[vraag - 1];
    }

}

function oefening5() {
    let honden = ['golden retriever', 'labrador', 'chihuaua', 'dobberman', 'golden retriever', 'labrador', 'chihuaua', 'dobberman', 'chihuaua', 'dobberman'];
    honden.unshift('Afgan Hound', 'Akita', 'Alaskan Klee Kai', 'American Eskimo', 'American Foxhound');
    console.log(honden);
}

function oefening6() {
    let hondenrassen = ["Labrador Retriever", "Golden Retriever", "Berner Sennenhond", "Shiba", "Stabijhoun", "Wetterhoun", "Nederlands Kooikerhondje", "Hollandse Smoushond", "Hollandse Herdershond Ruwhaar", "Boxer"];
    hondenrassen.shift();
    hondenrassen.pop();
    console.log(hondenrassen);
}

function oefening7() {
    let fruits = ['banaan', 'orange', 'mango'];
    fruits.splice(2, 0, 'lemon', 'kiwi');
    document.getElementById('fruits').innerHTML = fruits.toString();
}


function oefening8() {
    let nu = new Date();
    let maand = nu.getMonth() + 1;
    let jaar = nu.getFullYear();
    let maandArr = [];

    function dagenInMaand(month, year) {
        return new Date(year, month, 0).getDate();
    }


    for (let i = 0; i < dagenInMaand(maand, jaar); i++) {
        let fullDatum = (i + 1) + ' / ' + maand + ' / ' + jaar;
        maandArr.push(fullDatum)
    }
    document.getElementById('oefening8').innerText = maandArr.join(" \n ")
}

function oefening9() {
    let currentday = new Date().getDay() // 1
    let nu = new Date();
    let maand = nu.getMonth() + 1;
    let jaar = nu.getFullYear();
    let maandArr = [];

    // Calculate the amount of days in a month
    function dagenInMaand(month, year) {
        return new Date(year, month, 0).getDate();
    }

    // Calculate which day it is
    function stringifyDay(dayIndex) { // 7
        let dagArr = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

        return dagArr[dayIndex % 7];
    }
    let firstOfMonth = new Date(jaar + '-' + maand + '-' + '1');
    let firstOfMonthDay = firstOfMonth.getDay(); // 1

    for (let i = 0; i < dagenInMaand(maand, jaar); i++) {
        let fullDatum = `${stringifyDay(firstOfMonthDay + i)},${(i + 1)}/${maand}/${jaar}`;
        maandArr.push(fullDatum)
    }
    document.getElementById('oefening9').innerText = maandArr.join(" \n ")
}