import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function JokeList () {
const jokes = jokeFacade.getJokes()
let listOfJokes = jokes.map(joke => "<li>" + joke + "</li>")
const listJokes = listOfJokes.join('')
document.getElementById("jokes").innerHTML = listJokes
}

const input = document.getElementById('findJoke');
input.addEventListener('input', event => {
  const findJoke = jokeFacade.getJokeById(input.value)
  document.getElementById("jokeOutput").innerHTML = findJoke
  console.log(input)
})

const jokeId = document.getElementById('btn_joke')
jokeId.addEventListener('click', event => {
  event.preventDefault();
  const addJokes = document.getElementById('addJoke')
  console.log(addJokes.value) //Testing if we get the value
  jokeFacade.addJoke(addJokes.value)
  JokeList();
})

/* JS For Exercise-2 below */
let getQ = document.getElementById('getQ')
getQ.addEventListener('click', event => {
  getQuote(event.target)
})

function getQuote(domElement) {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(function (response) {
    return response.json();
  })
  .then( function (data) {
    const quote = data.value;
    const textQ = document.getElementById('textQ').innerHTML = quote
    console.log(data.value)
  })
}



/* JS For Exercise-3 below */


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



