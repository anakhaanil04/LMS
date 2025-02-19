document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let otp = document.getElementById("otp").value;
    let newPassword = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Password successfully changed!");
});

function goBack() {
    window.history.back();
}
