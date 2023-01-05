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

    console.log(headerPage);

    let allP = document.querySelectorAll('p');
    let pSurvol = document.querySelector('#pSurvol');
    console.log(allP);
    allP.forEach(function(par){
        par.addEventListener('mouseenter', function(){
            //par.style.color = '#f00';
            pSurvol.innerHTML = par.innerHTML;
        });
    });

});