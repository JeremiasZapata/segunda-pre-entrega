// let attempts_name = 0
// let limit_name = 2

// do{    
//     dato_nombre();
    
    
//     attempts_name++
// } while(attempts_name<limit_name)



// function dato_nombre (){
//     let remaining = limit_name-attempts_name
//     let nombre = prompt("Ingrese su nombre. Le quedan " +remaining+ "de " +limit_name+ " intentos." );
//     if(nombre ==="" || !isNaN(nombre)){
//     alert("No puede haber campos vacíos y no debe ser un número"); 
//     }else{
        
//         alert("Bienvenido "+nombre)
//         attempts_name=limit_name;
//     }
// }

// function calcularAlumnos(){
//     let cantidadAlumnos = parseInt( prompt("Ingrese la cantidad de alumnos que hay en la division. Ojo que se que son menos de 15!"));

//     if(cantidadAlumnos > 15){
//         alert("Dije que se que son como mucho 15");
//         calcularAlumnos();
//         }else if (cantidadAlumnos <= 15 && cantidadAlumnos > 0){
//             console.log("vamos a ver esas notas");
//             let resultado = 0;
//     for(let i = 0; i < cantidadAlumnos; i++){
//         console.log("preguntar notas");
//         let notas = parseInt(prompt(`Ingrese una nota del alumno #${i+1}. No puede haber campos vacíos y tiene que ser un número y distinto de 0(cero)`));
//         while(notas==="" || isNaN(notas) || notas==0){
//             alert("No puede haber campos vacíos y tiene que ser un número y distinto de 0(cero).");
//             notas = parseInt(prompt(`Ingrese una nota del alumno #${i+1}. No puede haber campos vacíos y tiene que ser un número y distinto de 0(cero)`))
//         }
//         resultado += notas;
//         }
//     const total = resultado / cantidadAlumnos;
//     alert("El promedio de las " + cantidadAlumnos + " notas es: " + total);
//     alert("Adios");
// }
// }

// function Cuentas(){
//     let cuentas = confirm("¿Hacemos unas cuentas para pasar el rato?");
//     if (cuentas == true){
//         alert("vamos!!!!");
//         calcularAlumnos();
// }else{
//     alert("Bajon, te creía bueno.");
//     alert("Adios!")
//     }
// }
// Cuentas();





//***************************prueba de prompt con array************************ */

// function names(){
//     let namelist = [];
//     let name = "";
//     while(name!="0"){
//     name = prompt("Ingrese un nombre: (Presione 0(cero) para salir)");
//     namelist.push(name);

//     }
//     namelist.pop();
//     alert( "los nombres son: " + namelist)
// }
// names();


//*************************2da pre entrega******************************* */

const peliculas = [
    {nombre : "Advenger", clasificacion: "ATP", duracion : "120min", tipo : "3D"}, 
    {nombre : "Avatar", clasificacion: "ATP", duracion : "90min", tipo : "4D"},
    {nombre : "Tiburon", clasificacion: "mayores 12", duracion : "90min", tipo : "2D"},
    {nombre : "Freddy", clasificacion: "mayores 16", duracion : "120min", tipo : "2D"},
    {nombre : "Jurasic Park", clasificacion: "mayores 12", duracion : "160 min", tipo : "3D"},
]

// con esto podemos ver que hay en el array de peliculas, pero toda la info completa
for(let i=0; i<=4; i++ ){
    console.log(peliculas[i]);
}


function Carteleras(){
    let namelist = [];
    let name = "";
    let cartelera = confirm("¿Quiere saber que peliculas tenemos?");
    if (cartelera == true){
        for (const cartelera of peliculas) {
                console.log(cartelera.nombre);
                name = cartelera.nombre;
                namelist.push(name);
                

        }
}else{
    alert("Muchas gracias!");
    
    }
    alert( "Las peliculas disponibles son: " + namelist)
}
Carteleras();


console.log( peliculas.indexOf([nombre],"Advenger") ) // Esta parte no se como resolver
let opcion
let opcion1
function menuInicio(){
    

var menu ="Ingrese una opcion\n";

menu+="1. Clasificacion\n";
menu+="2. Duracion\n";
menu+="3. Tipo\n";
menu+="4. Salir\n";
opcion = prompt(menu);
}
menuInicio();



switch(opcion){
    case "1":

        var menu ="Ingrese una opcion\n";

        menu+="1. ATP\n";
        menu+="2. Mayores de 12\n";
        menu+="3. Mayores de 16\n";
        menu+="4. Menu anterior\n";
        menu+="5. Salir\n";
        opcion1 = prompt(menu);
    switch(opcion1){
        case "1":
            filtro_clas = "ATP";
            break;
        case "2":
            filtro_clas = "mayores 12";
            break;
        case "3":
            filtro_clas = "mayores 16";
            break;
        case "4":
            menuInicio();   //esta es la otra parte que no se como hacer
            // break;
        }
        // default:
        //     alert("No es una opcion valida");


let pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
console.log(pelicula);
        break;
}



// con esto filtramos por algun contenido de nuestra lista de objetos, en este caso clasificacion
filtro_clas = "mayores 16";
let pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
console.log(pelicula);








