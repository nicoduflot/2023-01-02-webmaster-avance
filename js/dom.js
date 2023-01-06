

window.addEventListener('DOMContentLoaded', function(){
    console.log('maintenant que le dom est chargé, on peut manipuler la page');
    let paragraphe = document.getElementById('paragraphe');
    console.log(paragraphe);
    console.log(paragraphe.innerHTML);
    console.log(paragraphe.innerText);
    console.log(paragraphe.childNodes);
    console.log(paragraphe.parentNode);
    console.log(paragraphe.parentNode.childNodes);
    paragraphe.parentNode.childNodes.forEach(function(element){
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
    allP.forEach(function(par){
        /* 
        chaque paragraphe écoutera l'évènement 'quand le pointeur souris entre dans son périmètre' 
        s'il est effectivement survolé, il déclenche un comportement
        */
        par.addEventListener('mouseenter', function(enterP){
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
    
    allTableLinks.forEach(function(link){
        /* on récupère l'évènement du click dans la variable event */
        link.addEventListener('click', function(clickLienTableau){
            /* on annule le comportement par défaut de ce click, ici il s'agit d'un lien donc le clic n'emmène vers la cible du lien */
            clickLienTableau.preventDefault();
            //console.log(event);
        });
    });

    let allTableRows = document.querySelectorAll('#jv tbody tr');

    allTableRows.forEach(function(jeuVideo){
        jeuVideo.addEventListener('click', function(){
            document.getElementById('infoJeu').classList.remove('hidden');
            //console.log(jeuVideo.childNodes);
            jeuVideo.childNodes.forEach(function(element){
                if(element.nodeName === 'TD'){
                    //console.log(element.innerText);
                }
            });
        });
    });


});