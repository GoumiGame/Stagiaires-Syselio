const bunnyPath = document.getElementById('backgroundImage');
let bunnyImage = document.querySelector('#bunnyImg');
const bunny = document.getElementById('bunny');

const bunnyWidth = bunny.getBoundingClientRect().width;
const bunnyHeight = bunny.getBoundingClientRect().height;

let direction = 1;
let side = 0;
let x = 0;
let y = 0;

bunny.style.bottom = `${y}px`;
bunny.style.left = `${x}px`;

function walk() {
    const bunnyPathWidth = bunnyPath.getBoundingClientRect().width;
    const bunnyPathHeight = bunnyPath.getBoundingClientRect().height;

    switch(side) {
        case 0:
            x += 10;
            if ((x + bunnyWidth) >= bunnyPathWidth) {
                x = bunnyPathWidth - bunnyWidth;
                side = 1;
                bunnyImage.style.transform = 'rotate(-90deg)';
            }
            break;
        case 1:
            y += 10;
            if ((y + bunnyHeight) >= bunnyPathHeight) {
                y = bunnyPathHeight - bunnyHeight;
                side = 2;
                bunnyImage.style.transform = 'rotate(180deg)';
            }
            break;
        case 2:
            x -= 10;
            if (x <= 0) {
                x = 0;
                side = 3;
                bunnyImage.style.transform = 'rotate(90deg)';
            }
            break;
        case 3:
            y -= 10;
            if (y <= 0) {
                y = 0;
                side = 0;
                bunnyImage.style.transform = 'rotate(0deg)';
            }
            break;
    }

    bunny.style.left = `${x}px`;
    bunny.style.bottom = `${y}px`;
}

setInterval(() => walk(), 50);

const chill = document.getElementById('chill');

bunny.addEventListener('click', (event) => {
    chill.style.opacity = 1;
})
