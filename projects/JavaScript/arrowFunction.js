function sumar(num) {
    console.log(num);
    
}

sumar(20)

//Funcion flecha

const sumarDos = (num1,num2)=> (num1 + num2)

const suma = sumarDos(20, 30)
console.log(suma);

const mensaje = nombre => "Hola soy " + nombre

const imprimirMensaje = mensaje("Alexander")
console.log(imprimirMensaje);

const sumarTres = (num1,)=>{
console.log(num1 + 3);
}
sumarTres(9)