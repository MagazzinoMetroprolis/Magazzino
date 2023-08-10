//prezzi


var prezzi = [
    { nome: "Medaglia_Souvenir", prezzo: 560, val: 1 },
    { nome: "Zaino_Desert", prezzo: 90, val: 1 },
    { nome: "Zaino_Camo", prezzo: 90, val: 1 },
    { nome: "Zaino_Tiratore", prezzo: 1960, val: 1 },
    { nome: "Glock_18", prezzo: 1960, val: 1 },
    { nome: "PDW_Desert", prezzo: 2240, val: 1 },
    { nome: "Assalto_Camo", prezzo: 2800 , val: 1},
    { nome: "Pistola_Antica", prezzo: 7500, val: 1 },
    { nome: "Evernit", prezzo: 160, val: 64 },
    { nome: "Caricatore_C02", prezzo: 160, val: 64 },
    { nome: "Caricatore_Green_Gas", prezzo: 240 , val: 64},
    { nome: "Sacchetto_di_pallini", prezzo: 360 , val: 64},
    { nome: "Sacchetto_di_pallini_023", prezzo: 520 , val: 64}
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

    
    Compere[0] = parseInt(document.getElementById("Medaglia_Souvenir").value);
    Compere[1] = parseInt(document.getElementById("Zaino_Desert").value);
    Compere[2] = parseInt(document.getElementById("Zaino_Camo").value);
    Compere[3] = parseInt(document.getElementById("Zaino_Tiratore").value);
    Compere[4] = parseInt(document.getElementById("Glock_18").value);
    Compere[5] = parseInt(document.getElementById("PDW_Desert").value);
    Compere[6] = parseInt(document.getElementById("Assalto_Camo").value);
    Compere[7] = parseInt(document.getElementById("Pistola_Antica").value);
    Compere[8] = parseInt(document.getElementById("Evernit").value);
    Compere[9] = parseInt(document.getElementById("Caricatore_C02").value);
    Compere[10] = parseInt(document.getElementById("Caricatore_Green_Gas").value);
    Compere[11] = parseInt(document.getElementById("Sacchetto_di_pallini").value);
    Compere[12] = parseInt(document.getElementById("Sacchetto_di_pallini_023").value);
    
    
    
    

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
                fattura+="- " + Compere[i];
                if(prezzi[i].val == 64)
                {
                    fattura+="x 64 ";
                }
                else
                {
                    fattura+="x 1 ";
                }
                fattura+=prezzi[i].nome + "<br>";
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