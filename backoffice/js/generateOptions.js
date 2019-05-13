let ora = document.getElementById("oraOpenDay");
let minuti = document.getElementById("minutiOpenDay");
let option = document.createElement("option");
for(let i=1;i<=24;i++){
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    ora.appendChild(option);
}
for(let i=1;i<=60;i++){
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    minuti.appendChild(option);
}