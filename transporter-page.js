// Simulated transporter data (in a real app, this would be fetched from the backend).
const transporter = {
    name: "Jane Smith",
    email: "jane.smith@transport.com",
    role: "Transporter",
    mobile: "+1 234 567 890"
};

// Function to simulate transporter login and store data in localStorage
function loginTransporter() {
    localStorage.setItem("transporterName", transporter.name);
    localStorage.setItem("transporterEmail", transporter.email);
    localStorage.setItem("transporterRole", transporter.role);
    localStorage.setItem("transporterMobile", transporter.mobile);
}

// Simulate login
loginTransporter();

// Fetch and display transporter profile information
document.addEventListener('DOMContentLoaded', () => {
    const transporterProfileSection = document.getElementById('transporter-profile-info');
    
    const transporterName = localStorage.getItem("transporterName");
    const transporterEmail = localStorage.getItem("transporterEmail");
    const transporterRole = localStorage.getItem("transporterRole");
    const transporterMobile = localStorage.getItem("transporterMobile");

    if (transporterName && transporterEmail) {
        transporterProfileSection.innerHTML = `
            <p><strong>Name:</strong> ${transporterName}</p>
            <p><strong>Email:</strong> ${transporterEmail}</p>
            <p><strong>Role:</strong> ${transporterRole}</p>
            <p><strong>Mobile:</strong> ${transporterMobile}</p>
        `;
    } else {
        transporterProfileSection.innerHTML = "<p>Please log in to view your profile.</p>";
    }
});

// Clickable sidebar options functionality (you can replace with actual actions).
document.getElementById('manage-shipments').addEventListener('click', () => {
    alert("Manage Shipments clicked");
});

document.getElementById('manage-driver-vehicle').addEventListener('click', () => {
    alert("Manage Driver and Vehicle clicked");
});

document.getElementById('monitor-deliveries').addEventListener('click', () => {
    alert("Monitor Deliveries clicked");
});

document.getElementById('manage-profile').addEventListener('click', () => {
    alert("Manage Profile clicked");
});
