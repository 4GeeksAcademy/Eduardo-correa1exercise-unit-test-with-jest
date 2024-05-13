// Declaramos una función con el nombre exacto "formEuroToDollar"
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



const fromDollarToYen = function(cantidad) {
    let cuantoseuros = cantidad / oneEuroIs["USD"]
    return cuantoseuros * oneEuroIs["JPY"]
}

const fromYenToPound = function(cantidad) {
    let cuantoseuros = cantidad / oneEuroIs["JPY"]
    return cuantoseuros * oneEuroIs["GBP"]
}
console.log(fromYenToPound(3.5))
console.log(fromDollarToYen(3.5))
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }





