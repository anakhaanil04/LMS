document.getElementById("ok-btn").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Student details submitted successfully!");
    // Add form submission logic here
});

document.getElementById("back-btn").addEventListener("click", function() {
    window.location.href = "student_details.html"; // Change to your desired back page
});
