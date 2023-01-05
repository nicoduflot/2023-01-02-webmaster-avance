/**
 * 
 * Ce type de commentaire est souvent utilisé pour 
 * présenter le code, commenter et le documenter
 * 
 * Fichier JS introduction au JS
 * Auteur               : Nicolas Duflot 
 * Date de création     : 06/01/2023
 * Date de modification : 06/01/2023
 * 
 * Déclaration des variables
 * Les types de variables
 * Les opérateurs
 *      Mathématiques
 *      Logiques
 *      Comparaison
 * 
 */

console.log('Coucou');

/* déclaration d'une variables */
/* 
contrairement à des langages tel que C++, les variable ne sont typées que par leur contenu 
en c++
    int nombre = 12; 
    on crée une variable qui ne contiendra que des entier et qui reçoit 12

en js
    var monNombre = 12;
    on crée une variable, qui s'appelle monNombre et qui reçoit l'entier 12 donc elle devient une variable de type entier
*/
var prenom = 'Jean';
console.log(prenom);
console.log(typeof prenom);
prenom = 12;
console.log(prenom);
console.log(typeof prenom);
/* en JS les varaible ne sont typée que par leur contenu */
prenom = prenom + 1;
console.log(prenom);
prenom = prenom + 'Nicolas';
console.log(prenom);
console.log(typeof prenom);
/* ATTENTION à ce qu'on appelle le "transtypage" : quand on additionne une valeur numérique avec du texte, la valeur finale devient du texte */
prenom = 12;
console.log(prenom);
console.log(typeof prenom);
prenom = prenom + '1'; /* ici, 1 est ajouté sous forme de texte car il est contenu par des apostrophe : les apostrophes sont les délimiteurs des variables de texte */
console.log(prenom);
prenom = 12;
/* 
désormais, on évitera au maximum d'utiliser var pour déclarer une variable, on utilisera à la place le mot clef let
c'est pour éviter certaines erreurs due à la portée (l'influence sur le code) des variables selon l'endoit où elles sont déclarées
*/

let nom = 'Neige';
console.log(nom);

/* le + sert à deux choses, à concaténer plusieurs chaînes de caractère en elles, à addition des nombres */
console.log('papa' + ' ' + 'toto');
console.log(1 + 3);
console.log(nom + 3);
console.log(prenom + 3);
console.log('écrire du texte avec l\'apostrophe');
prenom = 'Jean';
console.log('Bonjour ' + prenom + ' ' + nom + ', comment vas-tu ?');
/* 
concaténation variables et texte 'à l'ancienne' 
on va utiliser un méthode plus fluide pour cela : l'interpolation de texte
on va entourer le texte non plus de quote ', mais par des backquotes ` accent grave tout seul 

*/
console.log(`Bonjour ${prenom} ${nom}, comment vas-tu ?`);
console.log(`écrire du texte avec l'apostrophe`); /* cette écriture sans variable est tolérée */
console.log(`la somme de 2 + 3 = ${2 + 3}`);

/*
mini exercice : 
créer une variable avec un nombre
créer une variable avec du texte
afficher les variables en console
afficher le résultat de la variable nombre + 3 en console
afficher la variable texte et le résultat de la variable nombre -6 en console
*/

let nombre = 37;
let texte = 'j\'aime le javascript';
console.log(nombre);
console.log(texte);
console.log(nombre + 3);
console.log(` ${texte} ${nombre - 6} `);

console.log(parseInt('12') + 1);
console.log(parseInt('a12'));
console.log(parseInt('12.3'));
console.log(parseFloat('12.3'));

/*
fonction : un fonctionnement appelé pour obtenir un résultat qui n'est pas rattachée à un objet
ex parseInt est une fonction
méthode : une fonction mais elle est rattachée à un objet
ex : console.log() => log() est une méthode de l'objet console
*/

/*
JS est un langage prototypé => qui repose essentiellement sur des objets (objets de programmation)
*/

let tab = ['ert', 'rtbf', 12];
/* 
let tab = new Array('ert', 'rtbf', 12);
=> tab reçoit une nouvelle construction faîte par la classe Array (tableau) avec les éléments suivant : 'ert', 'rtbf', 12
*/
console.log(tab);
console.log(tab.length);
/*
constante = variables de paramétrage, qui une fois définies ne sont plus modifiées
*/

const SERVEURFRANCAIS = '192.168.0.1';
const SERVEURANGLAIS = '192.168.0.2';
const SERVEURALLEMAND = '192.168.0.3';

const UTILISATEURBASE = 'X-fght:tre';
const UTILISATEURCONNECTE = 'X-fgg:tri';
const UTILISATEURADMIN = 'X-AAA:TRR';

function connServeur(server, user) {
    // code de la fonction
}

connServeur(SERVEURFRANCAIS, UTILISATEURCONNECTE);
/*
équivaut à
*/
connServeur('192.168.0.1', 'X-fgg:tri');

/**
 * JS n'est pas un langage typé par définition : c'est le contenu de la variable qui défini son type
 *
 * Types
 * [Primitif]
 * number       => nombre (entier, à virgule flottante)
 * bool         => booléen (vrai ou faux)
 *
 * [Référence]
 * String       => chaîne caractère (proche des tableaux)
 * Array        => tableau de données
 * Object       => les objets (possèdant attributs et méthodes)
 * JSON         => JavaScript Object Notation
 *
 */

// Opérateurs
/**
 * 
 * Mathématiques
 * 
 *  + (addition mais aussi sert à la concaténation => attention au transtypage)
 *  - 
 *  / 
 *  % => modulo renvoie le reste d'une division entière
 *          4/2 = 2     
 *          5/2 = 2.5   
 *          5%2 = 1     (dans ce cas le nombre est impaire)
 *          4%2 = 0     (dans ce cas le nombre est paire)
 *  * Multiplication =>  2*3 = 6
 *  ** 2 puissance 3 => 2**3 = 8
 *  => Math.pow(2, 3);
 * 
 *  incrémentation
 *  let i = 0;
 *  i = i + 1;
 *  i++ ou ++i
 * 
 *  i = 5;
 *  i = i - 1;
 *  => i-- ou --i;
 * 
*/