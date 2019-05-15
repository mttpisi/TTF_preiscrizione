let luogo=document.getElementById("inputLuogoNascita");
let nazione=document.getElementById("selectNazione");
let codiceFiscale=document.getElementById("inputCodiceFiscale");
let indirizzo=document.getElementById("inputIndirizzo");
let comune=document.getElementById("inputComune");
let cap=document.getElementById("inputCap");
let provincia=document.getElementById("selectProvincia");
let diploma=document.getElementById("selectDiploma");

document.getElementById("btnSubmit").addEventListener('click', function(click) {
    if(luogo.value=="" || luogo.value==null){
        document.getElementById("messaggioLuogoNascita").innerHTML="Inserisci il tuo luogo di nascita";
    }else{
        document.getElementById("messaggioLuogoNascita").innerHTML="";
    }

    if(nazione.value=="selectNazione"){
        document.getElementById("messaggioNazione").innerHTML="Seleziona la tua nazione";
    }else{
        document.getElementById("messaggioNazione").innerHTML="";
    }

    if(codiceFiscale.value=="" || codiceFiscale.value==null){
        document.getElementById("messaggioCodiceFiscale").innerHTML="Inserisci il tuo codice fiscale";
    }else{
        document.getElementById("messaggioCodiceFiscale").innerHTML="";
    }

    if(indirizzo.value=="" || indirizzo.value==null){
        document.getElementById("messaggioIndirizzo").innerHTML="Inserisci il tuo indirizzo";
    }else{
        document.getElementById("messaggioIndirizzo").innerHTML="";
    }

    if(comune.value=="" || comune.value==null){
        document.getElementById("messaggioComune").innerHTML="Inserisci il tuo comune";
    }else{
        document.getElementById("messaggioComune").innerHTML="";
    }

    if(cap.value=="" || cap.value==null){
        document.getElementById("messaggioCap").innerHTML="Inserisci il tuo CAP";
    }else{
        document.getElementById("messaggioCap").innerHTML="";
    }

    if(provincia.value=="selectProvincia"){
        document.getElementById("messaggioProvincia").innerHTML="Seleziona la tua provincia";
    }else{
        document.getElementById("messaggioProvincia").innerHTML="";
    }

    if(diploma.value=="selectDiploma"){
        document.getElementById("messaggioDiploma").innerHTML="Seleziona il tuo titolo di studio";
    }else{
        document.getElementById("messaggioDiploma").innerHTML="";
    }
})
