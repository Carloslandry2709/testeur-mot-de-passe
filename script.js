function verifierMotDePasse() {
    var motDePasse = document.getElementById("motDePasse").value;
    var resultat = document.getElementById("resultat");

    // Vérifier la longueur minimale de 8 caractères
    var longueur = motDePasse.length >= 8;
    
    // Vérifier s'il contient au moins une majuscule
    var majuscule = /[A-Z]/.test(motDePasse);
    
    // Vérifier s'il contient au moins une minuscule
    var minuscule = /[a-z]/.test(motDePasse);
    
    // Vérifier s'il contient au moins un chiffre
    var chiffre = /\d/.test(motDePasse);
    
    // Vérifier s'il contient au moins un caractère spécial
    var caractere_special = /[@$!%*?&]/.test(motDePasse);

    // Calculer la force du mot de passe
    var force = 0;
    if (longueur) force += 1;
    if (majuscule) force += 1;
    if (minuscule) force += 1;
    if (chiffre) force += 1;
    if (caractere_special) force += 1;

    // Déterminer la classification du mot de passe
    if (force === 5) {
        resultat.textContent = "Force du mot de passe : Fort";
        resultat.className = "fort";
    } else if (force >= 3) {
        resultat.textContent = "Force du mot de passe : Moyen";
        resultat.className = "moyen";
    } else {
        resultat.textContent = "Force du mot de passe : Faible";
        resultat.className = "faible";
    }
}
