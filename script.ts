// creo l'interfaccia Smartphone

interface Smartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;

  ricarica(euro: number): void;
  numero404(): string;
  getNumeroChiamate(): number;
  chiamata(min: number): void;
  azzeraChiamate(): void;
}

class Cellulare implements Smartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number = 0.2; // ogni minuto spendo 0.2 cent

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(euro: number): void {
    this.carica += euro;
  }

  numero404(): string {
    return `Credito residuo: ${this.carica.toFixed(2)} €`;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  // creo la chiomata

  chiamata(min: number): void {
    const costoChiamata = min * this.costoMinuto;
    if (this.carica >= costoChiamata) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
      console.log(`Chiamata effettuata per ${min} minuti.`);
    } else {
      console.log("Credito insufficiente per effettuare la chiamata.");
    }
  }

  //creo il tasto che azzera le chimate
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

//facci diventare dinamici i bottoni

const cellulare = new Cellulare();

document.getElementById("btnRicarica")!.addEventListener("click", () => {
  const euro = parseFloat(
    prompt("Inserisci l'importo da ricaricare (in Euro):") || "0"
  );
  cellulare.ricarica(euro);
  updateUI();
});

document.getElementById("btnChiamata")!.addEventListener("click", () => {
  const minuti = parseInt(
    prompt("Inserisci la durata della chiamata (in minuti):") || "0",
    10
  );
  cellulare.chiamata(minuti);
  updateUI();
});

document.getElementById("btnAzzeraChiamate")!.addEventListener("click", () => {
  cellulare.azzeraChiamate();
  updateUI();
});

function updateUI() {
  document.getElementById("credito")!.textContent = cellulare.numero404();
  document.getElementById(
    "chiamate"
  )!.textContent = `Numero chiamate effettuate: ${cellulare.getNumeroChiamate()}`;
}

console.log("ricarica effettuata:", cellulare);
