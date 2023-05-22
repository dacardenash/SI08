$(document).ready(function () {
    $("#btnEnviar").click(function () {
        var frase = $("#txtFrase").val();
        var re = /[\W_]/g;

        var lowRegStr = frase.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');

        if (reverseStr === lowRegStr) {
            $("#txtVericacion").empty();
            $("#txtVericacion").append("Es palíndroma");
        }
        else {
            $("#txtVericacion").empty();
            $("#txtVericacion").append("NO es palíndroma");
        }
    });
});