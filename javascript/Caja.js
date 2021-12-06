var cuenta = 0; //lo usaremos para estadistica diaria más adelante
var cola = 0;
var libre = true;
var inicio;
var fin;
var cajas = [];
var contador = 0;

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
   
    if (this.libre == true&&this.cuenta==0) {
      play("sonidos/mercadona.wav");
      this.libre = false;
      this.cuenta = this.cuenta + 1;
      this.cambiarColor();
      this.inicio = new Date();
      
      
    } else if(this.cola>=0&&this.cola<4){
      this.cola = this.cola + 1;
        this.cambiarColor();
        console.log(this.cola);
        if(this.cola==4){
          contador = this.contador + 1;
        play("sonidos/colarse.wav");
        this.fin = new Date();
        window.alert(
          "Hay 4 personas en la cola. Han pasado " +
            (this.fin - this.inicio) / 1000 +
            " segundos."
        );

        }
      
    } else if(this.cola==4){
      alert("La cola está llena. Prueba en otra o espera.");
    }

    
     
    }
  

  desatender() {
    contador = 0;
    if (this.cola >= 1) {
      play("sonidos/caja.mp3");
      this.cola = this.cola - 1;
      this.cambiarColor();
      console.log(
        "-1 cliente en cola.La caja  tiene " +
          this.cola +
          " clientes esperando."
      );
    } else if (this.libre==false&&this.cola<= 0 && this.cuenta==1) {
      alert("No hay clientes en cola.");
      this.cuenta = this.cuenta - 1;
      this.libre = true;
      this.cambiarColor();
    } else if (this.cola == 0 && this.cuenta == 0) {
      
      alert("Caja cerrada");
    }
  }

  cambiarColor() {
    if (this.cola >0 && this.cola <= 3) {
      this.elemento.style.backgroundColor = "BLUE";
    } else if (this.cola == 0 && this.cuenta == 1) {
      this.elemento.style.backgroundColor = "GREEN";
    } else if (this.cola == 4) {
      this.elemento.style.backgroundColor = "RED";
    } else if (this.cola == 0 && this.cuenta == 0) {
      this.elemento.style.backgroundColor = "TRANSPARENT";
    }
  }

  //método getter para la cola

  get getCola() {
    return this.cola;
  }

  //método setter para cola

  set getElemento(valor) {
    this.cola = valor;
  }
}
