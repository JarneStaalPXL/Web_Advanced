window.onload = function(){
    Oef4();
}

function Oef2(){
    alert('Welkom');
}

function Oef3(){
    let number = 0;
    do {
        number = prompt('Geef een random getal tussen 1 en 5');
    }while (number < 1 || number > 5)

    console.log(number);
}

function Oef4(){
     let text = prompt('Submit random text');
     document.write(text);
}
