let answer = parseFloat(prompt('Geef een getal in'));
let answer2 = parseFloat(prompt('Geef nog een getal in'));

document.getElementById('maal').innerHTML = 'De uitkomst van de vermeningvuldiging is: '+(answer*answer2);
document.getElementById('delen').innerHTML = 'De uitkomst van de deling is: '+(answer/answer2);
document.getElementById('plus').innerHTML = 'De uitkomst van de optelling is: '+(answer+answer2);
document.getElementById('min').innerHTML = 'De uitkomst van de aftrekking is: '+(answer-answer2);
