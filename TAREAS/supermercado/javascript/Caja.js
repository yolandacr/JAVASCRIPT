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
      this.libre = false;
      this.elemento.style.backgroundColor = "GREEN";
      this.inicio = new Date();
      this.cuenta = this.cuenta + 1;
    } else {
      this.cola = this.cola + 1;
    }

    if (this.cola == 4) {
      this.elemento.style.backgroundColor = "RED";
      this.fin = new Date();
      window.alert(
        "Hay 4 personas en la cola. Han pasado " +
          (this.fin - this.inicio) / 1000 +" segundos."
      );
    }
  }

  desatender() {
    if (this.cola > 0) {
      this.cola = this.cola - 1;
      if (this.cola <= 3) {
        this.elemento.style.backgroundColor = "GREEN";
      }
    }

    if (this.cola == 0) {
      this.libre=true;
      this.elemento.style.backgroundColor = "TRANSPARENT";
      alert("No hay clientes en cola.");
    }

    console.log(
      "-1 cliente en cola.La caja 1 tiene " + this.cola + " clientes esperando."
    );
  }

  //método getter para la cola

  get getCola() {
    return this.cola;
  }

  //método setter para la cola

  set setCola(value) {
    this.cola = value;
  }
}
