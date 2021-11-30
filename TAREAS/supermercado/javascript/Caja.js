var cuenta = 0; //lo usaremos para estadistica diaria más adelante
var cola = 0;
var libre = true;
var inicio;
var fin;
var cajas = [];

//creamos la clase caja y su constructor para instanciar objetos de este tipo
class Caja {
  constructor(elemento) {
    this.elemento = elemento;
    this.libre = true;
    this.cola = 0;
    this.cuenta = 0;
    this.inicio = null;
    this.fin = null;
  }

  atender() {
   

    if (this.libre == true) {
      play('sonidos/mercadona.wav');
      this.libre = false;
      this.elemento.style.backgroundColor = "GREEN";
      this.inicio = new Date();
      this.cuenta = this.cuenta + 1;
    } else {
      this.elemento.style.backgroundColor = "BLUE";
      this.cola = this.cola + 1;
    }

    if (this.cola == 4) {
      play('sonidos/colarse.wav');
      this.elemento.style.backgroundColor = "RED";
      this.fin = new Date();
      window.alert(
        "Hay 4 personas en la cola. Han pasado " +
          (this.fin - this.inicio) / 1000 +
          " segundos."
      );
    }
  }

  cambiarColor() {
    if (this.cola > 0 && this.cola < 4) {
      this.elemento.style.backgroundColor = "BLUE";
    } else if (this.cola == 0) {
      this.elemento.style.backgroundColor = "GREEN";
    } else if (this.cola == 4) {
      this.elemento.style.backgroundColor = "RED";
    } else {
      this.elemento.style.backgroundColor = "TRANSPARENT";
    }
  }

  

  desatender() {
    if (this.cola >= 0) {
      play('sonidos/caja.mp3');
      this.cola = this.cola - 1;
      this.cambiarColor();
    }

    if (this.cola == 0) {
      this.libre = true;
      alert("No hay clientes en cola.");
      this.cambiarColor();
    }
    if (this.cola == -1) {
      alert("Caja cerrada");
      this.cambiarColor();
    }

    console.log(
      "-1 cliente en cola.La caja 1 tiene " + this.cola + " clientes esperando."
    );
  }

  

  //método getter para la cola

  get getCola() {
    return this.cola;
  }
}
