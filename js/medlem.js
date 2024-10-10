"use strict";


function showAlert() {
        document.getElementById("notifikation").style.display = "block"; // Vis popup
        return false; // Forhindrer formularen i at blive indsendt
    }

    function closePopup() {
        document.getElementById("notifikation").style.display = "none"; // Skjul popup
    }

