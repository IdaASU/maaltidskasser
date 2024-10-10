// Define prices per person per day
const prices = {
    1: 749,
    2: 1429,
    3: 2099,
    4: 2699
};

// Variables to hold selected persons and days
let selectedPersons = 0;  // Start med 0 for at indikere, at intet er valgt endnu
let selectedDays = 0;     // Start med 0 for at indikere, at intet er valgt endnu

// Function to update the total price
function updateTotal() {
    // Check if both persons and days are selected
    if (selectedPersons > 0 && selectedDays > 0) {
        const total = prices[selectedPersons] * selectedDays;
        document.getElementById("iAlt").value = total;  // Show the calculated total
    } else {
        document.getElementById("iAlt").value = '';  // Show an empty value if either is not selected
    }
}

// Function to handle person and day selection
function increaseQuantity(type, value) {
    if (type === 'personer') {
        selectedPersons = value; // Set the selected persons
    } else if (type === 'dage') {
        selectedDays = value; // Set the selected days
    }
    updateTotal(); // Update the total price
}

// Initial price update on page load
window.onload = updateTotal;


// Reset function to clear the selections and total
function resetSelections() {
    // Reset both selectedPersons and selectedDays to 0
    selectedPersons = 0;
    selectedDays = 0;
    
    // Update the total price (which will now be blank)
    updateTotal();}