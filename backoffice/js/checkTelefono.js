document.getElementById("inputTelefono").addEventListener("keydown",function(){
    var charCode = (event.which) ? event.which : event.keyCode;
    console.log(charCode)
    if((charCode < 48 || charCode > 57) && charCode != 8 && charCode != 37 && charCode != 39){
        event.preventDefault();
    }
})