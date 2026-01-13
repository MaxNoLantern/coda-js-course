// DONNÉES DU PANIER
const montantPanier = 120; // Montant initial du panier en euros
const possedeCarteFidelite = true; // Le client a-t-il une carte de fidélité ?
const estJourDeSoldes = false; // Sommes-nous un jour de soldes ?

// VARIABLES À CALCULER
let reductionAppliquee = 0; // Pourcentage de réduction à appliquer
let montantApresReduction = 0; // Montant après application de la réduction
let fraisDePort = 0; // Frais de port à appliquer
let totalFinal = 0; // Montant total final à payer

// ===================================
// ÉTAPE 1 : CALCUL DE LA MEILLEURE RÉDUCTION
// ===================================
// Règles :
// - Carte de fidélité : -10%
// - Jour de soldes : -20%
// - Montant > 100€ : -5%
// Les réductions ne se cumulent pas, prendre la meilleure

switch (true) {
    case possedeCarteFidelite:
        reductionAppliquee = 10;
        break;
    case estJourDeSoldes:
        reductionAppliquee = 20;
        break;
    case   montantPanier > 100:
        reductionAppliquee = 5;
        break;
    default:
        reductionAppliquee = 0;
}


// ===================================
// ÉTAPE 2 : CALCUL DU MONTANT APRÈS RÉDUCTION
// ===================================

montantApresReduction = montantPanier * (1 - reductionAppliquee / 100);

// ===================================
// ÉTAPE 3 : CALCUL DES FRAIS DE PORT
// ===================================
// Règles :
// - Gratuit (0€) si achat > 50€
// - 5€ si achat entre 20€ et 50€
// - 8€ si achat < 20€

switch (true) {
    case montantApresReduction > 50:
        fraisDePort = 0;
        break;
    case montantApresReduction >= 20 && montantApresReduction <= 50:
        fraisDePort = 5;
        break;
    case montantApresReduction < 20:
        fraisDePort = 8;
        break;
    default:
        fraisDePort = 0;
}

// ===================================
// ÉTAPE 4 : CALCUL DU TOTAL FINAL
// ===================================

totalFinal = montantApresReduction + fraisDePort;

// ===================================
// AFFICHAGE DES RÉSULTATS
// ===================================
console.log("=== RÉCAPITULATIF DE VOTRE COMMANDE ===");
console.log(`Montant initial : ${montantPanier}€`);
console.log(`Réduction appliquée : ${reductionAppliquee}%`);
console.log(`Montant après réduction : ${montantApresReduction}€`);
console.log(`Frais de port : ${fraisDePort}€`);
console.log(`TOTAL FINAL : ${totalFinal}€`);


//Correction
// Résultat bon ! Juste l'utilisation du switch est mal choisis et le if aurait été meilleur.
// Bonne prise en compte de répétition de if mais pas de paramètre de variable pur donc lmauvais choix sur le switch mais correct.