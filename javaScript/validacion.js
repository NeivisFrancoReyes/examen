window.addEventListener('load',function(){
    
    
    
    //validacion de cedula 
    txtcedula.addEventListener('blur',function(){
      //  mensajeCedula.innerHTML=""
        if (this.value.length!=10)
        {
           // alert("la cedula debe cumplir con 10 caracteres"+mensajeCedula.innerHTML)//
            mensajeCedula.innerHTML +='No tiene el número de caracteres correcto <br>'
            //return false;
        }
        if (!validarCedula(this.value))
        {
            //alert("No cumple con los registro de validacion "+mensajeCedula.innerHTML)
            mensajeCedula.innerHTML +='No cumple los criterios de validación <br>'
            //return false;
        }
        

    })


    //validacion de telefono 
    telefono.addEventListener('blur',function(){
        mensajetelefono.innerHTML=""
        var phone =/^\(?([052]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
        if(telefono.value == phone){    
            mensajetelefono.innerHTML+="el numero ingresado es el correcto"        
        }
        else{
            mensajetelefono.innerHTML += "el numero de telefono no coindice con el codigo provincial 052"
        }
        
        
    })

    //validacion de filas 
    nFilas.addEventListener('blur',function(){
        mensajeFilas.innerHTML=""
        if(nFilas.value<=0 || nFilas.value>5){
            mensajeFilas.innerHTML+="Ingrese un valor entre 1 y 5"
            
        }
    })

    
    //validacion de columnas
    nColumnas.addEventListener('blur',function(){
        mensajeColumnas.innerHTML=""
        if(nColumnas.value<=0 || nColumnas.value>5){
            mensajeColumnas.innerHTML+="Ingrese un valor entre 1 y 5"
            
        }
    })

})
function validarCedula(parametro)
{
    if (parametro.length!=10)
        return false;
    let calculo=0;
    let semaforo=false;
    parametro.substr(0,9).split('').forEach(element => {
        let numeroActual= semaforo? parseInt(element) :  parseInt(element)*2
        calculo+= numeroActual>9? numeroActual-9: numeroActual;
        semaforo= !semaforo;
    });    
    while (calculo>0) calculo-=10; 
    return  parseInt(parametro.substr(9)) + calculo==0;
}

