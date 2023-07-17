//prezzi


var prezzi = [
    { nome: "Bracciale_Vittoriano", prezzo: 560 },
    { nome: "Fede_nunziale", prezzo: 2320 },
    { nome: "Orologio", prezzo: 4960 },
    { nome: "Bracciale_Argento", prezzo: 4960},
    { nome: "Anello_diamante", prezzo: 5760 },
    { nome: "Bracciale_oro", prezzo: 13200 },
    { nome: "Rolex_cuoio", prezzo: 13200 },
    { nome: "Rolex_oro", prezzo: 19200 },
    { nome: "Completo_LGBT", prezzo: 3360 },
    { nome: "Divino_Rosso", prezzo: 25000 },
    { nome: "Divino_Nero", prezzo: 35200 },
    { nome: "Divino_Azzurro", prezzo: 49600 }
  ];
  




//variabili utili


var prezzo_Finale = 0;
var valoreCliente;
var valoreAzienda;
var valoreDataOra;
var valoreNumeroFattura;

var Compere = [];

function calcolaFattura() {


    prezzo_Finale = 0;
    
    //Dati

    valoreCliente = document.getElementById("cliente").value;
    valoreAzienda = document.getElementById("azienda").value;
    valoreDataOra = document.getElementById("data_ora").value;
    valoreNumeroFattura = document.getElementById("numero_fattura").value;
    
    //valori

    
    Compere[0] = parseInt(document.getElementById("Bracciale_Vittoriano").value);
    Compere[1] = parseInt(document.getElementById("Fede_nunziale").value);
    Compere[2] = parseInt(document.getElementById("Orologio").value);
    Compere[3] = parseInt(document.getElementById("Bracciale_Argento").value);
    Compere[4] = parseInt(document.getElementById("Anello_diamante").value);
    Compere[5] = parseInt(document.getElementById("Bracciale_oro").value);
    Compere[6] = parseInt(document.getElementById("Rolex_cuoio").value);
    Compere[7] = parseInt(document.getElementById("Rolex_oro").value);
    Compere[8] = parseInt(document.getElementById("Completo_LGBT").value);
    Compere[9] = parseInt(document.getElementById("Divino_Rosso").value);
    Compere[10] = parseInt(document.getElementById("Divino_Nero").value);
    Compere[11] = parseInt(document.getElementById("Divino_Azzurro").value);
    
    
    
    

    for(i = 0; i<Compere.length; i++)
    {
        if(Compere[i]!=0)
        {
            prezzo_Finale+=Compere[i]*prezzi[i].prezzo;
        }
    }

    if(prezzo_Finale>=5000)
    {
        document.getElementById("esito").innerHTML = prezzo_Finale +"€<Br> L' ordine è valido"
        document.getElementById("gen").style.visibility = "visible";
    }
    else
    {
        document.getElementById("esito").innerHTML = prezzo_Finale +"€<Br> L' ordine non è valido"
    }


}

var fattura = "";
function genWrite()
{
    if(valoreAzienda != "" && valoreCliente != "" && valoreDataOra != "" && valoreNumeroFattura != "")
    {
        a = 30;
        fattura = "(Pagina 1) <br> §1§lFATTURA <Br> §1§oMagazzini<br><br>§8Cliente§0<br>" + valoreCliente + "<br><br>§8Azienda§0<br>" + valoreAzienda + "<br><br>Data e Ora<br>" + valoreDataOra + "<br><br>(Pagina 2)<br>§1§lFATTURA§1 <br> §oMagazzini <br><br>§8Prodotti acquistati§0<br>"
    
        for(i = 0; i< Compere.length; i++)
        {
            if(Compere[i]!=0)
            {
                fattura+="- " + Compere[i] +"x 1 " + prezzi[i].nome + "<br>";
                a++;
            }
        }
        fattura+="<br>§9Importo totale<br>§9$ §9§l" + prezzo_Finale;
        genScrontrino();
        mostraFact(a);
    }
    else
    {
        alert("Manca almeno un valore obbligatorio");
        document.getElementById("esito").innerHTML = "";
        document.getElementById("gen").style.visibility = "hidden";
    }

    
}

var scontrino = "";
function genScrontrino()
{
    scontrino = "/scontrino Magazzini " + prezzo_Finale + "  " + valoreCliente + " Rifornimento #";
    if(valoreNumeroFattura.length == 3)
    {
        scontrino+= valoreNumeroFattura;
    }  
    else if(valoreNumeroFattura.length == 2)
    {
        scontrino+= "0" + valoreNumeroFattura;
    }
    else
    {
        scontrino+= "00" + valoreNumeroFattura;
    }

    scontrino+=" ( " + valoreDataOra + " )";

}

function mostraFact(a)
{
    document.getElementById("Fact").innerHTML = fattura;
    document.getElementById("sc").innerHTML = scontrino;
    for(i = -2; i<a; i++)
    {
        document.getElementById("form").innerHTML+="<br>"
    }
}


function Cscontrino() {
    if(scontrino.length>0)
    {
        navigator.clipboard.writeText(scontrino)
        .then(function() {
          alert("Scontrino copiato negli appunti!");
        })
        .catch(function(error) 
        {
          alert("Errore durante la copia negli appunti. Si prega di copiare manualmente.");
        });
    }
    else
    {
        alert("Genera prima lo scontrino");
    }
}

