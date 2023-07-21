var Cellulare = /** @class */ (function () {
    function Cellulare() {
        this.costoMinuto = 0.2;
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    Cellulare.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    Cellulare.prototype.numero404 = function () {
        return "Credito residuo: ".concat(this.carica.toFixed(2), " \u20AC");
    };
    Cellulare.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Cellulare.prototype.chiamata = function (min) {
        var costoChiamata = min * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log("Chiamata effettuata per ".concat(min, " minuti."));
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    Cellulare.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Cellulare;
}());
var cellulare = new Cellulare();
document.getElementById("btnRicarica").addEventListener("click", function () {
    var euro = parseFloat(prompt("Inserisci l'importo da ricaricare (in Euro):") || "0");
    cellulare.ricarica(euro);
    updateUI();
});
document.getElementById("btnChiamata").addEventListener("click", function () {
    var minuti = parseInt(prompt("Inserisci la durata della chiamata (in minuti):") || "0", 10);
    cellulare.chiamata(minuti);
    updateUI();
});
document.getElementById("btnAzzeraChiamate").addEventListener("click", function () {
    cellulare.azzeraChiamate();
    updateUI();
});
function updateUI() {
    document.getElementById("credito").textContent = cellulare.numero404();
    document.getElementById("chiamate").textContent = "Numero chiamate effettuate: ".concat(cellulare.getNumeroChiamate());
}
