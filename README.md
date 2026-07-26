# boite-a-outils-de-10-fonctions

<img src="Capture d'écran/Capture d'écran 2026-07-26 143917.png" alt="Boite a outils de 10 fonctions" width="600" />

Ce projet présente une petite bibliothèque de dix fonctions JavaScript réutilisables. La page web génère automatiquement une documentation et des exemples d'utilisation pour chaque fonction.

## Fichiers du projet

- `index.html` : structure de la page et zones où la documentation est affichée.
- `style.css` : mise en forme de la page et variables de couleurs.
- `utils.js` : fonctions JavaScript, données des exemples et génération de la documentation.

## Utilisation

Ouvrez `index.html` dans un navigateur. Les exemples sont déjà définis dans `utils.js` : il n'y a pas de formulaire ni de saisie utilisateur à compléter.

## Fonctions disponibles

### `estPair(n)`

Vérifie si le nombre `n` est pair. La fonction renvoie `true` si le reste de la division par 2 est égal à zéro, sinon `false`.

```js
estPair(4); // true
estPair(7); // false
```

### `maxDeDeux(a, b)`

Compare deux nombres et renvoie le plus grand des deux.

```js
maxDeDeux(12, 7); // 12
```

### `convertirTemperature(c)`

Convertit une température exprimée en degrés Celsius en degrés Fahrenheit avec la formule `(c × 9) / 5 + 32`.

```js
convertirTemperature(25); // 77
```

### `calculerTVA(prix, taux)`

Calcule un prix TTC à partir d'un prix HT et d'un taux de TVA exprimé en pourcentage.

```js
calculerTVA(100, 20); // 120
```

### `inverserChaine(texte)`

Inverse l'ordre des caractères d'une chaîne de texte.

```js
inverserChaine("bonjour"); // "ruojnob"
```

### `compterVoyelles(texte)`

Compte les voyelles `a`, `e`, `i`, `o`, `u` et `y` dans une chaîne, sans tenir compte des majuscules.

```js
compterVoyelles("algorithme"); // 4
```

### `estPalindrome(texte)`

Détermine si un texte se lit de la même façon dans les deux sens. La fonction ignore les majuscules, les espaces et les signes de ponctuation.

```js
estPalindrome("radar"); // true
estPalindrome("Bonjour"); // false
```

### `factorielle(n)`

Calcule la factorielle d'un entier positif en multipliant tous les nombres de `1` à `n`.

```js
factorielle(5); // 120
```

### `convertirEnMajuscules(texte)`

Transforme tous les caractères d'une chaîne en majuscules.

```js
convertirEnMajuscules("akieni"); // "AKIENI"
```

### `calculerSurfaceRectangle(longueur, largeur)`

Calcule la surface d'un rectangle en multipliant sa longueur par sa largeur.

```js
calculerSurfaceRectangle(8, 5); // 40
```

## Démonstration

Les valeurs utilisées pour la démonstration sont écrites directement dans `utils.js`. La page affiche le code de chaque exemple et le résultat obtenu.
#
