window.onload = ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById("redirectLink").href += "?inputToken=" + urlParams.get("inputToken");
}