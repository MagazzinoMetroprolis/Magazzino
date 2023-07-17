//prezzi


var prezzi = [
    { nome: "hotdog", prezzo: 40 },
    { nome: "Sushi", prezzo: 160 },
    { nome: "Hamburger", prezzo: 160 },
    { nome: "Pane", prezzo: 160 },
    { nome: "Tacos", prezzo: 160 },
    { nome: "Gelati", prezzo: 160 },
    { nome: "Ghiaccioli", prezzo: 160 },
    { nome: "Succhi_di_frutta", prezzo: 240 },
    { nome: "Pringles", prezzo: 240 },
    { nome: "Pepsi", prezzo: 280 },
    { nome: "Caffe", prezzo: 80 },
    { nome: "Caffe_Macchiato", prezzo: 80 },
    { nome: "Milkshake", prezzo: 160 },
    { nome: "Gin_Lemon", prezzo: 240 },
    { nome: "Birra", prezzo: 400 },
    { nome: "Blue_Angel", prezzo: 480 },
    { nome: "Mojito", prezzo: 480 },
    { nome: "Codeina", prezzo: 760 },
    { nome: "Vodka", prezzo: 760 },
    { nome: "Whisky", prezzo: 760 },
    { nome: "Kebab", prezzo: 70},
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

    
    Compere[0] = parseInt(document.getElementById("hotdog").value);
    Compere[1] = parseInt(document.getElementById("Sushi").value);
    Compere[2] = parseInt(document.getElementById("Hamburger").value);
    Compere[3] = parseInt(document.getElementById("Pane").value);
    Compere[4] = parseInt(document.getElementById("Tacos").value);
    Compere[5] = parseInt(document.getElementById("Gelati").value);
    Compere[6] = parseInt(document.getElementById("Ghiaccioli").value);
    Compere[7] = parseInt(document.getElementById("Succhi_di_frutta").value);
    Compere[8] = parseInt(document.getElementById("Pringles").value);
    Compere[9] = parseInt(document.getElementById("Pepsi").value);
    Compere[10] = parseInt(document.getElementById("Caffe").value);
    Compere[11] = parseInt(document.getElementById("Caffe_Macchiato").value);
    Compere[12] = parseInt(document.getElementById("Milkshake").value);
    Compere[13] = parseInt(document.getElementById("Gin_Lemon").value);
    Compere[14] = parseInt(document.getElementById("Birra").value);
    Compere[15] = parseInt(document.getElementById("Blue_Angel").value);
    Compere[16] = parseInt(document.getElementById("Mojito").value);
    Compere[17] = parseInt(document.getElementById("Codeina").value);
    Compere[18] = parseInt(document.getElementById("Vodka").value);
    Compere[19] = parseInt(document.getElementById("Whisky").value);
    Compere[20] = parseInt(document.getElementById("Kebab").value);

    
    
    
    

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
                fattura+="- " + Compere[i] +"x 64 " + prezzi[i].nome + "<br>";
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