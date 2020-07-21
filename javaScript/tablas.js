window.addEventListener('load',function(){



    Filas.addEventListener('blur',function()
    {
        mensajeTabla1.innerHTML=""
        if(Filas.value<=0 || Filas.value>5)
        {
            mensajeTabla1.innerHTML+="Ingrese un valor entre 1 y 5"
        }
    })
    Columnas.addEventListener('blur',function()
    {
        mensajeTabla1.innerHTML=""
        if(Columnas.value<=0 || Columnas.value>5){
            mensajeTabla1.innerHTML+="Ingrese un valor entre 1 y 5"
        }
    })
//generacion de tabla 1
    btnGenerar.addEventListener('click',function(){
       
        numeroF=Filas.value
        numeroC=Columnas.value
        contador=0
        mensajeTabla1.innerHTML=""
        let contenidoHTML='<table border=1 id="llenarTabla">'
        for(let i=0;i<numeroF;i++)
        {
            contenidoHTML+="<tr>"
            for(let j=0;j<numeroC;j++)
            {
                contenidoHTML+="<td>"
                contenidoHTML+=`<input placeholder=" numero" id="id${++contador}"></input>`
                contenidoHTML+="</td>"
            }
            contenidoHTML+="</tr>"
        }
        contenidoHTML+="</table>"

        mostrarTabla1.innerHTML=contenidoHTML;
        if(contenidoHTML <=0  || contenidoHTML>9){
            mensajeTabla9 += "Ingrese valores entre 1 y 9 "
        }
    })


    //tabla2
    txtFilas.addEventListener('blur',function()
    {
        mensajeTabla.innerHTML=""
        if(txtFilas.value<=0 || txtFilas.value>5)
        {
            mensajeTabla.innerHTML+="Ingrese un valor entre 1 y 5"
        }
    })
    txtColumnas.addEventListener('blur',function()
    {
        mensajeTabla.innerHTML=""
        if(txtColumnas.value<=0 || txtColumnas.value>5){
            mensajeTabla.innerHTML+="Ingrese un valor entre 1 y 5"
        }
    })
//generacion de tabla 2
    btnGenerar1.addEventListener('click',function(){
       
        numeroF=txtFilas.value
        numeroC=txtColumnas.value
        contador=0
        let contenidoHTML='<table border=1 id="llenarTabla">'
        for(let i=0;i<numeroF;i++)
        {
            contenidoHTML+="<tr>"
            for(let j=0;j<numeroC;j++)
            {
                contenidoHTML+="<td>"
                contenidoHTML+=`<input placeholder="número" id="id${++contador}"></input>`
                contenidoHTML+="</td>"
            }
            contenidoHTML+="</tr>"
        }
        contenidoHTML+="</table>"

        mostrarTabla.innerHTML=contenidoHTML;
    })
//-------------------------------------------------------------------------------

   

    //suma de las 2 tablas  
  

})

