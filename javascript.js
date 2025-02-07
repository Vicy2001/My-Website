// Toggle between Dark and Light Mode
document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

// Change "Hello" to "Thank you..."
function myFunction() {
    document.getElementById("Hello").innerHTML = "Thank you for visiting my Page!";
}

// Alert when visiting
// window.alert("Welcome! :)");

// Example of JavaScript variables usage
let a = 2 + 1;

var firstName = "profileFirstName";
var lastName = "profileLastName";

let fullName = firstName + " " + lastName;
document.getElementById("name").innerHTML = fullName;

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if(name && email) {
        document.getElementById('formMessage').innerText = `Thank you, ${name}! We will contact you at ${email}.`;
    } else {
        document.getElementById('formMessage').innerText = 'Please fill out both fields.';
    }
});