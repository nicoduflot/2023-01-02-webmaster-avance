function tableauRes(donnees){
    let entete = '<tr>';
    let lignes = '';
    let premierTour = true;
    donnees.forEach(function(item){
        //console.log(item);
        lignes = lignes + '<tr>';
        for(clef in item){
            if(typeof(item[clef]) !== 'object'){
                //console.log(clef);
                if(premierTour){
                    entete = entete + `<th>${clef}</th>`;
                }
                //console.log(item[clef]);
                lignes = lignes + `<td>${item[clef]}</td>`;
            }
        }
        premierTour = false;
        lignes = lignes + '</tr>';
    });
    entete = entete + '</tr>';
    //console.log(entete);
    return entete+lignes;
}

window.addEventListener('DOMContentLoaded', function () {
    /* on va ajouter dans la variable buttonsJson la collection des boutons ayant la classe read */
    let buttonsJson = document.querySelectorAll('button.read');
    /* on parcours la collection et on s'intéresse à chaque bouton */
    buttonsJson.forEach(function(button){
        /* écouter l'évènement click sur le bouton actuel */
        button.addEventListener('click', function(){
            /* ce qui se passe quand le bouton est cliqué */
            //console.log(button.dataset.url);
            let resultTBody = '';
            fetch(button.dataset.url)
            .then(function(reponse){
                return reponse.json();
            })
            .then( function(reponseJson){
                //console.log(reponseJson);
                resultTBody = tableauRes(reponseJson);
                //console.log(resultTBody);
                document.querySelector('#result').innerHTML = resultTBody;
            })
            .catch(function(erreur){
                //console.error('Il y a un problème \n', erreur);
                document.querySelector('#result').innerHTML = `
<tr>
    <td>
            <p>
                Il y a une erreur pour la requête demandé
            </p>
            <p>
                ${erreur}
            </p>
    </td>
</tr>
                `;
            })
            .finally(function(){
                console.log(`requête vers la ressource ${button.dataset.url} terminée`);
            });

        });
    });
});