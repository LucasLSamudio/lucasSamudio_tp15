function converMinToHour(min){
    let minutos = 0;
    let hora = min / 60;
    hora = Math.floor(hora)
    minutos = min % 60;
    let mensaje = `${hora}hs ${minutos}m`
    return mensaje;
}
module.exports = converMinToHour;