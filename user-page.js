// Simulated user data (this would be fetched from the backend in a real app).
import usersDatabase from "./module.js";

const user = {
    name: usersDatabase[0],
    email: "john.doe@example.com",
    role: "User",
    mobile: "+1 234 567 890"
};

// Function to simulate user login and store data in localStorage
function loginUser() {
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userRole", user.role);
    localStorage.setItem("userMobile", user.mobile);
}

// Simulate login
loginUser();

// Fetch and display user profile information
document.addEventListener('DOMContentLoaded', () => {
    const userProfileSection = document.getElementById('user-profile-info');
    
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    const userRole = localStorage.getItem("userRole");
    const userMobile = localStorage.getItem("userMobile");

    if (userName && userEmail) {
        userProfileSection.innerHTML = `
            <p><strong>Name:</strong> ${userName}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Role:</strong> ${userRole}</p>
            <p><strong>Mobile:</strong> ${userMobile}</p>
        `;
    } else {
        userProfileSection.innerHTML = "<p>Please log in to view your profile.</p>";
    }
});

// Clickable sidebar options functionality (you can replace with actual actions).
document.getElementById('initiate-shipment').addEventListener('click', () => {
    alert("Initiate Shipment clicked");
});

document.getElementById('payments').addEventListener('click', () => {
    alert("Payments clicked");
});

document.getElementById('notifications').addEventListener('click', () => {
    alert("Notifications clicked");
});

document.getElementById('track-shipments').addEventListener('click', () => {
    alert("Track Shipments clicked");
});

document.getElementById('manage-profile').addEventListener('click', () => {
    alert("Manage Profile clicked");
});
