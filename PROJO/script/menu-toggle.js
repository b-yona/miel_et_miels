// --- JS pour menu toggle ---
const boutonMenu = document.getElementById('bouton-menu');
const menu = document.getElementById('menu');

function aClasse(element, nomClasse) {
  return new RegExp(' ' + nomClasse + ' ').test(' ' + element.className + ' ');
}

function changerClasse(element, nomClasse) {
  const classeActuelle = ' ' + element.className.replace(/\s+/g, ' ') + ' ';
  if (aClasse(element, nomClasse)) {
    element.className = classeActuelle.replace(' ' + nomClasse + ' ', ' ').trim();
  } else {
    element.className += ' ' + nomClasse;
  }
}

boutonMenu.onclick = function () {
  changerClasse(this, 'actif');
  changerClasse(menu, 'actif');
  return false;
};
