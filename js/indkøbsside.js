"use strict"; 
// Priser per person per dag
const prices = {
    1: 749,
    2: 1429,
    3: 2099,
    4: 2699
};

// Variabler til at gemme valgte personer og dage
let selectedPersons = 0;
let selectedDays = 0;

// Opdaterer den total pris(i alt)
function updateTotal() {
    if (selectedPersons > 0 && selectedDays > 0) {
      const total = prices[selectedPersons] * selectedDays;
      document.getElementById("iAlt").value = total;
    } else {
      document.getElementById("iAlt").value = 0;
    }
  }

// Håndterer valg af personer og dage
function increaseQuantity(type, value) {
    if (type === 'personer') {
        selectedPersons = value;
    } else if (type === 'uger') {
        selectedDays = value;
    }
    updateTotal();
}

// Nulstiller valgene og den samlede pris
function resetSelections() {

    selectedPersons = 0;
    selectedDays = 0;

    updateTotal();
}

// Opdatering af prisen ved indlæsning af siden
window.onload = updateTotal;

