// U35549532

document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackList = document.getElementById("feedbackList");

    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission action

        const name = document.getElementById("name").value.trim();
        const rating = document.getElementById("rating").value;
        const comments = document.getElementById("comments").value.trim();

        // Validate that all fields are filled out
        if (name === "" || rating === "" || comments === "") {
            alert("Please fill out all fields.");
            return;
        }