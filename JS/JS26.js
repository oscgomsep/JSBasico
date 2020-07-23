//desarrollo del Ejercicio de cuenta bancaria
var cuenta={
    titular:"Oscar",
    saldo: 0 ,

//  solicitud de información al usuario
    ingresar: function (ingreso){
        console.log ("Se ha consignado:" + ingreso + "euros");
        return this.saldo+ingreso;
    },
    retirar: function (egreso){
       console.log("Se ha descontado:"+ egreso);
       return this.saldo-egreso
    },
    // informe de saldo
    informe: function(estado){
     console.log("Nombre del Titular:", this.titular);
     console.log("El saldo actual de su cuenta es:", this.saldo);
    }
 }

//  información a pantalla
 console.log (cuenta.titular);
 console.log (cuenta.saldo);
 console.log ("-----------");
 let ingreso=prompt("Digite el valor a consignar");
 cuenta.ingresar(ingreso);
 let retiro=prompt("Digite el valor a retirar");
 cuenta.retirar(retiro);
 cuenta.informe();