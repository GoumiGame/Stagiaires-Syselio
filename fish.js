
let score = 0; // Initialize the score

// Get references to the HTML elements
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');

// Add an event listener to the link
clickButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link action
    score++; // Increment the score
    scoreDisplay.textContent = score; // Update the displayed score

    // Choose the correct URL based on the score
    let url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    if (score === 100) {
        url = 'https://www.youtube.com/watch?v=jIQ6UV2onyI';
    }
    if (score === 999) {
        url = 'fish_999.png';
    }
    if (score === 1000) {
        url = 'fish_1000.png';
    }
    if (score > 1000) {
        url = 'fish_1001.png';
    }

    if (score === 1000000) {
        url = 'fish_1M.png';
    }
    if (score >= 1000000) {
        score = 0
    }

    // Open the URL
    window.open(url, '_blank');
});