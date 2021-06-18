


async function LoveCalculation(){

    let fname = document.getElementById('boy').value;
    let sname = document.getElementById('girl').value;
    let url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`;
    try {
        let response = await fetch( url, {
            method: "GET",
            headers:  {
                "x-rapidapi-key": "b708bf4e38msh61224e33dafa692p110621jsn9d4292b5ae41",
                "x-rapidapi-host": "love-calculator.p.rapidapi.com"
            }
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
}
