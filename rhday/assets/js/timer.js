var dataFutura = new Date("august 16, 2024").getTime();
var dias,horas,minutos,segundos;

setInterval(function(){

    var dataAtual = new Date();
    var segundos_f = (dataFutura - dataAtual)/1000;

    dias = parseInt(segundos_f / 86400);
    segundos_f = parseInt(segundos_f % 86400);
    horas = parseInt(segundos_f / 3600);
    segundos_f = parseInt(segundos_f % 3600);
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dias').innerHTML = dias + ' Dias';
    document.getElementById('horas').innerHTML = horas + ' Horas';
    document.getElementById('minutos').innerHTML = minutos + ' Min';
    document.getElementById('segundos').innerHTML = segundos + ' Secs';

},1000);