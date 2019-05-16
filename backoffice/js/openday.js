document.getElementById("nomeHeader").addEventListener("click",function(){
    toggleChevron(this)
});
document.getElementById("dataHeader").addEventListener("click",function(){
    toggleChevron(this)
});

function toggleChevron(node){
    node.childNodes[1].classList.toggle("fa-chevron-down");
    node.childNodes[1].classList.toggle("fa-chevron-up");
}

function btnToggle(flag){
    if(flag){
        document.getElementById("confermaAdd").classList.remove("d-none");
        document.getElementById("confermaMod").classList.add("d-none");
    }else{
        document.getElementById("confermaAdd").classList.add("d-none");
        document.getElementById("confermaMod").classList.remove("d-none");
    }
}


///////OPENDAY

function resetModalDati(){
    document.getElementById("formDatiOpenDay").reset();
}

let openDays;
getOpenDays();
function getOpenDays(){
    fetch("http://localhost:3000/openDay/",{method:"GET"})
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        openDays = data;
        generateOpenDayRows();
    });
}

function generateOpenDayRows(){
    for(let i=0;i<openDays.length;i++){
        document.getElementById("tableOpenDay").innerHTML+=createOpenDayRow(openDays[i]);
    }
}

function createOpenDayRow(datiOpenDay){
    const data = new Date(datiOpenDay.data);
    const openDayTableRow = `<div class="row tableRow" data-index="${datiOpenDay.id}">
    <div class="col-md-2 py-3 px-0 col"><p class="mt-3 nomeField">${datiOpenDay.titolo}</p></div>
    <div class="col-md-2 py-3 px-0 col"><p class="mt-3 dataField">${data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear()}</p></div>
    <div class="col-lg-8">
        <div class="row py-2">
        <button class="btn my-1 btn-light col btnModifica" onclick="modOpenDay(${datiOpenDay.id})" data-toggle="modal" data-target="#datiOpenDayModal">Modifica</button>
        <button class="btn my-1 btn-light col btnEsportaLista">Esporta lista partecipanti</button>
        <button class="btn my-1 btn-light col btnInserisciPresenze" onclick="getPresenze(${datiOpenDay.id})" data-toggle="modal" data-target="#presenzeModal">Inserisci presenze</button>
        <button class="btn my-1 btn-danger col btnEliminaOpenDay" onclick="delOpenDay(${datiOpenDay.id},this)">Elimina</button>
        </div>
    </div>
    </div>`;
    return openDayTableRow;
}

function addOpenDay(flag,indexOpenDay){
    let titolo = document.getElementById("inputNomeOpenDay");
    let dataOpen = document.getElementById("inputDataOpenDay");
    let ora = document.getElementById("oraOpenDay").value;
    let minuti = document.getElementById("minutiOpenDay").value;
    let luogo = document.getElementById("inputLuogoOpenDay");

    inputErrorSignal(luogo,luogo.reportValidity());

    if(ora == "false"){ora = false}
    if(minuti == "false"){minuti = false}
    inputErrorSignal(document.getElementById("minutiOpenDay"),minuti);
    inputErrorSignal(document.getElementById("oraOpenDay"),ora);

    inputErrorSignal(dataOpen,dataOpen.reportValidity());
    inputErrorSignal(titolo,titolo.reportValidity());

    
    if(titolo.reportValidity() && dataOpen.reportValidity() && ora && minuti && luogo.reportValidity()){
        if(flag){
            let form = {
                "titolo":titolo.value,
                "data":new Date(dataOpen.value),
                "ora":document.getElementById("oraOpenDay").value,
                "minuti":document.getElementById("minutiOpenDay").value,
                "luogo":luogo.value,
                "partecipanti":[]
            };
            fetch("http://localhost:3000/openDay/",{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(form)})
            .then((response)=>{
                return response.json();
            }).then((data)=>{
                document.getElementById("annulla").click();
                document.getElementById("tableOpenDay").innerHTML = "";
                getOpenDays();
            });  
        }else{
            let index = document.getElementById("confermaMod").dataset.index - 1;
            openDays[index].titolo = titolo.value;
            openDays[index].data = new Date(dataOpen.value);
            openDays[index].ora = document.getElementById("oraOpenDay").value;
            openDays[index].minuti = document.getElementById("minutiOpenDay").value;
            openDays[index].luogo = luogo.value;
            fetch("http://localhost:3000/openDay/"+openDays[index].id,{method:"PATCH",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(openDays[index])})
            .then((response)=>{
                return response.json();
            }).then((data)=>{
                document.getElementById("annullaDati").click();
                document.getElementById("tableOpenDay").innerHTML = "";
                getOpenDays();
            });
        }
    }
}

function modOpenDay(indexOpenDay){
    indexOpenDay -= 1;
    let data = new Date(openDays[indexOpenDay].data);
    let titolo = openDays[indexOpenDay].titolo;
    let ora = openDays[indexOpenDay].ora;
    let minuti = openDays[indexOpenDay].minuti;
    let luogo = openDays[indexOpenDay].luogo;
    document.getElementById("inputNomeOpenDay").value = titolo;
    document.getElementById("inputDataOpenDay").valueAsDate = data;
    document.getElementById("oraOpenDay").value = ora;
    document.getElementById("minutiOpenDay").value = minuti;
    document.getElementById("inputLuogoOpenDay").value = luogo;
    document.getElementById("confermaMod").dataset.index = openDays[indexOpenDay].id;
    btnToggle(false);
}


function delOpenDay(idOpenDay,button){
    fetch("http://localhost:3000/openDay/"+idOpenDay,{method:"DELETE"})
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        parentRow = button.parentNode.parentNode.parentNode;
        parentRow.parentNode.removeChild(parentRow);
    });
}

///////////PRESENZE

function resetModalPresenze(){
    document.getElementById("presenzeBody").innerHTML="";
    document.getElementById("presenzeBody").dataset.rifIdOpenDay="none";
}

let partecipanti;
function getPresenze(idOpenDay){
    resetModalPresenze();
    fetch("http://localhost:3000/openDay/"+idOpenDay,{method:"GET"})
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        partecipanti = data.partecipanti;
        generatePresenzeRows(idOpenDay);
    });
}

function generatePresenzeRows(rifIdOpenDay){
    for(let i=0;i<partecipanti.length;i++){
        document.getElementById("presenzeBody").dataset.rifIdOpenDay=rifIdOpenDay;
        document.getElementById("presenzeBody").innerHTML += createPresenzeRow(partecipanti[i]);
        if(partecipanti[i].presente){
            document.getElementById("checkOf"+partecipanti[i].id).disabled = true;
            document.getElementById("checkOf"+partecipanti[i].id).checked = true; 
        }
    }
}

function createPresenzeRow(partecipante){
    const presenzeRow = `<tr class="row">
    <td class="col-3">${partecipante.nome}</td>
    <td class="col-3">${partecipante.cognome}</td>
    <td class="col-4">${partecipante.email}</td>
    <td class="col-2">
        <div class="form-group">
            <div class="form-check justify-content-center">
                <input class="form-check-input mx-3" id="checkOf${partecipante.id}" type="checkbox" >
            </div>
        </div>
    </td>
    </tr>`;
    return presenzeRow;
}

function confirmPresenze(){
    let checkboxes = document.getElementById("presenzeBody").getElementsByTagName("input");
    for(let i=0;i<partecipanti.length;i++){
        console.log(checkboxes[i])
        if(checkboxes[i].checked){
            partecipanti[i].presente = true;
        }
    }
    let presenze = {
        "partecipanti":partecipanti
    }
    console.log(presenze)
    let id = document.getElementById("presenzeBody").dataset.rifIdOpenDay;
    fetch("http://localhost:3000/openDay/"+id,{method:"PATCH",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(presenze)})
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        document.getElementById("annullaPresenze").click();
    });
}