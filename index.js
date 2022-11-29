let nombre = prompt("Ingrese su nombre.");
let mensaje = `Hola ${nombre}, bienvenido al conversor de pesos argentinos a monedas extranjeras.`;

alert(mensaje);

let opcion = prompt("Ingrese 1 para entrar al sistema, o 2 para salir.");

if (opcion == 1) {

    let monto = prompt("Ingrese monto (ARS) a convertir")
    let moneda = prompt("Ingrese moneda a la cual convertirá sus pesos: USD, EUR, CLP, GBP");
    let usd = monto*0.0060;
    let eur = monto*0.0058;
    let clp = monto*5.4;
    let gbp = monto*0.005;

    switch (moneda.toUpperCase()) {
        case "USD":
            alert(`${monto}(ARS) convertidos a USD son: ${usd} dolares.`);
            brake;

        case "EUR":
            alert(`${monto}(ARS) convertidos a EUR son: ${eur} euros.`);
            brake;

        case "CLP":
            alert(`${monto}(ARS) convertidos a CLP son: ${clp} pesos chilenos.`);
            brake;

        case "GBP":
            alert(`${monto}(ARS) convertidos a GBP son: ${gbp} libras esterlinas.`);
            brake;
        
        default:
            alert("Moneda ingresada incorrecta.");
            break;
    }
}else {
    alert("Hasta luego.");
}