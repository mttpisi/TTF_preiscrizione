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
    console.log("start");
    let iNome = document.getElementById("inputNome").checkValidity()
    let iCognome = document.getElementById("inputCognome").checkValidity();
    let iEmail = document.getElementById("inputEmail").checkValidity();
    let iTelefono = document.getElementById("inputTelefono").checkValidity();
    let iCheck = document.getElementById("inputCheck").checkValidity();

    
    let bool_Nome = true;
    let bool_Cognome = true; 
    let bool_Email = true; 
    let bool_Telefono = true;
    let bool_Check = true;


    // controllo il nome
    let ifNome = document.getElementById('inputNome').value;
    if (ifNome == "" || ifNome == null) {
        document.getElementById('inputNome').style.borderColor = "#cc0000";
        document.getElementById('inputNome').style.boxShadow = "0 0 0 0.2rem rgb(255, 26, 26,.25)";
        bool_Nome = false;
    }
    // controllo cognome
    let ifCognome = document.getElementById('inputCognome').value;
    if (ifCognome == "" || ifCognome == null) {
        document.getElementById('inputCognome').style.borderColor = "#cc0000";
        document.getElementById('inputCognome').style.boxShadow = "0 0 0 0.2rem rgb(255, 26, 26,.25)";
        bool_Cognome = false;
    }
    

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
        if (iEmail = false) {
            document.getElementById("inputEmail").setCustomValidity("Aggiungi un '.' seguito dal dominio dell'indirizzo email");
        }
    }
// controllo telefono
if (iTelefono == "" || iTelefono == null){
    //document.getElementById('telefono-spazio').innerHTML = "Campo non corretto";
    document.getElementById('inputTelefono').style.borderColor = "#cc0000";
    document.getElementById('inputTelefono').style.boxShadow = "0 0 0 0.2rem rgb(255, 26, 26,.25)";
    //document.getElementById('telefono-spazio').style.color = "#cc0000";
    b_telefono = false;
} else if (isNaN(telefono)){
    //document.getElementById('telefono-spazio').innerHTML = "Hai inserito un carattere non numerico";
    document.getElementById('inputTelefono').style.borderColor = "#cc0000";
    document.getElementById('inputTelefono').style.boxShadow = "0 0 0 0.2rem rgb(255, 26, 26 ,.25)";
    //document.getElementById('telefono-spazio').style.color = "#cc0000";
    b_telefono = false;
}
    //controllo che la checkbox sia flaggata
    if (!document.getElementById('inputCheck'))






    fetch("http://localhost.3000/preregister)

        if (iNome && iCognome && iEmail && iTelefono && iCheck) {
            console.log(iEmail)
            return true;
        } else {
            return false;
        }
    };