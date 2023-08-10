//prezzi


var prezzi = [
    { nome: "Pipa", prezzo: 64, val: 1 },
    { nome: "Accendino", prezzo: 80, val: 1 },
    { nome: "Grinder", prezzo: 1000, val: 1 },
    { nome: "Erbaccia", prezzo: 480, val: 64 },
    { nome: "Radice_errata", prezzo: 720, val: 64 },
    { nome: "Radice_lumna", prezzo: 800, val: 64 },
    { nome: "Sigarette", prezzo: 20, val: 1 }
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

    
    Compere[0] = parseInt(document.getElementById("Pipa").value);
    Compere[1] = parseInt(document.getElementById("Accendino").value);
    Compere[2] = parseInt(document.getElementById("Grinder").value);
    Compere[3] = parseInt(document.getElementById("Erbaccia").value);
    Compere[4] = parseInt(document.getElementById("Radice_errata").value);
    Compere[5] = parseInt(document.getElementById("Radice_lumna").value);
    Compere[6] = parseInt(document.getElementById("Sigarette").value);
    
    
    
    
    

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