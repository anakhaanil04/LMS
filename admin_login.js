document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login Successful!");
    }
});
