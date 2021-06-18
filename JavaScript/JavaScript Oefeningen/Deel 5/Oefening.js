window.onload = function () {
    oefening5();
}

//Oefening 1
function oefening1(){
    document.getElementById('BtnClick').addEventListener('click', tonenClick);
    function tonenClick() {
        document.getElementById('paragraph').innerText =
            document.getElementById('input').value;
    }
}

//Oefening 2
function oefening2(){
    document.getElementById('BtnClick').addEventListener('click', tonenClick2);
    function tonenClick2() {
        let text = document.getElementById('input').value;
        let paragraph = document.createElement('p');
        paragraph.innerText = text;
        document.body.appendChild(paragraph);
        document.createElement('p').innerText = document.getElementById('input').value;
    }
}

//Oefening 3
let fullText = '';
function oefening3(){
    document.getElementById('oef3knop').addEventListener('click', toevoegen);
    document.getElementById('oef3wisknop').addEventListener('click', wissen);
    const oef3resultaat = document.getElementById('oef3resultaat');
    function toevoegen(){
        let input = document.getElementById('input').value;
        let span = document.createElement('span');
        span.style.color = 'red;'
        span.innerText = input;

        oef3resultaat.innerText = fullText;
        oef3resultaat.appendChild(span);
        fullText += input;
    }
    function wissen(){
        oef3resultaat.innerText = "";
    }
}

//Oefening 4
function oefening4(){
    document.getElementById('kleiner').addEventListener('click', kleiner)
    document.getElementById('groter').addEventListener('click', groter)

    function kleiner(){
        document.getElementById('oef4titel').style.fontSize = '22px';
        let paragraphs = document.getElementsByTagName('p');
        for (let i = 0; i < paragraphs.length;i++){
            paragraphs[i].style.fontSize = '14px';
        }
    }

    function groter(){
        document.getElementById('oef4titel').style.fontSize = '44pxpx';
        let paragraphs = document.getElementsByTagName('p');
        for (let i = 0; i < paragraphs.length;i++){
            paragraphs[i].style.fontSize = '28px';
        }
    }
}

//Oefening 5
const leukeSpreuken= ['eerste','tweede','derde','vierde','vijfde']
function oefening5(){
    const table = document.getElementById('oef5table');
    const tdList = table.getElementsByTagName('td');
    for (let i = 0; i < tdList.length; i++){
        tdList[i].addEventListener('click', function () {
            tdList[i].innerText = leukeSpreuken[i];
        })
    }
}

//Oefening 6
// ZIE WPL2 Winkelmandje


