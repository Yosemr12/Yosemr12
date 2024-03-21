//Alertas
//alert("Hola soy Yoselin Moncada web");
//Variables
let nombre = "Yoselin Moncada";
nombre= "Yoselin ";
//Constantes
const apellido= "Moncada";
const altura= 187;
//Mostrar consola
console.log(nombre);
console.log(altura);
//Concatenacion
let Concatenacion= nombre + " " + apellido;
//Seleccionar elemento de la pagina
let datos= document.querySelector("#datos");
//datos.innerHTML='<hr/> <h1> Soy la caja de datos </h1> <h2> Mi nombre es: ${Concatenacion}</h2> <h3>Mido: ${altura} cm </h3>';
//condiciones
altura2= 180;
if(altura2 >= 185){
    datos.innerHTML += "<h1> Eres un apersona alta </html>";
}else{
    datos.innerHTML +="<h1>Eres una persona bajita </h1> "
}
//bluces 
year=2001;
for(let year= 2000; year <=2023; year++){
   datos.innerHTML += "<h2> Estamos en el año: ${year} </h2>";
}
//Arrays
let nombres=["Yoselin","Francisco","Pepe"];

let divnombres= document.querySelector("#nombres");
divnombres.innerHTML= nombres[0];




    
     