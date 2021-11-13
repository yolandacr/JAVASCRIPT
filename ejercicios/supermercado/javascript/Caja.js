let cuenta = 0; //lo usaremos para estadistica diaria más adelante
var cola = 0;
let libre = true;
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
      this.elemento.style.backgroundColor = "RED";
      this.inicio = new Date();
      this.cuenta=this.cuenta+1;
    } else {
      this.cola = this.cola +1;
    }

    if (this.cola >= 4) {
      this.fin = new Date();
      window.alert("Hay 4 personas en la cola. Han pasado " + ((this.fin-this.inicio)/1000))
    }
  }

}

