// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get the button and color code elements
const colorBtn = document.getElementById('colorBtn');
const colorCode = document.getElementById('colorCode');
const body = document.body;

// Add event listener to the button
colorBtn.addEventListener('click', function() {
    // Generate random color
    const randomColor = getRandomColor();
    
    // Change the background color
    body.style.backgroundColor = randomColor;
    
    // Update the color code display
    colorCode.textContent = randomColor;
});

// Optional: Generate random color on page load
window.addEventListener('load', function() {
    const initialColor = getRandomColor();
    body.style.backgroundColor = initialColor;
    colorCode.textContent = initialColor;
});
