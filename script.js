
//1-Suma de Números Pares: Crea un programa que sume todos los números pares en un array

  
   function sumaPares(array){
    let suma = 0

      for (let i=0; i < array.length; i++){
        if(array[i] % 2 === 0){
    
                suma = suma + array[i]
            }
        }
       return suma
    }
   

//2-Factorial de un Número: Escribe una función que calcule el factorial de un número utilizando un bucle.

function factorial(numero){

    let resultado = 1
    let i = 1

    while(i <= numero){
        resultado *= i

        ++i
    }

    return resultado
}

console.log (factorial(3))


//3 - filtrar Números Primos: Crea una función que reciba un array de números y devuelva un nuevo array que contenga solo los números primos.

    var numeros = [ 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
    var primos = []

    numeros.forEach((varios) => {
        var divisores = 0
        for (var contador = 1; contador <= varios; contador ++){
            if(varios % contador === 0){
                divisores ++
            }
        }
        if(divisores ===2){
            primos.push(varios)
        }
        
    });
    
    console.log(primos)



//4 - Cálculo de Promedio: Crea una función que calcule el promedio de los elementos en un array.

promedio([5,10,15,20,25,30])

function promedio(arr){

    var suma = 0

    for(let i = 0; i<arr.length;i++){
       suma = suma + arr[i]

    }

    return suma/arr.length

}


/*5 - Eliminar Duplicados en un Array: Escribe una función que tome un array y elimine los elementos duplicados,
devolviendo un nuevo array sin duplicados.*/

var numeros = [2,3,5,8,6,3,8,1,9]
var sinduplicados = []

function removedupli(array){

    let sinduplicados = newSet(array)

    return array.from(sinduplicados)
}


/*6 - De una sección existente en tu página, crea un subtitulo atractivo que llame la atención
del usuario a querer conocer más, así mismo el usuario puede clickear un botón existente y
que se muestre el texto de dicha sección*/

let texto_btn = document.getElementById("texto_btn");

let texto = document.getElementById('texto');

texto_btn.addEventListener("click", toggleText);

function toggleText(){
    texto.classList.toggle("visible")
}