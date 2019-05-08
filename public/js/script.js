
document.getElementById("inputCheck").addEventListener("invalid", function(){
    this.setCustomValidity("Assicurati di aver letto l'informativa sulla privacy")
});
document.getElementById("inputCheck").addEventListener("click", function(){
    this.setCustomValidity("")
});
document.getElementById("inputEmail").addEventListener("keypress", function(){
    this.setCustomValidity("");
});

function validaForm(){
    let iNome = document.getElementById("inputNome").checkValidity()
    let iCognome = document.getElementById("inputCognome").checkValidity();
    let iEmail = document.getElementById("inputEmail").checkValidity();
    let iTelefono = document.getElementById("inputTelefono").checkValidity();
    let iCheck = document.getElementById("inputCheck").checkValidity();
    
    if(iEmail){
        iEmail = false;
        let email = document.getElementById("inputEmail").value;
        let emailDom = "";
        console.log(email);
        for(i=0;i<email.length;i++){
            if(email[i] == "."){
                emailDom = email.substr(i+1,email.length);
                console.log(email);
            }
        }
        if(emailDom.length >= 2){
            iEmail = true;
            
        }
        if(iEmail = false){
            document.getElementById("inputEmail").setCustomValidity("Aggiungi un '.' seguito dal dominio dell'indirizzo email");
        }
    }

    if(iNome && iCognome && iEmail && iTelefono && iCheck){
        console.log(iEmail)
        return true;
    }else{
        return false;
    }
};

