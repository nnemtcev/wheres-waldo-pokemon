import moment from "moment";
import allPokemonImageUrl from "../every-pokemon-ever.png";
import mousePointer from "../game-logic/mousePointer";

function initializeGame() {
  const pokemonImageContainer = document.createElement("div");
  pokemonImageContainer.setAttribute("id", "pokemon-image-container");
  const allPokemonImage = document.createElement("img");
  allPokemonImage.src = allPokemonImageUrl;

  pokemonImageContainer.appendChild(allPokemonImage);
  document.body.appendChild(pokemonImageContainer);
  initalizeClock();
}

function initalizeClock() {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  const clockDisplay = document.getElementById("clock");

  setInterval(function () {
    seconds++;

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes === 60) {
      hours++;
      minutes = 0;
    }

    clockDisplay.innerText = `${moment()
      .hour(hours)
      .minutes(minutes)
      .seconds(seconds)
      .format("HH:mm:ss")}`;
  }, 1000);
}

function handleMouseMoveOnImage({ x, y }) {
  // Set positions of x and y coordinates for mouse pointer object
  mousePointer.setX(x);
  mousePointer.setY(y);

  const pokemonImageContainer = document.getElementById(
    "pokemon-image-container"
  );

  // Create the 'circle' hover effect

  let mouseHoverCircle;

  if (!document.getElementById("hover-circle")) {
    mouseHoverCircle = document.createElement("div");
    mouseHoverCircle.setAttribute("id", "hover-circle");
    pokemonImageContainer.appendChild(mouseHoverCircle);
  } else {
    mouseHoverCircle = document.getElementById("hover-circle");
  }

  mouseHoverCircle.style = `position: absolute; left: ${
    mousePointer.x - 37
  }px; top: ${
    mousePointer.y - 37
  }px; width: 80px; height: 80px; border-radius: 200px; background-color: rgba(255, 255, 255, 0.3); border: 2px dashed white;`;
}

function createMouseOverEffect() {
  const pokemonImageContainer = document.getElementById(
    "pokemon-image-container"
  );

  pokemonImageContainer.addEventListener("mousemove", handleMouseMoveOnImage);
}

export { initializeGame, createMouseOverEffect };
