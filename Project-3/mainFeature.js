// Function to toggle the visibility of the feature content
function toggleFeature() {
    var featureContent = document.getElementById("featureContent");
    if (featureContent.style.display === "none") {
        featureContent.style.display = "block";
    } else {
        featureContent.style.display = "none";
    }
}

// Example usage: Toggle feature visibility when the button is clicked
var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleFeature);
