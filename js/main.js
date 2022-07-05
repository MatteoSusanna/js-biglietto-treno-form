const recuperoDati = document.getElementById('genera');


recuperoDati.addEventListener('click',

    function(){
        const nomeDom = document.getElementById('nomeCognome');
        const kilometriDom = parseInt(document.getElementById('numeroKm').value);
        const etaDom = document.getElementById('eta');

        
        const riportaNome = document.getElementById('nome_Cognome');
        riportaNome.innerHTML = nomeDom.value;



        let costoBiglietto = document.getElementById('costoBiglietto');

        
        const tot = kilometriDom * 0.21;
        let totminori;
        let totover;


        if (etaDom < 18){
            totminori = ((tot - (tot * 20 / 100)));
            costoBiglietto.innerHTML = totminori.toFixed(2);
        
        } else if (etaDom > 65) {
            totover = ((tot - (tot * 40 / 100)));
            costoBiglietto.innerHTML = totover.toFixed(2);
        
        } else{
            costoBiglietto.innerHTML = tot.toFixed(2);
        }


    }
);






