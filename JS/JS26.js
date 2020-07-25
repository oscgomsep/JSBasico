//desarrollo del Ejercicio de cuenta bancaria
// definicion del objeto
var cuenta={
    titular:"Oscar",
    saldo:0,

//  solicitud de información al usuario
    ingresar: function (ingreso){
        console.log("Se ha consignado: $" + ingreso);
        return this.saldo += ingreso;
    },
    retirar: function (egreso){
       console.log("Se ha descontado: $"+ egreso);
       return this.saldo -= egreso;
    },
    // informe de saldo
    informe: function (){
     console.log("Nombre del Titular:", this.titular);
     console.log("El saldo actual de su cuenta es: $", this.saldo);
    }
 };

//  información a pantalla
 console.log (cuenta.titular);
 console.log (cuenta.saldo);
 console.log ("**********************");
 console.log ("**********************");
 
 let ingreso=prompt("Cuanto va a consignar?");
 cuenta.ingresar(ingreso);
 let retiro=prompt("Cuanto va a retirar?");
 console.log ("**********************");
 console.log ("**********************");
 cuenta.retirar(retiro);
 console.log ("**********************");
 console.log ("**********************");
 cuenta.informe();
 console.log ("**********************");
 console.log ("**********************");