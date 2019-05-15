function showField(field){
    if(document.getElementById(field).type=="password"){
        document.getElementById(field).type="text";
    }else{
        document.getElementById(field).type="password";
    }
}

function controllaAccount() {
    let inputPassword=document.getElementById("inputPassword"); 
    let inputConfermaPassword=document.getElementById("inputConfermaPassword");
    let uguali=true;
    

    
    inputErrorSignal(inputConfermaPassword,inputConfermaPassword.reportValidity());
    inputErrorSignal(inputPassword,inputPassword.reportValidity());

    if(inputPassword.value != inputConfermaPassword.value){
        inputErrorSignal(inputPassword,false);
        inputErrorSignal(inputConfermaPassword,false);
        inputConfermaPassword.setCustomValidity("Le password devono coincidere");
        uguali = false;
    }else{
        inputConfermaPassword.setCustomValidity("");
        inputErrorSignal(inputConfermaPassword,inputConfermaPassword.reportValidity());
    }

    if (inputPassword.reportValidity() && inputPassword.reportValidity() && uguali){
        let form={
            "password":inputPassword.value
        }

        const urlParams = new URLSearchParams(window.location.search);
        let token = urlParams.get("inputToken");

        fetch("http://localhost:3000/utentiPreiscritti/"+token,{method:"PATCH",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(form)})
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            document.getElementById("confermaForm").submit();
        });
    }   
}
