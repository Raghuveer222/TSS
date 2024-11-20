// Store registered users in a mock database (for simplicity, in memory)
const usersDatabase = [];

// export function some(){
//     return usersDatabase;
// }

// window.usersDatabase = usersDatabase;

// Tab functionality
function openTab(event, tabName) {
    const tablinks = document.querySelectorAll(".tablink");
    const tabcontents = document.querySelectorAll(".tab-content");
    
    tablinks.forEach((tablink) => tablink.classList.remove("active"));
    tabcontents.forEach((content) => (content.style.display = "none"));
    
    event.currentTarget.classList.add("active");
    document.getElementById(tabName).style.display = "block";
}

// Default tab to login
document.getElementById("login").style.display = "block";

// Signup form validation and user registration
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const role = document.getElementById("role-signup").value;
    
    // Validation: Check if all fields are filled
    if (!name || !email || !password || !role) {
        alert("All fields are required.");
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate password (minimum 6 characters, at least 1 number)
    if (password.length < 6 || !/\d/.test(password)) {
        alert("Password must be at least 6 characters long and include at least one number.");
        return;
    }
    
    // Check if the email already exists
    if (usersDatabase.some((user) => user.email === email)) {
        alert("This email is already registered.");
        return;
    }
    
    // Save user details in the mock database
    usersDatabase.push({ name, email, password, role });
    alert("Signup successful! You can now log in.");
    
    // Redirect to login tab
    openTab(event, 'login');
});

// Login form validation
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    
    // Validate user credentials
    const user = usersDatabase.find((user) => user.email === email && user.password === password && user.role === role);

    if (!user) {
        alert("Invalid login credentials. Please try again.");
        return;
    }
    
    // Redirect to the appropriate dashboard
    if (role === "user") {
        window.location.href = "user-dashboard.html";
    } else if (role === "transporter") {
        window.location.href = "transporter-dashboard.html";
    }
});

// console.log(loginCar
// export default {usersDatabase};