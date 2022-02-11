const url = "https://v2.jokeapi.dev/joke/Programming";
// "https://api.humorapi.com/jokes/random?api-key=1dab351ea3274b8f9c272fb06f37fe1c";
const refresh = document.querySelector(".refresh");
const page = document.querySelector(".page");
const wrap = document.querySelector(".wrap");
const audio = document.querySelector("audio");

window.onload = function () {
  getData();
  changeColors();
}
refresh.addEventListener("click", getData);
refresh.addEventListener("click", changeColors);
refresh.addEventListener("click", playAudio);

async function getData() {

  const res = await fetch(url);
  const randomJoke = await res.json();  
  const joke = document.querySelector(".joke");
  const setup = document.querySelector(".setup");
  const delivery = document.querySelector(".delivery");

  if (randomJoke.type == "single") {
    joke.textContent = `${randomJoke.joke}`;
  } else {
    setup.textContent = `${randomJoke.setup}`;
    delivery.textContent = `${randomJoke.delivery}`;
  }

}

function changeColors() {

  let value1 = Math.floor(Math.random() * 255);
  let value2 = Math.floor(Math.random() * 255);
  let value3 = Math.floor(Math.random() * 255);

  if (value1 > 199 || value2 > 199 || value3 > 199) {
    wrap.style.color = `rgb(0, 0, 0)`;
  } else {
    wrap.style.color = `rgb(255, 255, 255)`;
  }
  
  let bgColor = `rgb(${value1}, ${value2}, ${value3})`;
  page.style.backgroundColor = bgColor; 
  
}

function playAudio() {
  audio.play();
}
