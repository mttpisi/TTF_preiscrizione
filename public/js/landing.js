window.onload = ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("redirectLink").href += "?tokenForFetchData=" + urlParams.get("inputToken");
}