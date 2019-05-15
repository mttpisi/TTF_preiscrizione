function inputErrorSignal(input,error){
    if(!error){
        input.style.borderColor = "#cc0000";
        input.style.boxShadow = "0 0 0 0.2rem rgb(255, 26, 26,.25)";
    }else{
        input.style.boxShadow = "none";
        input.style.borderColor = "#ced4da";
    }
}