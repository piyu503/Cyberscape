
// Get canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game variables
const blockSize = 60;
const blocksX = canvas.width / blockSize;
const blocksY = canvas.height / blockSize;

let player = { x: 1, y: 1 };
let towers = [];
let keysOnMap = [];
let base = { x: blocksX - 2, y: blocksY - 2 };

let playerHealth = 100;
let systemHealth = 50;
let keys = 0;
let shards = 0;
let highScore = 0;

let paused = false;

// For handling keyboard input
let keysPressed = {};
document.addEventListener("keydown", (e) => {
    keysPressed[e.key] = true;
});
document.addEventListener("keyup", (e) => {
    keysPressed[e.key] = false;
});

// Start the game
initGame();
gameLoop();

// Initialize or reset game state
function initGame() {
    player = { x: 1, y: 1 };
    towers = [];
    keysOnMap = [];
    base = { x: blocksX - 2, y: blocksY - 2 };
    playerHealth = 100;
    systemHealth = 50;
    keys = 0;
    shards = 0;

    // Place towers randomly
    for (let i = 0; i < 10; i++) {
        let towerX = Math.floor(Math.random() * blocksX);
        let towerY = Math.floor(Math.random() * blocksY);
        let angle = Math.random() * Math.PI * 2;
        towers.push({ x: towerX, y: towerY, angle: angle });
    }

    // Place keys randomly
    for (let i = 0; i < 8; i++) {
        let keyX = Math.floor(Math.random() * blocksX);
        let keyY = Math.floor(Math.random() * blocksY);
        keysOnMap.push({ x: keyX, y: keyY });
    }
}

// (the rest of game.js same as above - truncated for fitting)
