console.log("Ingresa dinero a retirar: ");
var stdin = process.openStdin();
var dinero = 1000000;
stdin.addListener("data", function (d) {
    retirar(d);
    stdin.pause();
});
function retirar(d) {
    var dineroret = d.toString().trim();
    if (dinero <= dineroret) {
        console.log("No puedes retirar esa cantidad");
    }
    else {
        dinero = dinero - dineroret;
        console.log("Tu saldo es: " + dinero);
    }
}
