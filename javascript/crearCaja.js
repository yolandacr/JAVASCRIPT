
function crearCaja(idCaja) {
  
  cajas.push(new Caja(document.getElementById("caja1")));
  cajas.push(new Caja(document.getElementById("caja2")));
  cajas.push(new Caja(document.getElementById("caja3")));
  cajas.push(new Caja(document.getElementById("caja4")));
  switch (idCaja) {
    case 1:
      var caja1= new Caja(document.getElementById("caja1"));
      cajas[0]=caja1;
      cajas[0].atender();
      break;
    case 2:
      var caja2= new Caja(document.getElementById("caja2"));
      cajas[1]=caja2;
      cajas[1].atender();
      break;
    case 3:
      var caja3= new Caja(document.getElementById("caja3"));
      cajas[2]=caja3;
      cajas[2].atender();
      break;
    case 4:
      var caja4= new Caja(document.getElementById("caja4"));
      cajas[3]=caja4;
      cajas[3].atender();
      break;
  }
}

/* function resta(){
  
} */
