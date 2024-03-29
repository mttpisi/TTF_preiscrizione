document.getElementById("inputCheck").addEventListener("invalid", function () {
    this.setCustomValidity("Assicurati di aver letto l'informativa sulla privacy")
});
document.getElementById("inputCheck").addEventListener("click", function () {
    this.setCustomValidity("")
});
document.getElementById("inputEmail").addEventListener("keypress", function () {
    this.setCustomValidity("");
});

function validaForm() {
    let iCheck = document.getElementById("inputCheck").reportValidity();
    let iTelefono = document.getElementById("inputTelefono").reportValidity();
    let iEmail = document.getElementById("inputEmail").reportValidity();
    let iCognome = document.getElementById("inputCognome").reportValidity();
    let iNome = document.getElementById("inputNome").reportValidity();
    

    // controllo il nome
    inputErrorSignal(document.getElementById("inputNome"),iNome);
    // controllo cognome
    inputErrorSignal(document.getElementById("inputCognome"),iCognome);
    
    // controllo email
    if (iEmail) {
        iEmail = false;
        let email = document.getElementById("inputEmail").value;
        let emailDom = "";
        for (i = 0; i < email.length; i++) {
            if (email[i] == ".") {
                emailDom = email.substr(i + 1, email.length);
            }
        }
        if (emailDom.length >= 2) {
            iEmail = true;
        }
        if (!iEmail) {
            document.getElementById("inputEmail").setCustomValidity("Aggiungi un '.' seguito dal dominio dell'indirizzo email");
        }
    }
    inputErrorSignal(document.getElementById("inputEmail"),iEmail);
    // controllo telefono
    inputErrorSignal(document.getElementById("inputTelefono"),iTelefono);
    //controllo trattativa
    inputErrorSignal(document.getElementById("inputCheck"),iCheck);

    if(iNome && iCognome && iEmail && iTelefono && iCheck) {
        let form = {
            "id": Math.random(),
            "nome":document.getElementById("inputNome").value,
            "cognome":document.getElementById("inputCognome").value,
            "email":document.getElementById("inputEmail").value,
            "prefissoTel":document.getElementById("prefissoTel").value,
            "telefono":document.getElementById("inputTelefono").value,
            "informativa":document.getElementById("inputCheck").checked
        };
        
        
        fetch("http://localhost:3000/utentiPreiscritti/",{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(form)})
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            document.getElementById("mainForm").innerHTML+=`<input type="hidden" name="inputToken" value="${data.id}">`;
            document.getElementById("mainForm").submit();
        });
    }
}

