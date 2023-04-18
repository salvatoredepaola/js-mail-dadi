const conferma = document.getElementById("conferma");



conferma.addEventListener("click", function(){

    const studenti = ["NOME"];

    let mail = document.getElementById("mail").value;

    for (let c = 0; c < studenti.length; c++) {
        if (mail == studenti[c]){
            console.log("bravo")
            document.getElementById("corretto").innerText = "Corretto"
            document.getElementById("errato").innerText = ""
        }else{
            console.error("male")
            document.getElementById("errato").innerText = "Riprova "
            document.getElementById("corretto").innerText = ""
        }
    }

} );
