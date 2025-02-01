alert("JavaScript is working!");
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const feedback = document.getElementById('feedback').value;

        if (feedback.trim() !== "") {
            document.getElementById('feedbackMessage').textContent = "Thank you for your feedback!";
        } else {
            document.getElementById('feedbackMessage').textContent = "Please enter some feedback before submitting.";
        }
        document.getElementById('feedback').value = "";
    });
});
