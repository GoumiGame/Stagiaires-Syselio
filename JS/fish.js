
let score = 0; // Initialize the score

// Get references to the HTML elements
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const clickButton5 = document.getElementById('cat-image');

// Add an event listener to the link
clickButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link action
    score++; // Increment the score
    localStorage.setItem("count", score);
    scoreDisplay.textContent = score; // Update the displayed score
    manageScore("cat");
});

clickButton5.addEventListener('click', (event) => {
    score += 5;
    console.log("Score: ", score)
    localStorage.setItem("count", score);
    scoreDisplay.textContent = score;
    manageScore("tac");
})

document.addEventListener("DOMContentLoaded", (event) => {
    score = parseInt(localStorage.getItem("count"));
    console.log(score)
    if (score == null || isNaN(score)) {
        score = 0;
        scoreDisplay.textContent = score;
    }
    else {
        scoreDisplay.textContent = score;
    }
});

let speed = 25

function manageScore(chat) {
    
    speed += -5;
    if (speed <= 0) {
        speed = 5;
    }

    let url = "";

    if (chat == "cat" && score < 100) {
        return;
    }
    if (chat == "tac" && score < 100) {
        url = 'https://www.youtube.com/watch?v=OpTmyUFeh_0';
        window.open(url, '_blank')
    }
    if (score >= 100 && score < 999) {
        url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
    if (score == 999) {
        url = './IMAGES/fish_999.png';
    }
    if (score == 1000) {
        url = './IMAGES/fish_1000.png';
    }
    if (score > 1000) {
        url = './IMAGES/fish_1001.png';
    }
    if (score >= 1000000) {
        url = './IMAGES/fish_1M.png';
        score = 0
    }
    window.open(url, '_blank');
}

var myImage = document.querySelector('#cat-image');

const container = document.getElementById('catPath');
const cat = document.getElementById('cat');
let direction = +1;
const size = cat.getBoundingClientRect().width;

function walk(){
    
    const width = catPath.getBoundingClientRect().width;
	let x = parseInt(cat.style.left == '' ? 0 : cat.style.left.slice(0, -2)) + (direction * 10);
	cat.style.left = `${x}px`;

	if (x == 0) { 
        direction = 1; myImage.style.transform = 'rotateY(0deg)';
    }
	else if ((x + size) >= width) { 
        direction = -1; myImage.style.transform = 'rotateY(180deg)';
    }
    
}

setInterval(() => walk(), speed);