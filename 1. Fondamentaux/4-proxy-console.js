// CONTEXTE :
// Vous devez créer un système de logging personnalisé qui encapsule
// les méthodes de console (log, warn, error) pour ajouter des fonctionnalités
// supplémentaires comme l'horodatage et le formatage des messages.

// ===================================
// PARTIE 1 : FONCTION D'HORODATAGE
// ===================================

function obtenirHorodatage() {
    const now = new Date();
    const heures = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const secondes = String(now.getSeconds()).padStart(2, "0");
    return `[${heures}:${minutes}:${secondes}]`;
}

// ===================================
// PARTIE 2 : ENCAPSULATION DE CONSOLE.LOG
// ===================================

const oldLog = console.log;

console.log = (message) => {
    oldLog(`${obtenirHorodatage()} ${message}`);
};

// ===================================
// TESTS
// ===================================

console.log("Ceci est un message d'information");
console.warn("Attention, ceci est un avertissement");
console.error("Une erreur s'est produite");
