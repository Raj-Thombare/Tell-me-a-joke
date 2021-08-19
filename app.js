const askJoke = document.querySelector("#ask-joke")
const btnGetJoke = document.querySelector("#btn-get-joke")
const showJoke = document.querySelector("#show-joke")

btnGetJoke.addEventListener('click', getJokeHandler)

function errorHandler(){
    showJoke.innerText = 'Something wrong with the server! please try again later';
}

function getJokeHandler(e){
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(Response => Response.json())
    .then(data => {
        var getSetup = data[0].setup;
        var getPunchline = data[0].punchline;
        askJoke.innerText = getSetup;
        showJoke.innerText = getPunchline;
    })
    .catch(errorHandler)
}


