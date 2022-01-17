const findSubSet = (
  arrayNumbers: Array<number>,
  intValue: number
): Array<number> | string => {
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

  let perfectMatch: Array<number> = [];
  const size = arrayNumbers.length;

  for (let i = 0; i < size; i++) {
    const num1 = arrayNumbers[i];
    for (let j = 0; j < size; j++) {
      if (i === j || isNaN(num1)) continue;
      const num2 = arrayNumbers[j];
      if (num1 + num2 === intValue) {
        perfectMatch = [num1, num2];
        break;
      }
    }
  }
  //una pequeña validacion más para evitar inconvenientes XD
  if (perfectMatch.length > 1) {
    return perfectMatch;
  }

  return `Dentro del array ${arrayNumbers} ningun numero sumado es igual a ${intValue}`;

  // Dijiste 15 lineas de codigo pero esto es adictivo, asi que escribi un poquito mas :V cuando me selecciones tenemos que celebrar con una partida, estuve revisando su juego fav
};
console.log(findSubSet([0, 5, 8, 14, 2, 7], 10));

console.log(findSubSet([5, 8, 14, 2, 7], 10));

console.log(findSubSet([2, 5, 7, 10, 11, 15, 20], 13));
