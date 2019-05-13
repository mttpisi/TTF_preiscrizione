
function controllaAccount() {

                //controllo che inputPassword sia uguale inputConfermaPassword.
                // In caso contrario alerto l'utente 

                let inputPassword=document.getElementById("inputPassword") 
                let inputConfermaPassword=document.getElementById("inputConfermaPassword")

                if (inputPassword.value == ""){
        
                alert("inserisci password!")
                }else if (inputPassword.value!= inputConfermaPassword.value){
                alert("la password inserita non coincide con la prima!")
            
                console.log(password)
            
                //verifico che le due password siano uguali
                if (inputPassword.value = inputConfermaPassword.value){
                alert("password inserita correttamente!")

                // controllo che i campi inputPassword e inputConfermaPassword non siano vuoti
                if (inputPassword.inputConfermaPassword == "" ){
                alert("campo vuoto")

                }
            }
        }
    }
