
function lagBillet(){
    document.getElementById("fornavnVarsel").innerHTML ="";
    document.getElementById("etternavnVarsel").innerHTML ="";
    document.getElementById("teleNrVarsel").innerHTML ="";
    document.getElementById("epostVarsel").innerHTML ="";
    document.getElementById("antalVarsel").innerHTML ="";

    const film = $("#filmValg").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const teleNr = $("#teleNr").val();
    const epost = $("#epost").val();
    const antall = $("#antall").val();

    if (antall == ""){
        document.getElementById("antalVarsel").innerHTML = "må skrive noe inn i fornavnet"
        return false;
    }

if (fornavn == ""){
 document.getElementById("fornavnVarsel").innerHTML = "må skrive noe inn i fornavnet"
    return false;
}
    if (etternavn == ""){
        document.getElementById("etternavnVarsel").innerHTML = "må skrive noe inn i fornavnet"
        return false;
    }
    if (teleNr == ""){
        document.getElementById("teleNrVarsel").innerHTML = "må skrive noe inn i fornavnet"
        return false;
    }
    if (epost == ""){
        document.getElementById("epostVarsel").innerHTML = "må skrive noe inn i fornavnet"
        return false;
    }

    const billett = {
        film: $("#filmValg").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        teleNr: $("#teleNr").val(),
        epost: $("#epost").val()
    }
    $.post("/lagre", billett, function (){
        hentAlle();
    });

      $("#filmValg").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#epost").val("");
    $("#teleNr").val("");

}
function hentAlle(){
    $.get( "/hentAlle", function (billetter) {
        formaterData(billetter);
    });
};

 function formaterData(billetter){
     let ut = "<table>" +
         "<tr>" +
         "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>TeleNr</th>" +
         "<tr/>";
     for (const billett of billetter){
     ut+="<tr><td>" + billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn +
     "</td><td>" + billett.etternavn + "</td><td>" + billett.epost + "</td><td>" + billett.teleNr +
         "</td></td>";}
     $("#billetListe").html(ut);
 }

function slettBillet(){
     $.get( "/slett")
    document.getElementById("billetListe").innerHTML = "";
}