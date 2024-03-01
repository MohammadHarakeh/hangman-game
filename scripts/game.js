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

letterElements.forEach((letterElements) => {
  letterElements.addEventListener("click", function () {
    const clickedLetter = this.textContent.toLowerCase();

    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i].toLowerCase() === clickedLetter) {
        letterElements.style.pointerEvents = "none";
        letterElements.style.opacity = "0.5";
        letterElements.style.cursor = "not-allowed";
        correctGuesses++;

        currentDisplay[i] = clickedLetter;
        if (i == 0) {
          currentDisplay[i] = randomWord[i].toUpperCase();
        } else {
          currentDisplay[i] = randomWord[i].toLowerCase();
        }
        letterFound = true;
      }
    }

    if (!letterFound) {
      incorrectGuesses++;
      letterElements.style.pointerEvents = "none";
      letterElements.style.opacity = "0.5";
      letterElements.style.cursor = "not-allowed";
      updateHangman();
    }
    if (incorrectGuesses === 6) {
      location.href = location.href;
      alert("Game Over! Try Again.");
    }

    if (letterFound) {
      updateDisplay();
    }
    if (correctGuesses == randomWord.length) {
      setTimeout(function () {
        alert("Congragulations! You Won!");
        location.href = location.href;
      }),
        200;
    }
    letterFound = false;
  });
});

console.log(randomWord);

updateDisplay();
