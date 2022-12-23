


//*************************2da pre entrega******************************* */

let opcion;
let opcion1;
let pel;
let menuSalas = "";
let pelist = "";
let cartelera;

let pelicula = "";

const peliculas = [
    {},
    { id: 1, nombre: "Advenger", clasificacion: "ATP", duracion: "120min", tipo: "3D" },
    { id: 2, nombre: "Avatar", clasificacion: "ATP", duracion: "90min", tipo: "4D" },
    { id: 3, nombre: "Tiburon", clasificacion: "mayores 12", duracion: "90min", tipo: "2D" },
    { id: 4, nombre: "Freddy", clasificacion: "mayores 16", duracion: "120min", tipo: "2D" },
    { id: 5, nombre: "Jurasic Park", clasificacion: "mayores 12", duracion: "160 min", tipo: "3D" },
]

// con esto podemos ver que hay en el array de peliculas, pero toda la info completa
for (let i = 0; i <= 4; i++) {
    console.log(peliculas[i]);
}



// aca hacemos un listado del nombre de las peliculas
function Carteleras() {
    let namelist = [];
    let name = "";
    cartelera = confirm("¿Quiere saber que peliculas tenemos?");
    if (cartelera == true) {
        for (const cartelera of peliculas) {
            console.log(cartelera.nombre);
            name = cartelera.nombre;
            namelist.push(name);
            pelist = namelist; // lo usamos para mas adelante en el alert si es true

        }
    } else {
        alert("Muchas gracias!");

    }

}
Carteleras();


if (cartelera == true) {
    alert("Las peliculas disponibles son: " + pelist);
}


// aca preguntamos una y otra vez en que sala se proyecta hasta que ingrese 6 (salir)

while (menuSalas != 6) {


    // con esto nos muestra el index en donde se encuentra el dato que elegimos.
    menuSalas = prompt(`Elija una opcion para saber en que sala se proyecta
1:Advenger
2:Avatar
3:Tiburon
4:Freddy
5:Jurasic Park
6:Salir `);




switch(menuSalas){
    case "1":
        pel = "Advenger";
        break;
    case "2":
        pel = "Avatar";
        break;
    case "3":
        pel = "Tiburon";
        break;
    case "4":
        pel = "Freddy";
        break;
    case "5":
        pel = "Jurasic Park";
        break;
}


    let objeto = peliculas.findIndex(property => {
        return property.nombre === pel;
    });
    console.log(objeto);
}









// solo funciona la opcion 1 del filtro 

function menuInicio() {
    let menu = "FILTRO DE PELICULAS. Ingrese una opcion:\n1. Clasificacion\n2. Duracion\n3. Tipo\n4. Salir\n";
    opcion = prompt(menu);
    menuClasificacion(opcion)
}

menuInicio();



function menuClasificacion(opcion) {
    let pelicula = ""
    switch (opcion) { 
        case "1":
            let menuClases = "Ingrese una opcion\n1. ATP\n2. Mayores de 12\n3. Mayores de 16\n4. Menu anterior\n5. Salir\n";
            opcion1 = prompt(menuClases);
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
                    menuRecall(); //al ser una opcion no valida, vuelve a preguntar todo de nuevo

            }

    }
}


function menuRecall() {
    menu2(opcion)
}






// con esto filtramos por algun contenido de nuestra lista de objetos, en este caso clasificacion
// filtro_clas = "mayores 16";
// let pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
// console.log(pelicula);



















































