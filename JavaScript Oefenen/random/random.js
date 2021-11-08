const d = new Date();

let lol = 'namiddag';
if (d.getHours() <= 12){
    lol = 'voormiddag';
}

console.log(lol+'  ' +d.getHours()+':'+d.getMinutes());
console.log(d.getMonth()+1)

switch (d.getMonth()+1) {
    case 0:
        console.log('januari');
        break;
    case 1:
        console.log('februari');
        break;
    case 2:
        console.log('maart');
        break;
    case 3:
        console.log('april');
        break;
    case 5:
        console.log('mei');
        break;
    case 6:
        console.log('juni');
        break;
    case 7:
        console.log('juli');
        break;
    case 8:
        console.log('augustus');
        break;
    case 9:
        console.log('september');
        break;
    case 10:
        console.log('oktober');
        break;
    case 11:
        console.log('november');
        break;
    case 12:
        console.log('december');
        break;
}


let zin = prompt('Geef een random zin');
let getal = prompt('Geef een random getal in');

//zinSplitsen(zin,getal)
zinSplitsVerwijderen(zin, getal)

function zinSplitsen(sentence, number){
    let firstPart = sentence.substring(0,number)
    let secondPart = sentence.substring(number, sentence.length);
    console.log(' ')
    console.log(firstPart)
    console.log(secondPart)
}

function zinSplitsVerwijderen(sentence, number){
    let char = sentence.charAt(number);


    let firstPart = sentence.substring(0,number).replace(char,'%')
    let secondPart = sentence.substring(number, sentence.length);

    console.log(' ')
    console.log(firstPart)
    console.log(secondPart)
}




