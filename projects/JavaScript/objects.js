//Objetos

const mascotas = {
    nombre: "Nini",
    edad: 2,
    vivo: true,
    raza:["Pelo Corto Americano","Siames"]
}
mascotas.id= 1
mascotas.extremidades= [1,2,3,4]

//Destructuring Object

const {edad, nombre} = mascotas


const web ={
    nombre: "www.botas.com",
    links:{
        instagram: "www.instagram.com",
        facebook: "www.facebook.com"
    },
    redes:{
        YT:{
            enlace: "www.youtube.com",
            nombreCanal: "botasCODM"  
        } 
    }
}

const {enlace, nombreCanal} = web.redes.YT
console.log(enlace, nombreCanal);