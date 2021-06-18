window.onload = function (){

}


//Oefening 1

async function GetLocation(){
    let url2test  = `https://fcc-weather-api.glitch.me/api/current?lat=51.022395850770074&lon=5.606785163618643}`;
    let objectData;
    let jStr;
    try {
        let response = await fetch( url2test, {
            method: "GET",
        });

        if (response.status === 200) {
            objectData = await response.json();
            jStr = JSON.stringify(objectData);
            console.log(jStr);
        } else {
            console.log(await response.text())
        }
    } catch (e) {
        console.log("Exception while connecting:");
        console.log(e);
    }

    document.getElementById('loc').innerText += " = "+objectData.name;
    document.getElementById('temp').innerText += " = "+objectData.main.temp;
    document.getElementById('humidity').innerText += " = "+objectData.main.humidity;
    document.getElementById('windspeed').innerText += " = "+objectData.wind.speed;
}

//Oefening 2
function BtnClick(){
    let lat = parseFloat(document.getElementById('lat').value);
    let long = parseFloat(document.getElementById('long').value);

    GetLocation(lat, long);
    async function GetLocation(lat, long){
        let url3test  = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        let objectData2;
        let jStr;
        try {
            let response = await fetch( url3test, {
                method: "GET",
            });

            if (response.status === 200) {
                objectData2 = await response.json();
                jStr = JSON.stringify(objectData2);
                console.log(jStr);
            } else {
                console.log(await response.text())
            }
        } catch (e) {
            console.log("Exception while connecting:");
            console.log(e);
        }

        let output = document.getElementById('output');
        output.innerHTML += `<h1><br>Locatie is ${objectData2.name}<br></h1>`;
        output.innerHTML += `<h1>Temperatuur is ${objectData2.main.temp}<br></h1>`;
        output.innerHTML += `<h1>Vochtigheidsgraad is ${objectData2.main.humidity}<br></h1>`;
        output.innerHTML += `<h1>Windsnelheid is ${objectData2.wind.speed}<br></h1>`;
        output.innerHTML += `<iframe src = "https://maps.google.com/maps?q=${lat},${long}&hl=es;z=14&amp;output=embed"></iframe>`;

    }
}