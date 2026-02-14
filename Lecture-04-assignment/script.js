// --- 1. Variables & State ---
let clickCount = 0; // State variable (Requirement: 2 variables)
const greeting = "Hello! Portfolio script is active.";

console.log(greeting); // Console Message #1

// --- 2. Functions ---

// Feature A: Theme Toggle
function setTheme() {
    // Note: No dot before "dark-mode" here!
    document.body.classList.toggle("dark-mode");
    console.log("Theme toggled successfully!"); // Console Message #2
}

// Feature B: Click Counter
function handleCounter() {
    clickCount++; // Update state
    console.log("Current clicks: " + clickCount); // Console Message #3
    alert("You have clicked the button " + clickCount + " times!");
}