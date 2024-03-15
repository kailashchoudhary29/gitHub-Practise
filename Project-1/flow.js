// Function to generate a random hexadecimal color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the text color of all paragraphs to a random color
function changeTextColor() {
    var paragraphs = document.querySelectorAll("p");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = getRandomColor();
    }
}

// Example usage: Call the changeTextColor function to change the text color of paragraphs
changeTextColor();
