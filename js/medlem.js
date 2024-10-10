"use strict"; 

// pop up når man er tilmeldt
function showAlert() {
        document.getElementById("notifikation").style.display = "block"; // Vis popup
        return false;
    }

    function closePopup() {
        document.getElementById("notifikation").style.display = "none"; // Skjul popup
    }

