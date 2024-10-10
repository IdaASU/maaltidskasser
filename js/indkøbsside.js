// Definer priser per person per dag
const prices = {
    1: 749,
    2: 1429,
    3: 2099,
    4: 2699
};

// Variabler til at gemme valgte personer og dage
let selectedPersons = 0;  // Start med 0 for at indikere, at intet er valgt endnu
let selectedDays = 0;     // Start med 0 for at indikere, at intet er valgt endnu

// Funktion til at opdatere den samlede pris
function updateTotal() {
    // Tjek om både personer og dage er valgt
    if (selectedPersons > 0 && selectedDays > 0) {
        const total = prices[selectedPersons] * selectedDays;
        document.getElementById("iAlt").value = total;  // Vis den beregnede total
    } else {
        document.getElementById("iAlt").value = '';  // Vis en tom værdi, hvis enten personer eller dage ikke er valgt
    }
}

// Funktion til at håndtere valg af personer og dage
function increaseQuantity(type, value) {
    if (type === 'personer') {
        selectedPersons = value; // Sæt det valgte antal personer
    } else if (type === 'dage') {
        selectedDays = value; // Sæt det valgte antal dage
    }
    updateTotal(); // Opdater den samlede pris
}

// Funktion til at nulstille valgene og den samlede pris
function resetSelections() {
    // Nulstil både selectedPersons og selectedDays til 0
    selectedPersons = 0;
    selectedDays = 0;
    
    // Opdater den samlede pris (som nu bliver blank)
    updateTotal();
}

// Initial opdatering af prisen ved indlæsning af siden
window.onload = updateTotal;
