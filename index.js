let frutachida = "fresa"

let numero1 = 10

let numero2 = "10"


function liquar(liquido, fruta){
  if(liquido === 'leche'){
    return `liquado de ${fruta}`
  } else if (liquido === 'agua'){
    return "jugo de " + fruta
  }
}

liquar('agua', frutachida)  
liquar('leche', 'platano')  


console.log(numero1 == numero2)

console.log(numero1 === numero2)




function correr(persona, distancia){
  if(persona === "coreano"){
    return `camina ${distancia}`
  }
  else if (persona === "chino"){
   return `corre ${distancia}`
  }
}


correr('chino', 67)   // corre 67  

correr('coreano', 20) // camina 20 


/**
 *  =    es un operador de asignacion 
 * 
 *  ==   es un operador de igualdad de valores
 * 
 * 
 *  ===  es un operador de igualdad de valores y de tipo de datos
 * 
 * 
 * 
 * 
 */