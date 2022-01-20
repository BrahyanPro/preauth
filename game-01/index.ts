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
  let secondNum: number = intValue - arrayFirstNum;

  //Sebastian me pusiste a flipar, ves que aprendo rapido, ves? a que te gustaria trabajar conmigo, a que si? a que si?, estamos en contacto

  if (secondNum) {
    perfectMatch = [arrayFirstNum, secondNum];
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
