window.addEventListener('load',function(){


//tabla1
nFilas1.addEventListener('blur',function()
{
    mensajeTabla1.innerHTML=""
    if(nFilas1.value<=0 || nFilas1.value>5)
    {
        mensajeTabla1.innerHTML+="Ingrese un valor entre 1 y 5"
    }
})
nColumnas1.addEventListener('blur',function()
{
    mensajeTabla1.innerHTML=""
    if(nColumnas1.value<=0 || nColumnas1.value>5){
        mensajeTabla1.innerHTML+="Ingrese un valor entre 1 y 5"
    }
})
//generacion de tabla 1
btnGenerar.addEventListener('click',function(){
    numeroF=nFilas1.value
    numeroC=nColumnas1.value
    let contenidoHTML="<table border=1>"
    for (i=1; i<=numeroF; i++)
        {
            contenidoHTML+="<tr>"

            for (j=1; j<=numeroC; j++)
            {
                contenidoHTML +="<td>"
                contenidoHTML +=i*j
                contenidoHTML+="</td>"
            }
            contenidoHTML +="</tr>"
        }        
         
    contenidoHTML +="</table>"

    mostrarTabla1.innerHTML = contenidoHTML;    


})
/**********************TABLA2 2******************************************* */
//tabla2
nFilas2.addEventListener('blur',function()
{
    mensajeTabla2.innerHTML=""
    if(nFilas2.value<=0 || nFilas2.value>5)
    {
        mensajeTabla2.innerHTML+="Ingrese un valor entre 1 y 5"
    }
})
nColumnas2.addEventListener('blur',function()
{
    mensajeTabla2.innerHTML=""
    if(nColumnas2.value<=0 || nColumnas2.value>5){
        mensajeTabla2.innerHTML+="Ingrese un valor entre 1 y 5"
    }
})
//generacion de tabla 2
btnGenerar2.addEventListener('click',function(){
    numeroF=nFilas2.value
    numeroC=nColumnas2.value
    let contenidoHTML="<table border=1>"
    for (i=1; i<=numeroF; i++)
        {
            contenidoHTML+="<tr>"

            for (j=1; j<=numeroC; j++)
            {
                contenidoHTML +="<td>"
                contenidoHTML +=i*j
                contenidoHTML+="</td>"
            }
            contenidoHTML +="</tr>"
        }        
         
    contenidoHTML +="</table>"

    mostrarTabla2.innerHTML = contenidoHTML;    


})
/***************************TABLA 3*************************************** */
//tabla1
nFilas3.addEventListener('blur',function()
{
    mensajeTabla3.innerHTML=""
    if(nFilas3.value<=0 || nFilas3.value>5)
    {
        mensajeTabla3.innerHTML+="Ingrese un valor entre 1 y 5"
    }
})
nColumnas3.addEventListener('blur',function()
{
    mensajeTabla3.innerHTML=""
    if(nColumnas3.value<=0 || nColumnas3.value>5){
        mensajeTabla3.innerHTML+="Ingrese un valor entre 1 y 5"
    }
})
//generacion de tabla 1
btnGenerar3.addEventListener('click',function(){
    numeroF=nFilas3.value
    numeroC=nColumnas3.value
    let contenidoHTML="<table border=1>"
    for (i=1; i<=numeroF; i++)
        {
            contenidoHTML+="<tr>"

            for (j=1; j<=numeroC; j++)
            {
                contenidoHTML +="<td>"
                contenidoHTML +=i*j
                contenidoHTML+="</td>"
            }
            contenidoHTML +="</tr>"
        }        
         
    contenidoHTML +="</table>"

    mostrarTabla3.innerHTML = contenidoHTML;    


})


})