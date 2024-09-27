const burgerCheckbox = document.getElementById('burger');
const navLinks = document.querySelector('.nav-lien');
const navBurger = document.querySelector('.nav-burger');
const h2_about = document.querySelector('.header-about');
const competence_l = document.querySelector('.mobile-comp-left');
const competence_r = document.querySelector('.mobile-comp-right');

// Fonction pour vérifier la taille de l'écran et ajuster l'affichage du menu
function updateMenuDisplay() {
    if (window.innerWidth <= 768) {
        navLinks.classList.add('d-none'); // Cacher le menu par défaut sur mobile
        navBurger.classList.remove('d-none'); // Afficher le burger
        h2_about.classList.remove('d-none');

        competence_l.classList.remove('d-flex');
        competence_r.classList.remove('d-flex');
        burgerCheckbox.checked = false;
    } else {
        navLinks.classList.remove('d-none'); // Afficher le menu sur desktop
        navLinks.classList.remove('active'); // Retirer la classe active
        navBurger.classList.add('d-none'); // Cacher le burger
        h2_about.classList.add('d-none');
        //competence.classList.add('d-flex');
        competence_l.classList.add('d-flex');
        competence_r.classList.add('d-flex');

        // Réinitialiser l'état du checkbox pour être décoché
        burgerCheckbox.checked = false; // Décocher le burger checkbox si l'écran est large
    }
}

// Initialiser l'état du menu au chargement de la page
updateMenuDisplay();

// Gérer l'événement de redimensionnement de la fenêtre pour mettre à jour le menu
window.addEventListener('resize', updateMenuDisplay);

// Ajouter un événement de changement pour afficher/masquer le menu lors du clic sur le burger
burgerCheckbox.addEventListener('change', () => {
    if (burgerCheckbox.checked) {
        navLinks.classList.remove('d-none'); // Afficher le menu
        navLinks.classList.add('active'); // Ajouter la classe active
    } else {
        navLinks.classList.remove('active'); // Retirer la classe active
        navLinks.classList.add('d-none'); // Cacher le menu
    }
});
