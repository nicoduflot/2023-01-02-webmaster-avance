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
 *  i++ ou ++i;
 * 
 *  i = 5;
 *  i = i - 1;
 *  => i-- ou --i;
 * 
*/

let nombreIncrement = 11;
console.log(`nombreIncrement : ${nombreIncrement}`);    /* affiche 11 */
console.log(`nombreIncrement : ${nombreIncrement++}`);  /* affiche 11 puis ajoute 1 à nombreIncrement */
console.log(`nombreIncrement : ${nombreIncrement}`);    /* affiche 12 */
console.log(`nombreIncrement : ${++nombreIncrement}`);  /* ajoute 1 à nombreIncrement puis affiche 13 */

/* 
camelCase
*/

/**
 * Opérateurs logiques
 * 
 *  && (ET)
 *  (si les conditions du ET sont toutes vraie, le test renvoi vrai)
 *  (si au moins une des condition du test est fausse, le test renvoi faux)
 *  true && true => true
 *  true && false => false
 *  false && true => false
 *  false && false => false
 * 
 *  || (OU)
 *  (si au moins une des conditions du test est vraie, le resultat du test est vrai)
 *  true || true => true
 *  true || false => true
 *  false || true => true
 *  false || false => false
 * 
 *  ! (NON)
 *  a = true, !a = false
 * 
 *  ^ (XOR : OU exclusif binaire)
 * (si au moins une des condition est vrai, le résultat renvoi vrai, MAIS si toutes les condition sont vrai, le resultat du test est faux)
 * true ^ true => false
 * true ^ false => true
 * false ^ true => true
 * false ^ false => false 
 * 
 * Comparaison
* 
* <  > <=  >= comparateurs infériorité, supériorité
* 
* == égale en valeur (non strict)
* != différend en valeur (non strict)
* 
* === égale en valeur et en type (stricte)
* !== différent en valeur et en type (stricte)
 */

console.log(2 == 2);
console.log(2 == '2');
console.log(2 === 2);
console.log(2 === '2');
console.log(2 != 2);
console.log(2 != '2');
console.log(2 !== 2);
console.log(2 !== '2');

/**
 * Les tableaux en JS
 * 
 * Avant es6, pour créer un tableau 
 * 
 * let tab = new Array('aze', 'tyu', 12);
 * 
 * depuis es6
 * let tab = ['aze', 'tyu', 12];
 */

let cars = ['Peugeot', 'Citroën', 'BMW', 'Ford', 'Renault'];
/**
 * 
 * les données sont stocké dans la variable à des indices, les indices d'un tableau commencent à 0
 * 
 */
console.log(cars);
console.log(cars[2]); /* affiche Ford */
console.log(`Le tableau cars contient ${cars.length} élément(s)`);

cars.push('Hyundai');
console.log(cars);
console.log(`Le tableau cars contient ${cars.length} élément(s)`);

cars.push('Yamaha', 'Kawasaki');
console.log(cars);
console.log(`Le tableau cars contient ${cars.length} élément(s)`);

/* les tableaux sont itérables => on peut parcourir chacun des éléments à l'intérieur à l'aide de boucles */

/*
une boucle permet de parcourir les élément itérables selon un pas (tout les x éléments)
*/

/*
'Peugeot', 'Citroën', 'Ford', 'Renault', 'Hyundai', 'Yamaha', 'Kawasaki'
*/

console.log('------------- la boucle for --------------');
for(let i = 0; i < cars.length; i++){
    console.log(`i = ${i}, cars[i] => cars[${i}] : ${cars[i]}`);
    if(cars[i] === 'Yamaha'){
        console.log('on a trouvé la moto');
    }
}

/*
Pour ( i égal à 0; tant que i est strictement inférieur nb elem de cars; i incrémente de un) alors
    afficher i = valeur de i, cars[i] égale valeur cars[i]
    si(valeur cars[i] est égal à 'Yamaha) alors
        afficher on a trouvé la moto
    Fin Si
Fin pour
*/

console.log('------------- la boucle for in --------------');
for(index in cars){
    console.log(`dans cars; à l'index ${index}, la valeur est ${cars[index]}`);
}

console.log('------------- la boucle for of (es6) --------------');
for(value of cars){
    console.log(`la valeur actuelle dans cars est ${value}`);
}

console.log('-------------- boucle while ----------------');
/*
Tant que : 
tant qu'une condition n'est pas atteinte, on effectue un comportement
*/
let cpt = 0;
while(cars[cpt] !== 'Ford'){
    console.log(cars[cpt]);
    cpt++;
}

console.log(`Ford est présent dans le tableau à l'indice ${cpt}`);

console.log('-------------- boucle do while ----------------');
/*
Faire Tant que : 
le comportement est fait au moins une fois avant qu'une condition soit atteinte
*/
cpt = 0;
do{
    console.log(cars[cpt]);
    cpt++;
}while(cpt < cars.length);

console.log('-------------- .map() uniquement pour les tableaux ----------------');
let tabNum = [1,2,3,4,5];
console.log(tabNum);
tabNum.map( function(valeur, index, tab){
    tab[index] = valeur * 1.2;
    console.log(`à l'index ${index}, la valeur : ${valeur}, le tableau est ${tab}`);
});

console.log(`à la fin du traitement, le tableau est ${tabNum}`);

console.log('-------------- .forEach() ----------------');
let tabNum2 = [1,2,3,4,5];
console.log(tabNum2);
tabNum2.forEach( function(valeur, index, tab){
    tab[index] = valeur * 1.2;
    console.log(`à l'index ${index}, la valeur : ${valeur}, le tableau est ${tab}`);
});

console.log(`à la fin du traitement, le tableau est ${tabNum2}`);

// ajout d'éléments

cars.push('Seat');
cars.push('Fiat', 'Toyota');

console.log(cars);

// supprimer des valeurs dans un tableau
// .pop(), .shift(), .splice()

// .pop() => extrait du tableau la dernière valeur
let extractLast = cars.pop();
console.log(extractLast);
console.log(cars);

// .shift() => extrait la première valeur du tableau, réorganise les valeurs dans les index, supprime la dernière "case" du tableau
let extractFirst = cars.shift();
console.log(extractFirst);
console.log(cars);

// .splice() extrait une ou plusieurs valeur d'un tableau, et peut aussi réinsserer d'autre valeur à lapplace des données extraite.
// .slice() 1 : extraire des valeur d'un tableau => retourne
let removed = cars.splice(2, 2);
console.log(removed);
console.log(cars);

//.splice() 2 : on enlève des valeur et à partir de la prmière valeur retirée, on ajoute X valeur
console.log(cars.indexOf('Hyundai'));
let replaced = cars.splice(cars.indexOf('Hyundai'), 2, 'Alpine', 'Mazda');
console.log(replaced);
console.log(cars);

//.splice() 3 : pour inserrer des valeur dans un tableau sans en retirer
cars.splice(cars.indexOf('Kawasaki'), 0, extractLast, extractFirst, removed[0], removed[1], replaced[0], replaced[1]);
console.log(cars);

// comment créer une copie d'un tableau
// .slice()
let carsClone = cars.slice();
console.log(carsClone, cars);
carsClone.push('Volkswagen');
console.log(carsClone, cars);
let tabSlice = cars.slice(2, 6);
console.log(tabSlice, cars);

// trier les tableau
console.log(`avant le tri ascendant carsClone : ${carsClone}`);
console.log(carsClone);
carsClone.sort();
console.log(`après le tri ascendant carsClone : ${carsClone}`);
console.log(carsClone);

carsClone.reverse(); /* ça ne tri pas le tableau, ça inverse les éléments */
console.log(`après le tri descendant carsClone : ${carsClone}`);
console.log(carsClone);

// les conditions
console.log('----------- la condition si (sinon) ---------------');
// si (sinon)
maValeur = 45;
if (maValeur > 60) {
    console.log('la valeur est supérieure à 60');
} else {
    console.log('la valeur est inférieure ou égale à 60');
}

if (maValeur < 60) {
    console.log('la valeur est inférieur à 60');
}

console.log('----------- la condition selon une valeur switch ---------------');
let monParfum = 'Chocolat';

function testParfum(parfum) {
    switch (parfum) {
        case 'vanille':
            console.log(`${parfum} rime avec gerbille`);
            break;
        case 'poire':
        case 'malabar':
            console.log(`${parfum} rime avec mangeoire`);
            break;
        case 'Chocolat':
            console.log(`${parfum} rime avec beluga`);
            break;
        case 'Fraise':
            console.log(`${parfum} rime avec balaise`);
            break;
        default:
            console.log(`${parfum} n'est pas en vente chez nous`);
    }
}

testParfum(monParfum);
monParfum = 'malabar';
testParfum(monParfum);
testParfum('Rhum raisin');

function testParfum2(parfum) {
    let retourTest = null;
    switch (parfum) {
        case 'vanille':
            retourTest = `${parfum} rime avec gerbille`;
            break;
        case 'poire':
        case 'malabar':
            retourTest = `${parfum} rime avec mangeoire`;
            break;
        case 'Chocolat':
            retourTest = `${parfum} rime avec beluga`;
            break;
        case 'Fraise':
            retourTest = `${parfum} rime avec balaise`;
            break;
        default:
            retourTest = `${parfum} n'est pas en vente chez nous`;
    }
    return retourTest;
}

testParfum2('Chocolat'); // équivalent d'une variable qui contient le retour de la fonction

console.log(testParfum2('Chocolat'));