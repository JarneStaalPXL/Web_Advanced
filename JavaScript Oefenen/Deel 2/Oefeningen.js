window.onload = function(){
    Oef7();

    /*
    let tekst = ['een','twee','drie'];
    console.log(tekst)

    tekst = tekst.splice(2);
    console.log(tekst)
    */
}

function Oef1(){
    let zin1 = 'Dit is de eerste zin';
    let zin2 = 'Dit is de tweede zin';
    let zin3 ='Dit is de derde zin';

    console.log(zin1)
    console.log(zin2)
    console.log(zin3)

}


function Oef2(){
    let zin1 = ' Dit is de eerste zin';
    let zin2 = ' Dit is de tweede zin';
    let zin3 =' Dit is de derde zin';

    console.log(zin1+zin2+zin3)

}

function Oef3(){
    let textk = 'Ik wil een koekje';

    ShowResultPOS(textk, 0);
    ShowResultPOS(textk, 3);
    ShowResultCHAR(textk, 'k');
    ShowResultCHAR(textk, 'e');
    console.log('string lengte = '+textk.length);


    function ShowResultPOS(text,position){
        console.log(`Positie ${position} = ${text.charAt(position)}`)
    }

    function ShowResultCHAR(text, char){
        console.log(`${char} is found at position ${text.indexOf(char)}`)
    }
}

function Oef4(){
    let text = 'ik wil een koekje van pxl-catering';

    let final = text.replace('koekje','lasagne').toUpperCase()
    console.log(final)
    document.write(final);
}


function Oef5(){
    let woord = prompt('Geef het random woord in');
    alert('Het woord bestaat uit '+ woord.length+ ' karakters.')
}

function Oef6(){
    let answer = prompt('Geef een random zin in.');
    let positie = answer.indexOf(' ')
    positie += 1;
    alert('De eerste spatie van je zin staat op positie ' + positie);
}


function Oef7(){

    /*
    let geboortejaar = prompt('Geef uw geboortejaar');

    const d = new Date();
    let calculation =  d.getFullYear() - geboortejaar;
    console.log(calculation+' jaar oud')
    */




    let answer = prompt('')


}