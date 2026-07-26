const sortie = document.querySelector("#sortie");
const documentation = document.querySelector("#documentation");

function afficher(html) {
  if (sortie) {
    sortie.innerHTML += html;
  }
}

function formatResult(value) {
  if (typeof value === "string") {
    return `"${value}"`;
  }
  return String(value);
}

function estPair(n) {
  return n % 2 === 0;
}

const maxDeDeux = function (a, b) {
  return a > b ? a : b;
};

const convertirTemperature = (c) => (c * 9) / 5 + 32;

function calculerTVA(prix, taux) {
  return prix * (1 + taux / 100);
}

function inverserChaine(texte) {
  return texte.split("").reverse().join("");
}

function compterVoyelles(texte) {
  const voyelles = new Set(["a", "e", "i", "o", "u", "y"]);
  let total = 0;
  const lettres = texte.toLowerCase();

  for (const lettre of lettres) {
    if (voyelles.has(lettre)) {
      total++;
    }
  }

  return total;
}

function estPalindrome(texte) {
  const nettoye = texte.toLowerCase().replace(/[^a-z0-9]/g, "");
  return nettoye === nettoye.split("").reverse().join("");
}

function factorielle(n) {
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

const convertirEnMajuscules = (texte) => texte.toUpperCase();

function calculerSurfaceRectangle(longueur, largeur) {
  return longueur * largeur;
}

const implementations = {
  estPair,
  maxDeDeux,
  convertirTemperature,
  calculerTVA,
  inverserChaine,
  compterVoyelles,
  estPalindrome,
  factorielle,
  convertirEnMajuscules,
  calculerSurfaceRectangle,
};

const fonctions = [
  {
    id: "estPair",
    nom: "estPair",
    categorie: "nombres",
    style: "Déclaration",
    description: "Vérifie si un nombre est pair.",
    signature: "estPair(n)",
    type: "booléen",
    exemples: [
      { args: [4], label: "Exemple 1" },
      { args: [7], label: "Exemple 2" },
    ],
  },
  {
    id: "maxDeDeux",
    nom: "maxDeDeux",
    categorie: "nombres",
    style: "Expression",
    description: "Retourne le plus grand des deux nombres fournis.",
    signature: "maxDeDeux(a, b)",
    type: "nombre",
    exemples: [
      { args: [12, 7], label: "Exemple 1" },
      { args: [3, 9], label: "Exemple 2" },
    ],
  },
  {
    id: "convertirTemperature",
    nom: "convertirTemperature",
    categorie: "conversion",
    style: "Fonction fléchée",
    description: "Convertit une température en degrés Celsius vers Fahrenheit.",
    signature: "convertirTemperature(c)",
    type: "nombre",
    exemples: [
      { args: [0], label: "Exemple 1" },
      { args: [25], label: "Exemple 2" },
    ],
  },
  {
    id: "calculerTVA",
    nom: "calculerTVA",
    categorie: "conversion",
    style: "Déclaration",
    description:
      "Calcule le prix TTC à partir d'un prix HT et d'un taux de TVA.",
    signature: "calculerTVA(prix, taux)",
    type: "nombre",
    exemples: [
      { args: [100, 20], label: "Exemple 1" },
      { args: [80, 10], label: "Exemple 2" },
    ],
  },
  {
    id: "inverserChaine",
    nom: "inverserChaine",
    categorie: "chaînes",
    style: "Déclaration",
    description: "Inverse l'ordre des caractères d'une chaîne.",
    signature: "inverserChaine(texte)",
    type: "chaîne",
    exemples: [
      { args: ["bonjour"], label: "Exemple 1" },
      { args: ["JS"], label: "Exemple 2" },
    ],
  },
  {
    id: "compterVoyelles",
    nom: "compterVoyelles",
    categorie: "chaînes",
    style: "Déclaration",
    description: "Compte le nombre de voyelles dans une chaîne de caractères.",
    signature: "compterVoyelles(texte)",
    type: "nombre",
    exemples: [
      { args: ["algorithme"], label: "Exemple 1" },
      { args: ["rhythmique"], label: "Exemple 2" },
    ],
  },
  {
    id: "estPalindrome",
    nom: "estPalindrome",
    categorie: "chaînes",
    style: "Déclaration",
    description:
      "Vérifie si une phrase est un palindrome en ignorant les espaces et les signes.",
    signature: "estPalindrome(texte)",
    type: "booléen",
    exemples: [
      { args: ["radar"], label: "Exemple 1" },
      { args: ["Bonjour"], label: "Exemple 2" },
    ],
  },
  {
    id: "factorielle",
    nom: "factorielle",
    categorie: "nombres",
    style: "Déclaration",
    description: "Calcule la factorielle d'un nombre entier positif.",
    signature: "factorielle(n)",
    type: "nombre",
    exemples: [
      { args: [5], label: "Exemple 1" },
      { args: [3], label: "Exemple 2" },
    ],
  },
  {
    id: "convertirEnMajuscules",
    nom: "convertirEnMajuscules",
    categorie: "chaînes",
    style: "Fonction fléchée",
    description: "Transforme une chaîne en majuscules.",
    signature: "convertirEnMajuscules(texte)",
    type: "chaîne",
    exemples: [
      { args: ["bonjour"], label: "Exemple 1" },
      { args: ["akieni"], label: "Exemple 2" },
    ],
  },
  {
    id: "calculerSurfaceRectangle",
    nom: "calculerSurfaceRectangle",
    categorie: "nombres",
    style: "Déclaration",
    description:
      "Calcule la surface d'un rectangle à partir de sa longueur et de sa largeur.",
    signature: "calculerSurfaceRectangle(longueur, largeur)",
    type: "nombre",
    exemples: [
      { args: [8, 5], label: "Exemple 1" },
      { args: [3, 7], label: "Exemple 2" },
    ],
  },
];

function creerSection(fonction) {
  const exemples = fonction.exemples
    .map((exemple, index) => {
      const argumentsAffiches = exemple.args
        .map((argument) =>
          typeof argument === "string" ? `"${argument}"` : argument,
        )
        .join(", ");
      const valeur = implementations[fonction.nom](...exemple.args);
      const code = `<pre><code>const resultat${index + 1} = ${fonction.nom}(${argumentsAffiches});</code></pre>`;

      return `
      <div class="bloc-exemple">
        <h4>${exemple.label}</h4>
        ${code}
        <p class="resultat">Résultat réel : ${formatResult(valeur)}</p>
      </div>`;
    })
    .join("");

  return `
    <section class="fonction-card" id="${fonction.id}">
      <div class="fonction-en-tete">
        <h3>${fonction.nom}</h3>
        <span class="badge badge-${fonction.categorie}">${fonction.categorie}</span>
      </div>
      <p>${fonction.description}</p>
      <div class="meta">
        <p><strong>Signature :</strong> <code>${fonction.signature}</code></p>
        <p><strong>Style :</strong> <span class="signature">${fonction.style}</span></p>
        <p><strong>Retour :</strong> <span class="signature">${fonction.type}</span></p>
      </div>
      <div class="exemples">${exemples}</div>
    </section>`;
}

function rendreDocumentation() {
  if (!documentation) {
    return;
  }

  documentation.innerHTML = fonctions.map(creerSection).join("");
}

function rendreDemo() {
  if (!sortie) {
    return;
  }

  const items = fonctions.map((fonction) => {
    const exemple = fonction.exemples[0];
    const argumentsAffiches = exemple.args
      .map((argument) =>
        typeof argument === "string" ? `"${argument}"` : argument,
      )
      .join(", ");
    const valeur = implementations[fonction.nom](...exemple.args);
    return `<div class="demo-item"><strong>${fonction.nom}</strong>(${argumentsAffiches}) → ${formatResult(valeur)}</div>`;
  });

  sortie.innerHTML = `<div class="demo-grid">${items.join("")}</div>`;
}

function initialiser() {
  rendreDocumentation();
  rendreDemo();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiser);
} else {
  initialiser();
}
