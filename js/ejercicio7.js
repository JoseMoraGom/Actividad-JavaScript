/**
 * Implementa la serie de Fibonacci
 * @param {*} n: número de elementos de la serie.
 * @returns vector con la serie de Fibonacci.
 * @author: Sustituye tu nombre y apellidos aquí
 */
function fibonacci(n)
{
    let vector=new Array(); // Creamos un vector para alamcenar el cálculo
    
    
    // ESCRIBE TU CÓDIGO AQUÍ
    for(e=0;e<n;e++){
        if(e==0)
            vector[0]=1;
        else if(e==1)
            vector[1]=1;
            else{
                vector[e]=vector[e-1]+vector[e-2];
            }
    }

    /** OTRA FORMA OPTIMIZANDO CODIGO
    for(e=0;e<n;e++){
        if(e==0 || e==1)
            vector[e]=1;
        else
            vector[e]=vector[e-1]+vector[e-2];
    }
    return vector; // Retorno de la función
}
*/

/**
 * Aplicación principal Ejercicio 7
 * @author: José Gaspar Sánchez García
 */
function appMain()
{
    const salidaHTML=document.getElementById("salida");

    let x=parseInt(prompt("Indique el número de elementos de la serie de Fibonacci: "));

    let v=fibonacci(x);

    console.log(`Fibonacci(${x}) = [ ${v} ]`);
    // alert("Fibonacci: "+v);
    salidaHTML.innerHTML="Fibonacci("+x+") = ["+v+"].";
}

// Exportamos la funcion fibonacci para poder realizar el Testing
module.exports={
    fibonacci,
};