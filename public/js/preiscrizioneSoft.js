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
    let iNome = document.getElementById("inputNome").checkValidity()
    let iCognome = document.getElementById("inputCognome").checkValidity();
    let iEmail = document.getElementById("inputEmail").checkValidity();
    let iTelefono = document.getElementById("inputTelefono").checkValidity();
    let iCheck = document.getElementById("inputCheck").checkValidity();

    // controllo il nome
    inputErrorSignal(document.getElementById("inputNome"),iNome);
    // controllo cognome
    inputErrorSignal(document.getElementById("inputCognome"),iCognome);
    
    // controllo email
    if (iEmail) {
        iEmail = false;
        let email = document.getElementById("inputEmail").value;
        let emailDom = "";
        console.log(email);
        for (i = 0; i < email.length; i++) {
            if (email[i] == ".") {
                emailDom = email.substr(i + 1, email.length);
                console.log(email);
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
            "nome":document.getElementById("inputNome").value,
            "cognome":document.getElementById("inputCognome").value,
            "email":document.getElementById("inputEmail").value,
            "prefissoTel":document.getElementById("prefissoTel"),
            "telefono":document.getElementById("inputTelefono").value,
            "informativa":document.getElementById("inputCheck").checked
        };
        
        /* requestToken(form,function(json){token = json.token;console.log(token)}); */
        fetch("http://localhost:3000/preregister",{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(form)})
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            console.log(json)
            document.getElementById("mainForm").innerHTML+=`<input type="hidden" name="inputToken" value="${json.token}">`;
            document.getElementById("mainForm").submit();
        });
    }
}

/* async function requestToken(form,callback){
    let response = await fetch("http://localhost:3000/preregister",{method: "POST",headers: { "Accept":"application/json","Content-Type":"application/json" },body: JSON.stringify(form)});
    let tokenOBJ = await response.json();
    await callback(tokenOBJ);
}; */

function inputErrorSignal(input,error){
    if(!error){
        input.style.borderColor = "#cc0000";
        input.style.boxShadow = "0 0 0 0.2rem rgb(255, 26, 26,.25)";
    }else{
        input.style.boxShadow = "none";
        input.style.borderColor = "#ced4da";
    }
}