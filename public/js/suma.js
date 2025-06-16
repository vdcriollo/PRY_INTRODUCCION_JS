// crear mi funcion para sumar
function calcular_suma(){

    // aceder a los input
    let n1= document.getElementById("primer_numero").value;
    let n2= document.getElementById("segundo_numero").value;
    
    // realizar calculo para la suma
    let res=parseFloat(n1)+ parseFloat(n2);

    // acceer al h1 del resultado y actualizar su valor html
    let h1_res=document.getElementById("txt_resultado");
    h1_res.innerHTML=res;

}