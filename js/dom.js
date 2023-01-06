function createJVRows(tabInfos) {
    /* on crée un élément tbody qui va contenir les informations du jv sélectionné */
    let tbody = document.createElement('tbody');
    /* création des lignes d'un JV */
    //console.log(tabInfos);
    /* on crée la ligne qui affiche l'année du jv */
    let trAnnee = document.createElement('tr');
    /* on crée la th qui contient l'étiquette de la donnée */
    let thAnnee = document.createElement('th');
    /* on ajoute le texte de la th */
    thAnnee.innerHTML = 'Année de sortie';
    /* on ajoute la th année à la tr année */
    trAnnee.append(thAnnee);
    /* on crée la td année qui contiendra l'année du JV */
    let tdAnnee = document.createElement('td');
    /* l'année du JV est à l'indic 0 du tableau tabInfo, on l'ajoute dans le html de la td année */
    tdAnnee.innerHTML = tabInfos[0];
    /* on ajoute la td année à la tr année */
    trAnnee.append(tdAnnee);
    /* on crée la ligne (tr) du titre du JV */
    let trTitre = document.createElement('tr');
    let thTitre = document.createElement('th');
    thTitre.innerHTML = 'Titre';
    trTitre.append(thTitre);
    let tdTitre = document.createElement('td');
    tdTitre.innerHTML = tabInfos[1];
    trTitre.append(tdTitre);
    /* on crée la ligne (tr) du genre du JV */
    let trGenre = document.createElement('tr');
    let thGenre = document.createElement('th');
    thGenre.innerHTML = 'Genre';
    trGenre.append(thGenre);
    let tdGenre = document.createElement('td');
    tdGenre.innerHTML = tabInfos[2];
    trGenre.append(tdGenre);
    /* on crée la ligne (tr) des plateformes du JV */
    let trPlateFormes = document.createElement('tr');
    let thPlateFormes = document.createElement('th');
    thPlateFormes.innerHTML = 'Plateformes';
    trPlateFormes.append(thPlateFormes);
    let tdPlateFormes = document.createElement('td');
    tdPlateFormes.innerHTML = tabInfos[3];
    trPlateFormes.append(tdPlateFormes);
    /* on crée la ligne (tr) du distributeur du JV */
    let trDistributeur = document.createElement('tr');
    let thDistributeur = document.createElement('th');
    thDistributeur.innerHTML = 'Distributeur';
    trDistributeur.append(thDistributeur);
    let tdDistributeur = document.createElement('td');
    tdDistributeur.innerHTML = tabInfos[4];
    trDistributeur.append(tdDistributeur);

    /* on ajoutes les lignes créées au tbody du tableau */
    tbody.append(trAnnee);
    tbody.append(trTitre);
    tbody.append(trGenre);
    tbody.append(trPlateFormes);
    tbody.append(trDistributeur);

    //console.log(tbody);

    /* on renvoie le tbody à l'appel de la fonction */
    return tbody;
}

function createJVRowsSearch(tabInfos, nbOccurence = 1) {
    /* on crée un élément tbody qui va contenir les informations du jv sélectionné */
    let tbody = document.createElement('tbody');
    let cptDonnee = 0;
    for (i = 0; i < nbOccurence; i++) {
        /* création des lignes d'un JV */
        //console.log(tabInfos);
        /* on crée la ligne qui affiche l'année du jv */
        let trAnnee = document.createElement('tr');
        /* on crée la th qui contient l'étiquette de la donnée */
        let thAnnee = document.createElement('th');
        /* on ajoute le texte de la th */
        thAnnee.innerHTML = 'Année de sortie';
        /* on ajoute la th année à la tr année */
        trAnnee.append(thAnnee);
        /* on crée la td année qui contiendra l'année du JV */
        let tdAnnee = document.createElement('td');
        /* l'année du JV est à l'indic 0 du tableau tabInfo, on l'ajoute dans le html de la td année */
        tdAnnee.innerHTML = tabInfos[cptDonnee];
        cptDonnee++;
        /* on ajoute la td année à la tr année */
        trAnnee.append(tdAnnee);
        /* on crée la ligne (tr) du titre du JV */
        let trTitre = document.createElement('tr');
        let thTitre = document.createElement('th');
        thTitre.innerHTML = 'Titre';
        trTitre.append(thTitre);
        let tdTitre = document.createElement('td');
        tdTitre.innerHTML = tabInfos[cptDonnee];
        cptDonnee++;
        trTitre.append(tdTitre);
        /* on crée la ligne (tr) du genre du JV */
        let trGenre = document.createElement('tr');
        let thGenre = document.createElement('th');
        thGenre.innerHTML = 'Genre';
        trGenre.append(thGenre);
        let tdGenre = document.createElement('td');
        tdGenre.innerHTML = tabInfos[cptDonnee];
        cptDonnee++;
        trGenre.append(tdGenre);
        /* on crée la ligne (tr) des plateformes du JV */
        let trPlateFormes = document.createElement('tr');
        let thPlateFormes = document.createElement('th');
        thPlateFormes.innerHTML = 'Plateformes';
        trPlateFormes.append(thPlateFormes);
        let tdPlateFormes = document.createElement('td');
        tdPlateFormes.innerHTML = tabInfos[cptDonnee];
        cptDonnee++;
        trPlateFormes.append(tdPlateFormes);
        /* on crée la ligne (tr) du distributeur du JV */
        let trDistributeur = document.createElement('tr');
        let thDistributeur = document.createElement('th');
        thDistributeur.innerHTML = 'Distributeur';
        trDistributeur.append(thDistributeur);
        let tdDistributeur = document.createElement('td');
        tdDistributeur.innerHTML = tabInfos[cptDonnee];
        cptDonnee++;
        trDistributeur.append(tdDistributeur);

        /* on ajoutes les lignes créées au tbody du tableau */
        tbody.append(trAnnee);
        tbody.append(trTitre);
        tbody.append(trGenre);
        tbody.append(trPlateFormes);
        tbody.append(trDistributeur);
    }

    //console.log(tbody);

    /* on renvoie le tbody à l'appel de la fonction */
    return tbody;
}

window.addEventListener('DOMContentLoaded', function () {
    console.log('maintenant que le dom est chargé, on peut manipuler la page');
    let paragraphe = document.getElementById('paragraphe');
    console.log(paragraphe);
    console.log(paragraphe.innerHTML);
    console.log(paragraphe.innerText);
    console.log(paragraphe.childNodes);
    console.log(paragraphe.parentNode);
    console.log(paragraphe.parentNode.childNodes);
    paragraphe.parentNode.childNodes.forEach(function (element) {
        console.log(element);
    });

    let headerPage = document.querySelector('body > header');
    /*
    je récupère un élément en l'identifiant grâce à un sélecteur CSS précis : le premier header enfant de body (body > header)
    */

    //console.log(headerPage);

    let allP = document.querySelectorAll('p');
    /*
    on récupère tous les paragraphe du document (une collection)
    */
    let pSurvol = document.querySelector('#pSurvol');
    /* on récupère la div d'affichage du contenu du paragraphe qui sera survolé */
    //console.log(allP);

    /*
    le forEach va aller examiner chacun des éléments de allP, à chaque élément,
    il transfert le paragraphe parcouru dans une fonction anonyme, 
    via une variable créée uniquement pour cette fonction, ici par
    */
    allP.forEach(function (par) {
        /* 
        chaque paragraphe écoutera l'évènement 'quand le pointeur souris entre dans son périmètre' 
        s'il est effectivement survolé, il déclenche un comportement
        */
        par.addEventListener('mouseenter', function (enterP) {
            /* on affiche le contenu du paragraphe survolé dans la div ayant l'id pSurvol */
            //console.log(enterP);
            //console.log(enterP.target);
            pSurvol.innerHTML = par.innerHTML;
        });
    });

    /**
     * 
     * actions sur le tableau #jv
     * 
     */

    /* désactiver tous les liens du tableau */
    /* 1 - récupérer tous les liens du tablea #jv */
    let allTableLinks = document.querySelectorAll('#jv a');
    //console.log(allTableLinks);

    allTableLinks.forEach(function (link) {
        /* on récupère l'évènement du click dans la variable event */
        link.addEventListener('click', function (clickLienTableau) {
            /* on annule le comportement par défaut de ce click, ici il s'agit d'un lien donc le clic n'emmène vers la cible du lien */
            clickLienTableau.preventDefault();
            //console.log(event);
        });
    });

    let allTableRows = document.querySelectorAll('#jv tbody tr');

    allTableRows.forEach(function (jeuVideo) {
        jeuVideo.addEventListener('click', function () {
            document.getElementById('infoJeu').classList.remove('hidden');
            //console.log(jeuVideo.childNodes);
            /* on crée une variable tableau dans laquelle on ajoutera les information des td du tr */
            let tabInfosJeu = [];
            jeuVideo.childNodes.forEach(function (element) {
                if (element.nodeName === 'TD') {
                    //console.log(element.innerText);
                    tabInfosJeu.push(element.innerText);
                }
            });
            //console.log(tabInfosJeu);
            /* on retire le tbody du tableau de résultat */
            document.querySelector('#infoJeu tbody').remove();
            /* on appelle la fonction de création du tableau de résultat avec les données collectées dans le tableau tabInfosJeu */
            document.querySelector('#infoJeu').append(createJVRows(tabInfosJeu));
        });
    });

    window.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('infoJeu').classList.add('hidden');
        }
    });

    let search = document.querySelector('#search');
    search.addEventListener('keyup', function () {
        let tabInfosJeu = [];
        /* on récupère ce qui est écrit dans le champs id = search et on lepasse en minuscule */
        let searchLower = search.value.toLowerCase();
        /* si searchLower fait plus de 2 caractères de long, on lance la recherche */
        if (searchLower.length > 2) {
            //console.log(searchLower);
            /* on parcours toutes les lignes du tableau */
            allTableRows.forEach(function (jeuVideo) {
                /* on parcours tous les noeuds enfant de la ligne */
                jeuVideo.childNodes.forEach(function (value) {
                    /* quand un noeud enfant est une td */
                    if (value.nodeName === 'TD') {
                        /* si le contenu texte de la td possède une correspondance avec la recherche */
                        if (value.innerText.toLowerCase().indexOf(searchLower) >= 0) {
                            /* j'ajoute les 5 info du jeu dans tabInfos */
                            jeuVideo.childNodes.forEach(function (elem) {
                                if (elem.nodeName === 'TD') {
                                    tabInfosJeu.push(elem.innerText)
                                }
                            });
                            /* 
                            comme j'ai eu au moins une correspondance pour la recherche, 
                            et que j'ai déjà toutes les info du jeu qui correspond, 
                            je n'ai plus besoin de verifier les autre td de la ligne,
                            donc je stoppe le parcours de cette ligne, et le code passe à la suivante
                            */
                            return;
                        }
                    }
                });
            });
            //console.log(tabInfosJeu);
            let nbJeux = tabInfosJeu.length / 5;
            document.querySelector('#infoJeu tbody').remove();
            //console.log(createJVRows(tabInfosJeu, nbJeux));
            document.querySelector('#infoJeu').append(createJVRowsSearch(tabInfosJeu, nbJeux));
            document.querySelector('#infoJeu').classList.remove('hidden');
        }

    });

    /**
     * 
     * les attributs data ou dataset
     * 
     */
    /* on récupère dans une variable une collection d'élément qui sont : les paragraphes possèdant un attribut nommé data-module */
    let allPModule = document.querySelectorAll('p[data-module]');
    //console.log(allPModule);
    allPModule.forEach(function (paragraphe) {
        //console.log(paragraphe.dataset.module);
        switch (paragraphe.dataset.module) {
            case 'color':
                // code
                let color = paragraphe.dataset.color || '#ff0000';
                // gérer l'entrée de la souris sur le paragraphe
                paragraphe.addEventListener('mouseover', function () {
                    paragraphe.style.setProperty('color', color);
                });
                // gérer la sortie de la souris sur le paragraphe
                paragraphe.addEventListener('mouseleave', function () {
                    paragraphe.style.removeProperty('color');
                });
                break;
            case 'font':
            case 'magie':
                //code
                let weight = paragraphe.dataset.weight || '900';
                // gérer l'entrée de la souris sur le paragraphe
                paragraphe.addEventListener('mouseover', function () {
                    paragraphe.style.setProperty('font-weight', weight);
                });
                // gérer la sortie de la souris sur le paragraphe
                paragraphe.addEventListener('mouseleave', function () {
                    paragraphe.style.removeProperty('font-weight');
                });

                break;
            case 'after':
            default:
            // code par défaut, si on ne met rien il ne se passe rien
        }
    });

    /*
            grille "puissance 4"
            */

    // définir la première couleur
    let colorNow = 'rouge';
    document.querySelectorAll('#p4 th').forEach(function (tableCol) {
        let colonne = 0;
        tableCol.addEventListener('click', function () {
            colonne = this.dataset.col;
            for (i = 6; i > 0; i--) {
                let cell = document.querySelector(`td[data-col="${colonne}"][data-row="${i}"]`);
                if (!cell.classList.contains('rouge') && !cell.classList.contains('jaune')) {
                    cell.classList.add(colorNow);
                    colorNow = ('rouge' === colorNow) ? 'jaune' : 'rouge';
                    break;
                }
            }
        });
    });

});