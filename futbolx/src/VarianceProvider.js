///
/// Función que calcula la varianza poblacional de una muestra de n valores
///
function DesviacionEstandar(lista)
{
    let s = 0;

    let aux;
    if (lista != null) {
        var stringNumbers = lista.split(',');
        var numbers;
        var n = stringNumbers.length;
        var suma1 = 0;
        var suma2 = 0;
        var numbers = new Array();

// Parseado de la muestra de valores
        for (let i = 0; i < n; i++) {
            aux = parseFloat(stringNumbers[i]);
            if (isNaN(aux)) {
                alert("Se ha detectado algún valor erroneo en la lista.");
                return 0;
            }

            numbers[i] = aux;
        }

// Calculando sumatorios
        for (let i = 0; i < n; i++) {
            suma1 = suma1 + Math.pow(parseFloat(numbers[i]), 2);
            suma2 = suma2 + parseFloat(numbers[i]);
        }

// Calculando la varianza de población de la muestra
        s = (suma1 - (Math.pow(suma2, 2) / n)) / n, 2;

// Redondeo con 4 decimales
        s = Math.round(s * Math.pow(10, 4)) / Math.pow(10, 4);
    }

    return s;
}