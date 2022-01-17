// guardamos dentro de un nuevo array solo los salarios del arreglo "colombia".
let salariosCol = colombia.map(dato => dato.salary);

//guardamos en un nuevo array todos los arreglos ordenados. 
let salariosColSorted = salariosCol.sort(
    function (salaryOne, salaryTwo) {
    return salaryOne - salaryTwo;
});


//Creamos una función que calcule si la suma de los elementos del arreglo es par o impar.
function esPar (numero){
    return (numero % 2 === 0);
    //esto regresará true o false si esa condición se cumple.
}


//creamos la función para obtener la mediana de los salarios.
function calcularMediana(lista){
    const mitad = lista.length /2;

    if(esPar(lista.length)){
        personaMitad = (lista [mitad -1] + lista[mitad]) / 2;
        return personaMitad;
    }else{
        personaMitad =  Math.floor(mitad);
        return lista[personaMitad];
    }
} 


//creamos una función para calcular la media artmética de un array
function calcularMediaAritmetica(lista){
    let total = (lista.reduce((a, b) => a + b)) / lista.length ;
    return total;
}
