// Get the penguin element
const penguin = document.getElementById('penguin');

// Function to generate random position within the screen
function getRandomPosition() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const randomX = Math.random() * (containerWidth - penguin.clientWidth);
    const randomY = Math.random() * (containerHeight - penguin.clientHeight);

    return { x: randomX, y: randomY };
}

// Function to move the penguin to a random position
function movePenguin() {
    const { x, y } = getRandomPosition();
    penguin.style.left = `${x}px`;
    penguin.style.top = `${y}px`;
}

// Function to handle click event
function handleClick() {
    penguin.style.opacity = 0; // Hide penguin
    setTimeout(() => {
        penguin.style.opacity = 1; // Show penguin after 1 second
        movePenguin(); // Move to a new position
    }, 1000); // 1 second delay
}

// Attach click event listener to penguin
penguin.addEventListener('click', handleClick);

// Move the penguin at random intervals
setInterval(movePenguin, 2000); // Moves every 2 seconds