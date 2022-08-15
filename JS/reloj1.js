function obtenerHora (){
    let fechaActual = new Date();
    let diaSemanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let parrafoFecha = document.querySelector('#fecha');
    parrafoFecha.innerHTML = `${diaSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;
    let parrafoHora = document.querySelector('#hora');

    let horas = fechaActual.getHours();
if(horas < 10){
    horas = '0' + horas;
}
if(horas < 13){
    momento = 'AM';
}else(momento ='PM');
    let minutos = fechaActual.getMinutes();
if(minutos < 10){
    minutos = '0' + minutos;
}
    let segundos = fechaActual.getSeconds();
    if(segundos < 10){
        segundos = '0'+ segundos;
    }
    parrafoHora.innerHTML = `<p>${horas}:${minutos}:<ul><li>${momento}<br>${segundos}</li></ul></p>`;
}

setInterval(obtenerHora,1000);