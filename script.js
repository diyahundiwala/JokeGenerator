console.log("Welcome to the Lobster Club Improv Comedy Show!");
const btn = null;
console.log("Button?: ", btn);

async function getJoke() {
    const options = {
        method: 'GET',
        headers: {
            "Accept" : "application/json"
        }
    }
    try {
        const response = await fetch('https://icanhazdadjoke.com/', options)
        const responseAsJson = await response.json()
        console.log(response.json())
        document.getElementById("jokeDisplay").innerHTML = responseAsJson.joke
    }
    catch (error) {
        console.err(error)
    }
}

document.addEventListener('click', event => {
    getJoke();
})