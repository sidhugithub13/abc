// Get the dynamic tile element
const dynamicTile = document.getElementById('dynamicTile');

// Listen for the scroll event
window.addEventListener('scroll', function () {
    // Check if the user has scrolled down by 200px
    if (window.scrollY > 200) {
        // Move the tile up into view
        dynamicTile.style.bottom = '20px';
    } else {
        // Keep the tile below the screen if the user is at the top
        dynamicTile.style.bottom = '-100px';
    }
});

// Set up the ECG graph to be dynamic (simulated ECG pattern)

const canvas = document.getElementById('ecg-graph');
const ctx = canvas.getContext('2d');

// Initial configuration
const width = canvas.width = 600;
const height = canvas.height = 120;
const lineWidth = 2;
let x = 0; // Start x position
let y = height / 2; // Start y position (center of the canvas)

// Simulated ECG values for demonstration
const ecgPattern = [
    -20, 30, 50, 60, 50, 30, 0, -30, -50, -60, -50, -30, 0, 30, 50, 60, 50, 30
];

// Function to draw the ECG graph
function drawECG() {
    ctx.clearRect(0, 0, width, height); // Clear the canvas
    ctx.beginPath();
    ctx.moveTo(x, y);

    // Generate the ECG wave
    for (let i = 0; i < ecgPattern.length; i++) {
        const point = ecgPattern[i];
        const ecgX = (x + i) % width; // Keep it within the canvas width
        const ecgY = height / 2 + point; // Adjust the y position based on the pattern
        ctx.lineTo(ecgX, ecgY);
    }

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = 'red'; // Red ECG line
    ctx.stroke();

    x += 1; // Move the x position for the next frame
    if (x > width) {
        x = 0; // Reset the x position when it goes off-screen
    }

    requestAnimationFrame(drawECG); // Call the function again to animate
}

// Start the ECG animation
drawECG();
