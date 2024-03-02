const randomWords = [
  "Banana",
  "Elephant",
  "Sunshine",
  "Laptop",
  "Mountain",
  "Symphony",
  "Bicycle",
  "Chocolate",
  "Universe",
  "Adventure",
  "Whistle",
  "Rainbow",
  "Puzzle",
  "Galaxy",
  "Harmony",
  "Lemonade",
  "Midnight",
  "Avalanche",
  "Telescope",
  "Dragon",
  "Marathon",
  "Umbrella",
  "Whisper",
  "Kaleidoscope",
  "Bubblegum",
  "Firefly",
  "Journey",
  "Ocean",
  "Quasar",
  "Velocity",
  "Enigma",
  "Wonderland",
  "Eclipse",
  "Mysterious",
  "Symphony",
  "Enchanted",
  "Serendipity",
  "Lighthouse",
  "Vibrant",
  "Whispering",
  "Radiance",
  "Cascade",
  "Harmony",
  "Twilight",
  "Zephyr",
  "Oasis",
  "Sizzling",
  "Melody",
  "Serenity",
  "Butterfly",
  "Velvet",
  "Ethereal",
  "Starlight",
  "Mirage",
  "Tranquil",
  "Enchanting",
  "Solitude",
  "Breathtaking",
  "Jubilee",
  "Zenith",
  "Pinnacle",
  "Symphony",
  "Quicksilver",
  "Majestic",
  "Perennial",
  "Ephemeral",
  "Cascade",
  "Breathless",
  "Infinity",
  "Whisper",
  "Lullaby",
  "Panorama",
  "Wonderland",
  "Radiant",
  "Jubilant",
  "Twilight",
  "Resplendent",
  "Celestial",
  "Odyssey",
  "Stellar",
  "Serenity",
  "Echo",
  "Luminous",
  "Blissful",
  "Enigma",
  "Utopia",
  "Symphony",
  "Horizon",
  "Ethereal",
  "Synchronicity",
  "Kaleidoscope",
  "Nebula",
  "Whispering",
  "Elysium",
  "Velocity",
  "Serendipity",
  "Melody",
  "Zephyr",
  "Cascade",
  "Aria",
];

const wordDisplay = document.getElementById("answer-section");
const letters = document.getElementById("letter");
const letterElements = document.querySelectorAll(".letter");

const randomWord = getRandomWord();
let currentDisplay = Array(randomWord.length).fill("_");
let hiddenWord = "";
let letterFound = false;
let incorrectGuesses = 0;
let correctGuesses = 0;
let guessedLetters = [];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * randomWords.length);
  return randomWords[randomIndex];
}

function updateDisplay() {
  wordDisplay.textContent = currentDisplay.join(" ");
}

function updateHangman() {
  switch (incorrectGuesses) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftHand();
      break;
    case 4:
      rightHand();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
}

letterElements.forEach((letterElement) => {
  letterElement.addEventListener("click", function () {
    const clickedLetter = this.textContent.toLowerCase();
    keyboardClick(clickedLetter);
  });
});

document.addEventListener("keypress", (event) => {
  const key = event.key.toUpperCase();
  if (/^[a-zA-Z]$/.test(key)) {
    const clickedLetter = key.toLowerCase();
    keyboardClick(clickedLetter);
  }
});

function keyboardClick(clickedLetter) {
  if (guessedLetters.includes(clickedLetter)) {
    return;
  }

  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i].toLowerCase() === clickedLetter) {
      letterElements.forEach((element) => {
        if (element.textContent.toLowerCase() === clickedLetter) {
          element.style.pointerEvents = "none";
          element.style.opacity = "0.5";
          element.style.cursor = "not-allowed";
          element.style.backgroundColor = "green";
        }
      });

      correctGuesses++;
      if (i == 0) {
        currentDisplay[i] = randomWord[i].toUpperCase();
      } else {
        currentDisplay[i] = randomWord[i].toLowerCase();
      }
      letterFound = true;
    }
  }

  if (!letterFound) {
    letterElements.forEach((element) => {
      if (element.textContent.toLowerCase() === clickedLetter) {
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5";
        element.style.cursor = "not-allowed";
        element.style.backgroundColor = "red";
      }
    });

    incorrectGuesses++;
    updateHangman();
  }

  if (incorrectGuesses === 6) {
    setTimeout(function () {
      alert("Game Over! You Lost!");
      location.href = location.href;
    }, 200);
  }

  if (letterFound) {
    updateDisplay();
  }

  if (correctGuesses == randomWord.length) {
    setTimeout(function () {
      alert("Congratulations! You Won!");
      location.href = location.href;
    }, 200);
  }

  guessedLetters.push(clickedLetter);
  letterFound = false;
}

console.log(randomWord);
updateDisplay();
