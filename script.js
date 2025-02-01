// script.js
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the feedback text
    const feedback = document.getElementById('feedback').value;

    // Display a confirmation message
    if (feedback.trim() !== "") {
        document.getElementById('feedbackMessage').textContent = "Thank you for your feedback!";
    } else {
        document.getElementById('feedbackMessage').textContent = "Please enter some feedback before submitting.";
    }

    // Clear the textarea
    document.getElementById('feedback').value = "";
});
