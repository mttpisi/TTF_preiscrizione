function validaAnagrafica() {
    let sessi=document.getElementsByName("sesso");
    let dataDiNascita=document.getElementById("inputDataNascita");
    let luogo=document.getElementById("inputLuogoNascita");
    let codiceFiscale=document.getElementById("inputCodiceFiscale");
    let indirizzo=document.getElementById("inputIndirizzo");
    let comune=document.getElementById("inputComune");
    let cap=document.getElementById("inputCap");

    
    let nazione=document.getElementById("selectNazione").value;
    let provincia=document.getElementById("selectProvincia").value;
    let diploma=document.getElementById("selectTitoloDiStudio").value;
    if(nazione == "false"){nazione = false}
    if(provincia == "false"){provincia = false}
    if(diploma == "false"){diploma = false}

    inputErrorSignal(document.getElementById("selectTitoloDiStudio"),diploma);
    inputErrorSignal(document.getElementById("selectProvincia"),provincia);
    inputErrorSignal(document.getElementById("selectNazione"),nazione);

    inputErrorSignal(cap,cap.reportValidity());
    inputErrorSignal(comune,comune.reportValidity());
    inputErrorSignal(indirizzo,indirizzo.reportValidity());
    inputErrorSignal(codiceFiscale,codiceFiscale.reportValidity());
    inputErrorSignal(luogo,luogo.reportValidity());
    inputErrorSignal(dataDiNascita,dataDiNascita.reportValidity());
    if(sessi[0].checked){
        setRadios(sessi);
        sessi = sessi[0];
    }else if(sessi[1].checked){
        setRadios(sessi);
        sessi = sessi[1];
    }else{
        setRadios(sessi);
    }




    if(nazione && provincia && diploma && sessi && dataDiNascita.reportValidity() && cap.reportValidity() && comune.reportValidity() && indirizzo.reportValidity() && codiceFiscale.reportValidity() && luogo.reportValidity()){
        let form = {
            "luogo":luogo.value,
            "codiceFiscale":codiceFiscale.value,
            "indirizzo":indirizzo.value,
            "comune":comune.value,
            "cap":cap.value,
            "nazione":nazione,
            "provincia":provincia,
            "diploma":diploma
        }
        const urlParams = new URLSearchParams(window.location.search);
        let token = urlParams.get("inputToken");
        
        fetch("http://localhost:3000/utentiPreiscritti/"+token,{method:"PATCH",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(form)})
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            document.getElementById("anagraficaForm").innerHTML+=`<input type="hidden" name="inputToken" value="${token}">`;
            document.getElementById("anagraficaForm").submit();
        });
    }
}

function setRadios(radios){
    inputErrorSignal(radios[0],radios[0].reportValidity());
    inputErrorSignal(radios[1],radios[1].reportValidity());
}