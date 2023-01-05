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
console.log( typeof prenom );
prenom = 12;
console.log(prenom);
console.log( typeof prenom );
/* en JS les varaible ne sont typée que par leur contenu */
prenom = prenom + 1;
console.log(prenom);
prenom = prenom + 'Nicolas';
console.log(prenom);
console.log( typeof prenom );
/* ATTENTION à ce qu'on appelle le "transtypage" : quand on additionne une valeur numérique avec du texte, la valeur finale devient du texte */
prenom = 12;
console.log(prenom);
console.log( typeof prenom );
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