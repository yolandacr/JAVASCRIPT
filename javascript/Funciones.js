//crea todas las cajas cuando carga el documento a unos valores por defecto
function crearCajas() {
  cajas.push(new Caja(document.getElementById("caja1")));
  cajas.push(new Caja(document.getElementById("caja2")));
  cajas.push(new Caja(document.getElementById("caja3")));
  cajas.push(new Caja(document.getElementById("caja4")));
}


//según el valor que se le pase por parámetros abre una caja u otra y cambia sus propiedades a este nuevo estado
function abrirCaja(idCaja) {
  switch (idCaja) {
    case 1:
      if (cajas[0].libre == true) {
        var caja1 = new Caja(document.getElementById("caja1"));
        cajas[0] = caja1;
      }
      cajas[0].atender();
      break;
    case 2:
      if (cajas[1].libre == true) {
        var caja2 = new Caja(document.getElementById("caja2"));
        cajas[1] = caja2;
      }
      cajas[1].atender();
      break;
    case 3:
      if (cajas[2].libre == true) {
        var caja3 = new Caja(document.getElementById("caja3"));
        cajas[2] = caja3;
      }
      cajas[2].atender();
      break;
    case 4:
      if (cajas[3].libre == true) {
        var caja4 = new Caja(document.getElementById("caja4"));
        cajas[3] = caja4;
      }
      cajas[3].atender();
      break;
  }
}



//funcion para llamar al método de clase restar.
function restar(numCaja) {
  if (cajas.length != 0) {
    switch (numCaja) {
      case 1:
        cajas[0].desatender();

        break;

      case 2:
        cajas[1].desatender();

        break;

      case 3:
        cajas[2].desatender();

        break;
      case 4:
        cajas[3].desatender();

        break;
    }
  } else {
    alert("La caja no tiene cola");
  }
}

//función para validar la orden y ver si se puede realizar la operación.
function validar() {
  var orden = document.getElementById("orden").value;
  orden=orden.toLowerCase();

 
  var regex = /^(caja){1}(\s)?[1-4]{1}:(\s)?([+-])?[1-4]{1}$/;
  

  if (regex.test(orden)) {
    $("#consola").innerHTML = console.log(orden + " es un mensaje válido.");

    var cola = 0;
  if (
    orden.includes("Caja 1") ||
    orden.includes("Caja1") ||
    orden.includes("caja 1") ||
    orden.includes("caja1")
  ) {
    cola = cajas[0].getCola;
  } else if (
    orden.includes("Caja 2") ||
    orden.includes("Caja2") ||
    orden.includes("caja 2") ||
    orden.includes("caja2")
  ) {
    cola = cajas[1].getCola;
  } else if (
    orden.includes("Caja 3") ||
    orden.includes("Caja3") ||
    orden.includes("caja 3") ||
    orden.includes("caja3")
  ) {
    cola = cajas[2].getCola;
  } else if (
    orden.includes("Caja 4") ||
    orden.includes("Caja4") ||
    orden.includes("caja 4") ||
    orden.includes("caja4")
  ) {
    cola = cajas[3].getCola;
  }

  
  var ultimoChar = orden.charAt(orden.length - 1);
  var operacion = orden.charAt(orden.length - 2);
  var resul = 0;

  switch (operacion) {
    case "+":
      resul = cola + ultimoChar;
      mensaje(resul);
      break;

    case "-":
      resul = cola - ultimoChar;
      mensaje(resul);
      break;

    default:
      console.log("Elige una operación");
  }
  } else {
    console.log(orden + " es un mensaje inválido.");
  }

  

  function mensaje(resultado) {

    
    var lastDigit = resultado.toString().slice(-1);


    if (resultado < 0) {
      console.log(
        "No hay suficientes clientes en cola. Elige un nº menor o prueba a sumar"
      );
    } else if (resultado > 4) {
      console.log("Demasiados clientes. Elige un nº menor o prueba a restar");
    } else {
      console.log(
        "La operación puede realizarse. Quedarían " +
        lastDigit +
          " clientes en cola."
      );
    }
  }
}

function guardarEstado() {
  let cajasJSON = JSON.stringify(cajas);

  //convierto mi array en json
  var guarda = localStorage.setItem("caja", JSON.stringify(cajas));

  //lo guardo en el local localStorage

  localStorage.setItem("caja", cajasJSON);
}

function recuperarEstado() {
  var resul=0;
  if (JSON.parse(localStorage.getItem("caja") == null)) {
    alert("No hay estados guardados");
  } else {
    cajas = JSON.parse(localStorage.getItem("caja"));


    //comprueba el estado del array de cajas
    /* for (let i = 0; i < cajas.length; i++) {
      console.log(cajas[i]);
    } */
    cambiarColor();
    }
  }


  function cambiarColor(){
    for (let i = 0; i < cajas.length; i++) {
      var resul= (cajas[i].getCola);  //obtenemos el tamaño de la cola y segun sea le modificamos el color
      var elementoCambio=cajas[i].getElemento;  //obtenemos el elemento con id de cada 
      
      console.log(elementoCambio);

   /*    if (resul >=1 && resul <=3) {
      elementoCambio.style.backgroundColor = "BLUE";
    } else if (resul == 0) {
      elementoCambio.style.backgroundColor = "GREEN";
    } else if (resul == 4) {
      elementoCambio.style.backgroundColor = "RED";
    } else {
      elementoCambio.style.backgroundColor = "TRANSPARENT";
    }  */
     }
  }





//funcion que reproduce el audio al pulsar

function play(audio) {
  const music = new Audio(audio);
  music.play();
}
