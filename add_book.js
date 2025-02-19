document.getElementById("add-book-btn").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Book added successfully!");
    // Add form submission logic here
});

document.getElementById("back-btn").addEventListener("click", function() {
    window.location.href = "index.html"; // Change this to the desired back page
});
