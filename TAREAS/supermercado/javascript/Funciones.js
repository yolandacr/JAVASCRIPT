function crearCaja(idCaja) {
  cajas.push(new Caja(document.getElementById("caja1")));
  cajas.push(new Caja(document.getElementById("caja2")));
  cajas.push(new Caja(document.getElementById("caja3")));
  cajas.push(new Caja(document.getElementById("caja4")));
  switch (idCaja) {
    case 1:
      cajas[0].atender();
      break;
    case 2:
      cajas[1].atender();
      break;
    case 3:
      cajas[2].atender();
      break;
    case 4:
      cajas[3].atender();
      break;
  }
}

//PARTE DE CLICK DERECHO




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
  }}

  function validar() {
    var orden = document.getElementById("orden").value;
    var regex = /^(Caja){1}(\ )?[1-4]{1}:(\ )?([+-])?[1-4]{1}$/;

    if (regex.test(orden)) {
      console.log(orden + " es un mensaje válido.");
    } else {
      console.log(orden + " es un mensaje inválido.");
    }

    if (cajas.length == 0) {
      console.log("La caja está cerrada.");
    } else {
      if (orden.includes("Caja 1") || orden.includes("Caja1")) {
        var cola = cajas[0].getCola;
      } else if (orden.includes("Caja 2") || orden.includes("Caja2")) {
        var cola = cajas[1].getCola;
      } else if (orden.includes("Caja 3") || orden.includes("Caja3")) {
        var cola = cajas[2].getCola;
      } else if (orden.includes("Caja 4") || orden.includes("Caja4")) {
        var cola = cajas[3].getCola;
      }

      if (orden.includes("-")) {
        var resul = cola - orden.charAt(orden.length - 1);
      } else {
        var resul = cola + orden.charAt(orden.length - 1);
      }

      if (resul < 0) {
        console.log(
          "La operación no puede realizarse. La cola es de menor longitud."
        );
      } else {
        console.log("Quedarían " + resul + " clientes en cola");
      }
    }
  }

