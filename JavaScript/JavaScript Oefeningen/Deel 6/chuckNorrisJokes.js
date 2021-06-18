let url = "https://api.chucknorris.io/jokes/random";
let countClicks = 0;


async function GetJoke() {
    try {
        let response = await fetch( url, {
            method: "GET",
        });


        if (countClicks === 5)
            alert('maximum jokes reached')
        else {
            if (response.status === 200) {
                countClicks++;

                console.log(countClicks);
                objectData = await response.json();
                jStr = JSON.stringify(objectData);
                document.getElementById('joke').innerHTML = objectData.value;
            } else {
                console.log(await response.text())
            }
        }

    } catch (e) {
        console.log("Exception while connecting:");
        console.log(e);
    }
}
