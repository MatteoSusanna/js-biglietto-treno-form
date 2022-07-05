const recuperoDati = document.getElementById('genera');


recuperoDati.addEventListener('click',

    function(){
        const nomeDom = document.getElementById('nomeCognome');
        const kilometriDom = document.getElementById('numeroKm');
        
        const riportaNome = document.getElementById('nome_Cognome');
        riportaNome.innerHTML = nomeDom.value;



        const costoBiglietto = document.getElementById('costoBiglietto')
        const tot = kilometriDom * 0.21;
        let totminori;
        let totover;

        if (eta < 18){
            totminori = ((tot - (tot * 20 / 100)));
            costoBiglietto.innerHTML = totminori.value
        
        } else if (eta > 65) {
            totover = ((tot - (tot * 40 / 100)));
            costoBiglietto.innerHTML = totover.value
        
        } else{
            costoBiglietto.innerHTML = tot
        }


    }
);






