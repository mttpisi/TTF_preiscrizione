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

function generateOpenDayRow(){
    //CONNETTERSI AL DB

    let datiOpenDay = {
        titolo:"NomeOpenDay",
        data: new Date,
        luogo:"Milano",
        id: 12345
    }
    let opens = [datiOpenDay,datiOpenDay,datiOpenDay];
    for(let i=0;i<opens.length;i++){
        document.getElementById("tableOpenDay").innerHTML+=createOpenDayRow(datiOpenDay,i);
    }
    

}

function createOpenDayRow(datiOpenDay,index){
    const openDayTableRow = `<div class="row tableRow" data-index="${index}">
    <div class="col-md-2 py-3 px-0 col nomeField"><p class="mt-3">${datiOpenDay.titolo}</p></div>
    <div class="col-md-2 py-3 px-0 col dataField"><p class="mt-3">${datiOpenDay.data.getDate() + "/" + (datiOpenDay.data.getMonth()+1) + "/" + datiOpenDay.data.getFullYear()}</p></div>
    <div class="col-lg-8">
        <div class="row py-2">
        <button class="btn my-1 btn-light col btnModifica" data-toggle="modal" data-target="#datiOpenDayModal">Modifica</button>
        <button class="btn my-1 btn-light col btnEsportaLista">Esporta lista partecipanti</button>
        <button class="btn my-1 btn-light col btnInserisciPresenze" data-toggle="modal" data-target="#presenzeModal">Inserisci presenze</button>
        <button class="btn my-1 btn-danger col btnEliminaOpenDay" onclick="eliminaOpenDay(this)">Elimina</button>
        </div>
    </div>
    </div>`;
    return openDayTableRow;
}

function eliminaOpenDay(button){
    let parentRow = button.parentNode.parentNode.parentNode;
    console.log(parentRow.dataset.index);
    //CONNETTERSI AL DATABASE E ELIMINARE LA ENTRY
    parentRow.parentNode.removeChild(parentRow);
}