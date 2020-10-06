alert('Hi!');

/*
var nombre = "Arturo Abiran"
var altura = 179;

var concatenacion = nombre + " " + altura;

if(altura >=185){
    datos.innerHTML += '<h3>Eres una persona ALTA</h3>';
}else{
    datos.innerHTML += '<h3>Eres una persona BAJITA</h3>';
}

for(var i = 2000; i<=2020; i++){
    datos.innerHTML += "<h2>estamos en el año: " + i;
}
*/

function MuestraMiNombre(nombre, altura){
    var datos = document.getElementById("datos");
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mi altura es: ${altura} cm</h3> 
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Arturo Abiran", 169);
}

imprimir();

var nombres = ['Arturo', 'Abiran', 'Mac'];
alert(nombres[0])

document.write('<h1>Listado de nombres</h1>');

/*
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>);
}
*/
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
})