const findSubSet = (
  arrayNumbers: Array<number>,
  intValue: number
): [number, number] | string => {
  //Algunas validaciones para el futuro XD, no tengo maquina del tiempo pero soy programador seguro necesitaran de uno para construirla, debo estar preparado LOL.
  if (!Array.isArray(arrayNumbers))
    return `Debe enviar una matriz para realizar la operacion`;
  switch (arrayNumbers.length) {
    case 0:
      return 'La matriz del primer parametro no puede estar vacia';
    case 1:
      return `El array ${arrayNumbers} debe contener al menos 2 numeros`;
  }

  // ahora Empece con el verdadero codigo
  let perfectMatch: [number, number];
  const arrayFirstNum: number = arrayNumbers[0];
  const num2: number = arrayNumbers.find(
    (value, index) => value + arrayFirstNum === intValue
  );

  // Por esto necesito el for, si comparas este codigo con el anterior te daras cuenta que se necesita el for para obtener el index, justo ahora el codigo solo analiza que el primer numero del arreglo sumado con cualquier otro numero sea igual al pair num,  por ejemplo si la posicion 0 de la matriz sumada con cualquier otra posicion no da el resultado buscado, entonces lanzara el mensaje de error, necesito que compare todo el arreglo porque si hay 2 numeros en medio se sumen, he pensando por horas otras forma de como obtener el indice, asi que si existe otra forma, denme otra pista y yo ejecuto, y si no pos no logro ver la forma

  if (num2) {
    perfectMatch = [10, num2];
  }

  //una pequeña validacion más para evitar inconvenientes XD
  if (perfectMatch.length > 1) {
    return perfectMatch;
  }

  return `Dentro del array ${arrayNumbers} ningun numero sumado es igual a ${intValue}`;
  // Dijiste 15 lineas de codigo pero esto es adictivo, asi que escribi un poquito mas :V cuando me selecciones tenemos que celebrar con una partida, estuve revisando su juego fav
};
console.log(findSubSet([2, 5, 8, 14, 0], 10));

console.log(findSubSet([5, 8, 14, 2, 7], 10));

console.log(findSubSet([2, 5, 7, 10, 11, 15, 20], 13));
