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

let opcion;
let opcion1;
let pel;
let menuSalas = "" ;
let pelist = "";
let cartelera;

let pelicula = "";

const peliculas = [
    {},
    {id: 1, nombre : "Advenger", clasificacion: "ATP", duracion : "120min", tipo : "3D"}, 
    {id: 2 ,nombre : "Avatar", clasificacion: "ATP", duracion : "90min", tipo : "4D"},
    {id: 3 ,nombre : "Tiburon", clasificacion: "mayores 12", duracion : "90min", tipo : "2D"},
    {id: 4 ,nombre : "Freddy", clasificacion: "mayores 16", duracion : "120min", tipo : "2D"},
    {id: 5, nombre : "Jurasic Park", clasificacion: "mayores 12", duracion : "160 min", tipo : "3D"},
]

// con esto podemos ver que hay en el array de peliculas, pero toda la info completa
for(let i=0; i<=4; i++ ){
    console.log(peliculas[i]);
}



// aca hacemos un listado del nombre de las peliculas
function Carteleras(){
    let namelist = [];
    let name = "";
    cartelera = confirm("¿Quiere saber que peliculas tenemos?");
    if (cartelera == true){
        for (const cartelera of peliculas) {
                console.log(cartelera.nombre);
                name = cartelera.nombre;
                namelist.push(name);
                pelist = namelist; // lo usamos para mas adelante en el alert si es true

        }
}else{
    alert("Muchas gracias!");
    
    }
    
}
Carteleras();


if(cartelera == true ){
    alert( "Las peliculas disponibles son: " + pelist);
}


// aca preguntamos una y otra vez en que sala se proyecta hasta que ingrese 6 (salir)

while (menuSalas!=6){


// con esto nos muestra el index en donde se encuentra el dato que elegimos.
menuSalas = prompt(`Elija una opcion para saber en que sala se proyecta
1:Advenger
2:Avatar
3:Tiburon
4:Freddy
5:Jurasic Park
6:Salir `);




if(menuSalas===1){
    pel = "Advenger";
}else if(menuSalas===2){
    pel = "Avatar";
}else if(menuSalas===3){
    pel = "Tiburon";
}else if(menuSalas===4){
    pel = "Freddy";
}else if(menuSalas===5){
    pel = "Jurasic Park";
}




let objeto = peliculas.findIndex(property => {
    return property.nombre === pel ;
});
console.log(objeto);
}











function menuInicio() {
    let menu = "FILTRO DE PELICULAS. Ingrese una opcion:\n1. Clasificacion\n2. Duracion\n3. Tipo\n4. Salir\n";
    opcion = prompt(menu);
    menu2(opcion)
}

menuInicio();


function menu3() {
    menu2(opcion)
}


console.log(opcion)
function menu2 (opcion) {
let pelicula = ""
switch (opcion) {
    case "1":
        let menu2 = "Ingrese una opcion\n1. ATP\n2. Mayores de 12\n3. Mayores de 16\n4. Menu anterior\n5. Salir\n";
        opcion1 = prompt(menu2);
        switch (opcion1) {
            case "1":
                filtro_clas = "ATP";
                pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
                console.log(pelicula);
                break;
            case "2":
                filtro_clas = "mayores 12";
                pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
                console.log(pelicula);
                break;
            case "3":
                filtro_clas = "mayores 16";
                pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
                console.log(pelicula);
                break;
            case "4":
                menuInicio(); //vuelve al menu anterior
                break;
            case "5": 
            break;
            default:
                    alert("No es una opcion valida");
                    menu3(); //al ser una opcion no valida, vuelve a preguntar todo de nuevo
                    
        }
        
}
}




























// con esto filtramos por algun contenido de nuestra lista de objetos, en este caso clasificacion
// filtro_clas = "mayores 16";
// let pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
// console.log(pelicula);


























