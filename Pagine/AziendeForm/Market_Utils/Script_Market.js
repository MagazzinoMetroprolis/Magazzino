//prezzi


var prezzi = [
    { nome: "Completo_Adidas", prezzo: 3360, val: 1 },
    { nome: "Completo_Vetemens", prezzo: 4000, val: 1 },
    { nome: "Completo_Supreme", prezzo: 6720, val: 1 },
    { nome: "Completo_Louis_Vuitton", prezzo: 10100, val: 1 },
    { nome: "Completo_Gucci", prezzo: 13440, val: 1 },
    { nome: "Completo_Octopus", prezzo: 13440, val: 1 },
    { nome: "Completo_Scheletro", prezzo: 13440, val: 1 },
    { nome: "Completo_Creeper", prezzo: 13440, val: 1 },
    { nome: "Completo_Chanel", prezzo: 13440, val: 1 },
    { nome: "Cappello_Elegante", prezzo: 1345, val: 1 }, 
    { nome: "Giacca_Burberry", prezzo: 560, val: 1 }, 
    { nome: "Jeans_Zara", prezzo: 560, val: 1 },
    { nome: "Pantaloni_Cargo", prezzo: 560, val: 1 },
    { nome: "Pantaloni_Denim_Levis", prezzo: 560, val: 1 },
    { nome: "Scarpe_Balenciaga", prezzo: 560, val: 1 },
    { nome: "Scarpe_Dr_Martens", prezzo: 560, val: 1 },
    { nome: "Scarpe_Fila", prezzo: 560, val: 1 },
    { nome: "Scarpe_Golden_Goose", prezzo: 560, val: 1 },
    { nome: "Scarpe_Golf_Le_Fleur", prezzo: 560, val: 1 },
    { nome: "Scarpe_Lelly_Kelly", prezzo: 3360, val: 1 },
    { nome: "Porta_Pregiata_1", prezzo: 560, val: 1 },
    { nome: "Porta_Pregiata_2", prezzo: 560, val: 1 },
    { nome: "Porta_Pregiata_3", prezzo: 560, val: 1 },
    { nome: "Porta_Pregiata_4", prezzo: 560, val: 1 },
    { nome: "Cuffie_Gaming", prezzo: 560, val: 1 },
    { nome: "Quadro", prezzo: 960, val: 1 },
    { nome: "Nintendo_Switch", prezzo: 1345, val: 1 },
    { nome: "Televisore", prezzo: 1345, val: 1 },
    { nome: "Orologio_Antico", prezzo: 1400, val: 1 },
    { nome: "Blocco_di_Lapislazzuli", prezzo: 1280, val: 1 },
    { nome: "Blocco_di_Diamante", prezzo: 2240, val: 1 },
    { nome: "Blocco_di_Smeraldo", prezzo: 2560, val: 1 },
    { nome: "Giradischi_Antico", prezzo: 5375, val: 1 },
    { nome: "Mazza_da_Collezione", prezzo: 280, val: 1 },
    { nome: "Katana_da_Collezione", prezzo: 3360, val: 1 },
    { nome: "Coltellino_da_Collezione", prezzo: 4360, val: 1 },
    { nome: "Pistola_da_Collezione", prezzo: 5700, val: 1 },
    { nome: "Zaino_Normale", prezzo: 40, val: 1 },
    { nome: "Zaino_Arcobaleno", prezzo: 64, val: 1 },
    { nome: "Zaino_Adidas", prezzo: 560, val: 1 },
    { nome: "Zaino_Eastpack", prezzo: 560, val: 1 },
    { nome: "Zaini_Calcio_Serie_A", prezzo: 560, val: 1 },
    { nome: "Zaino_Lelly_Kelly", prezzo: 1100, val: 1 },
    { nome: "Zaino_Trapstar", prezzo: 11020, val: 1 },
    { nome: "Zaino_Nike", prezzo: 1120, val: 1 },
    { nome: "Zaino_Lanvin", prezzo: 1120, val: 1 },
    { nome: "Zaino_Supreme", prezzo: 1345, val: 1 },
    { nome: "Zaino_Gucci", prezzo: 2016, val: 1 },
    { nome: "Cappello", prezzo: 12000, val: 64 },
    { nome: "Pettorina", prezzo: 40000, val: 64 },
    { nome: "Pantaloni", prezzo: 32000, val: 64 },
    { nome: "Piedini", prezzo: 24000, val: 64 }
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

    
    var Compere = [];

Compere[0] = parseInt(document.getElementById("Completo_Adidas").value);
Compere[1] = parseInt(document.getElementById("Completo_Vetemens").value);
Compere[2] = parseInt(document.getElementById("Completo_Supreme").value);
Compere[3] = parseInt(document.getElementById("Completo_Louis_Vuitton").value);
Compere[4] = parseInt(document.getElementById("Completo_Gucci").value);
Compere[5] = parseInt(document.getElementById("Completo_Octopus").value);
Compere[6] = parseInt(document.getElementById("Completo_Scheletro").value);
Compere[7] = parseInt(document.getElementById("Completo_Creeper").value);
Compere[8] = parseInt(document.getElementById("Completo_Chanel").value);
Compere[9] = parseInt(document.getElementById("Cappello_Elegante_Giacca_Burberry").value);
Compere[10] = parseInt(document.getElementById("Giacca_Burberry").value);
Compere[11] = parseInt(document.getElementById("Jeans_Zara").value);
Compere[12] = parseInt(document.getElementById("Pantaloni_Cargo").value);
Compere[13] = parseInt(document.getElementById("Pantaloni_Denim_Levis").value);
Compere[14] = parseInt(document.getElementById("Scarpe_Balenciaga").value);
Compere[15] = parseInt(document.getElementById("Scarpe_Dr_Martens").value);
Compere[16] = parseInt(document.getElementById("Scarpe_Fila").value);
Compere[17] = parseInt(document.getElementById("Scarpe_Golden_Goose").value);
Compere[18] = parseInt(document.getElementById("Scarpe_Golf_Le_Fleur").value);
Compere[19] = parseInt(document.getElementById("Scarpe_Lelly_Kelly").value);
Compere[20] = parseInt(document.getElementById("Porta_Pregiata_1").value);
Compere[21] = parseInt(document.getElementById("Porta_Pregiata_2").value);
Compere[22] = parseInt(document.getElementById("Porta_Pregiata_3").value);
Compere[23] = parseInt(document.getElementById("Porta_Pregiata_4").value);
Compere[24] = parseInt(document.getElementById("Cuffie_Gaming").value);
Compere[25] = parseInt(document.getElementById("Quadro").value);
Compere[26] = parseInt(document.getElementById("Nintendo_Switch").value);
Compere[27] = parseInt(document.getElementById("Televisore").value);
Compere[28] = parseInt(document.getElementById("Orologio_Antico").value);
Compere[29] = parseInt(document.getElementById("Blocco_di_Lapislazzuli").value);
Compere[30] = parseInt(document.getElementById("Blocco_di_Diamante").value);
Compere[31] = parseInt(document.getElementById("Blocco_di_Smeraldo").value);
Compere[32] = parseInt(document.getElementById("Giradischi_Antico").value);
Compere[33] = parseInt(document.getElementById("Mazza_da_Collezione").value);
Compere[34] = parseInt(document.getElementById("Katana_da_Collezione").value);
Compere[35] = parseInt(document.getElementById("Coltellino_da_Collezione").value);
Compere[36] = parseInt(document.getElementById("Pistola_da_Collezione").value);
Compere[37] = parseInt(document.getElementById("Taccuino_Normale").value);
Compere[38] = parseInt(document.getElementById("Zaino_Arcobaleno").value);
Compere[39] = parseInt(document.getElementById("Zaino_Adidas").value);
Compere[40] = parseInt(document.getElementById("Zaino_Eastpack").value);
Compere[41] = parseInt(document.getElementById("Zaini_Calcio_Serie_A").value);
Compere[42] = parseInt(document.getElementById("Zaino_Lelly_Kelly").value);
Compere[43] = parseInt(document.getElementById("Zaino_Trapstar").value);
Compere[44] = parseInt(document.getElementById("Zaino_Nike").value);
Compere[45] = parseInt(document.getElementById("Zaino_Lanvin").value);
Compere[46] = parseInt(document.getElementById("Zaino_Supreme").value);
Compere[47] = parseInt(document.getElementById("Zaino_Gucci").value);
Compere[48] = parseInt(document.getElementById("Cappello").value);
Compere[49] = parseInt(document.getElementById("Pettorina").value);
Compere[50] = parseInt(document.getElementById("Pantaloni").value);
Compere[51] = parseInt(document.getElementById("Piedini").value);



    
    

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
                else if(prezzi[i].val == 16)
                {
                    fattura+="x 16 ";
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

