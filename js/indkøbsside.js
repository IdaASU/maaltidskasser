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

// Funktion til at opdatere den total pris(i alt)
function updateTotal() {
    if (selectedPersons > 0 && selectedDays > 0) {
      const total = prices[selectedPersons] * selectedDays;
      document.getElementById("iAlt").value = total;
    } else {
      document.getElementById("iAlt").value = 0;
    }
  }

// Funktion til at håndtere valg af personer og dage
function increaseQuantity(type, value) {
    if (type === 'personer') {
        selectedPersons = value;
    } else if (type === 'dage') {
        selectedDays = value;
    }
    updateTotal();
}

// Funktion til at nulstille valgene og den samlede pris
function resetSelections() {

    selectedPersons = 0;
    selectedDays = 0;
    

    updateTotal();
}

// Opdatering af prisen ved indlæsning af siden
window.onload = updateTotal;
