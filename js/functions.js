// // 4 Formas de impresion
// alert("HOLA DESDE UN ARCHIVO EXTERNO")
// console.log("HOLA DESDE LA CONSOLA");
// document.write("HOLA DESDE LA INTERFAZ")
// // Swal.fire("HOLA DESDE SWETTALERT");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "error"
//   });

// VARIABLES Y TIPOS DE DATOS
const pi = 3.14; //Const: se aplica a valores que no se van a cambiar (DECIMAL) 
const pul = 2.54;
var name = "Marlon Quintero"; //var: variables globales (STRING)
let edad = 18;//(ENTERO)
var ver = true; //(BOOLEAN)
var fal = false;


//OPERADORES BASICOS
var suma = 5 + 2;
console.log(suma);
var var_uno = 10;
var var_dos = 5;
console.log(var_uno - var_dos);
console.log(var_uno * var_dos);
console.log(var_uno / var_dos);
console.log(var_uno % var_dos);


//OPERADORES DE COMPARACION
// = Asignacion
// == Comparacion (valor)
// === estrictamente comparado (valor y el tipo de dato )
// >
// >=
// <=
// <
// <>

console.log("Mi edad es : " + edad);


//EVENTO

function load_page() {
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        // imageHeight: 1500,
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer: 2000
    });
    document.getElementById("text").innerText = "el array a calcular es " + array_num;
    document.getElementById("impresion").value = array_num;
    document.getElementById("name_search").value = nombre_form;


    let hour_system = new Date();
    let dia = hour_system.getDay();

    console.log(hour_system.getDate());
    console.log("Dia "+ hour_system.getDay());
    console.log(hour_system.getFullYear());
    console.log(hour_system.getHours());
    console.log(hour_system.getMilliseconds());
    console.log(hour_system.getMonth());
    console.log(hour_system.getSeconds());
    console.log(hour_system.getTime());

   

    let day = ["domingo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    for(let i=0; i<day.length;i++){
        console.log(day[dia]);
    }
    console.log("Hoy es: "+ day[dia]);


    let day_month = hour_system.getMonth()+1;
    console.log(hour_system.getDay()+"/"+hour_system.getMonth()+"/"+hour_system.getFullYear());

    document.getElementById("hour_system").value = hour_system;
    
    

}

function send_form() {

    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let pass_one = document.getElementById("pass_one").value;
    let pass_two = document.getElementById("pass_two").value;
    

    if (name.length == 0 || last_name.length == 0|| pass_one.length == 0|| pass_two.length == 0) {
        Swal.fire({
            title: "Cajas de texto vacias",
            text: "Alguna de las cajas de texto estan vacias",
            icon: "error"
        });

        // if (name.length == 0) {
        //     document.getElementById("name").style.border = "2px solid red"
        // }
        // else {
        //     document.getElementById("name").style.border = "2px solid green"
        // }
        // if (last_name.length == 0) {
        //     document.getElementById("last_name").style.border = "2px solid red"
        // }
        // else {
        //     document.getElementById("last_name").style.border = "2px solid green"
        // }
    }else if(pass_one != pass_two){
        Swal.fire({
            title: "Sus contraseñas no son iguales ",
            text: "Por favor valide sus credenciales",
            icon: "error"
        });
    }
    else {
        document.getElementById("print").innerText = "Su nombre es " + name + "   " + last_name;
        console.log(isNaN(name));
        

    }

}




//ARRAYS
var array_semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_gral = [1, 2, 3, 4.5, "abc", "Soy Marlon"];
var array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var array_multi = [
    { name: "Marlon", age: 18, color: "rojo" },
    { name: "Juan David", age: 18, color: "azul" },
    { name: "Jefferson", age: 19, color: "verde" },
    { name: "Antonella", age: 3, color: "blanco" },

];

var json_ejm = {
    name: "Marlon",
    lastname: "Quintero",
    phone: "3124834683",
    email: "mquinterorin@ufpso.edu.co"
};

console.log(array_semana);
console.log(array_gral);
console.log(array_num);
console.log(array_multi);
console.log(json_ejm);

function action() {
    //alert(array_num);
    //Swa.fire(""+array_num);
    //console.log(array_num);
    //console.log(array_num.length)
    var result = 0;
    for (let i = 0; i < array_num.length; i++) {
        result = result + array_num[i];

    }
    document.getElementById("result").innerHTML = "<strong>El resultado es : " + result + "</strong>";
    document.getElementById("result").style.color = "green";


    //CON UN FOR
    var total = 0;
    for (var j = 0; j < array_multi.length; j++) {
        console.log(array_multi[j].age);
        total = array_multi[j].age + total;
    }
    //alert(total);

    //CON UN WHILE
    var total_dos = 0;
    var w = 0;
    while (w < array_multi.length) {
        total_dos = array_multi[w].age + total_dos;
        w++;
    }
    //alert(total_dos);


}

var array_numerico = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function agregar() {
    let num = document.getElementById("num").value;
    if(isNaN(num) == true){
        Swal.fire("Solo se se aceptan numeros")

    }else{
        let array_add = array_numerico.push(num);
        console.log(array_add);
        console.log(array_numerico);
        document.getElementById("impresion").value = array_numerico
    }
    
}
function eliminar() {
    let = array_delete = array_numerico.pop();
    console.log(array_delete);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico
}
function reves() {
    document.getElementById("impresion").value= array_numerico.reverse();

}
function prim(){
    let num = document.getElementById("num2").value;
    let array_add = array_numerico.unshift(num);
    document.getElementById("impresion").value = array_numerico;
    
}
function limpiar() {
    document.getElementById("num").value = "";
    document.getElementById("name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("result").innerText = "";
}

function eliminarprim(){
    let array_delete = array_numerico.shift();
    document.getElementById("impresion").value=array_numerico;
}



var nombre_form = "Wilder Andres Duarte Neira";

function search(){
    let nombre_buscar = document.getElementById("name_search").value;
    // alert(nombre_buscar);
    Swal.fire(nombre_buscar.toLowerCase());
    // Swal.fire({
    //     title: nombre_buscar.toLowerCase(),
    //     text:"Alguna de las cajas de texto se encuentra vacia",
    //     icon:"error"
    // })

  

    // Swal.fire(nombre_buscar.charAt(0));
    
    // let word =(nombre_buscar.indexOf('e'));
    // let word = nombre_buscar.lastIndex('e');
    // let word = nombre_buscar.substring(5,15);
    let word = nombre_buscar.split("");
    Swal.fire(word+"");

    let word_com = word.join("");
    console.log(word_com);

    

    


}
