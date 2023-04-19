function regresiva(tiempo){
    if(tiempo == 0){
        salida.textContent = 'finish';
        return
    }else if(isNaN(tiempo)){
        alert('No es un tiempo valido.')
    }else{
        salida.textContent = tiempo;
        return setTimeout(regresiva,1000,tiempo-1)
    }
}