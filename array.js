const spiralLeft = (array, startColumn, startRow) => {
  let step = 1;
  let counter = 1;

  const trueSize = Math.max(array[0].length - startColumn, array.length - startRow);

  while (Math.floor(step / 2) < trueSize) {
    for (let i = startColumn; i > startColumn - step - 1; i--) {
      if (array[startRow] && array[startRow][i] !== undefined) array[startRow][i] = counter++;
    };
    startRow--;
    startColumn -= step;

    for (let i = startRow; i > startRow - step; i--) {
      if (array[i] && array[i][startColumn] !== undefined) array[i][startColumn] = counter++;
    };
    startColumn++;
    startRow -= step - 1;

    for (let i = startColumn; i < startColumn + step + 1; i++) {
      if (array[startRow] && array[startRow][i] !== undefined) array[startRow][i] = counter++;
    };
    startColumn += step;
    startRow++;

    for (let i = startRow; i < startRow + step; i++) {
      if (array[i] && array[i][startColumn] !== undefined) array[i][startColumn] = counter++;
    };

    startRow += step;

    step += 2;
  }

  return array;
}

const spiralRight = (array, startColumn, startRow) => {
  let step = 1;
  let counter = 1;

  const trueSize = Math.max(array[0].length - startColumn, array.length - startRow);

  while (Math.floor(step / 2) < trueSize) {
    for (let i = startColumn; i < startColumn + step + 1; i++) {
      if (array[startRow] && array[startRow][i] !== undefined) array[startRow][i] = counter++;
    };
    startColumn += step;
    startRow++;

    for (let i = startRow; i < startRow + step; i++) {
      if (array[i] && array[i][startColumn] !== undefined) array[i][startColumn] = counter++;
    };
    startColumn--;
    startRow += step - 1;

    for (let i = startColumn; i > startColumn - step - 1; i--) {
      if (array[startRow] && array[startRow][i] !== undefined) array[startRow][i] = counter++;
    };
    startRow--;
    startColumn -= step;

    for (let i = startRow; i > startRow - step; i--) {
      if (array[i] && array[i][startColumn] !== undefined) array[i][startColumn] = counter++;
    };
    startRow -= step;

    step += 2;
  }

  return array;
}

const spiral = (sizeColumns, sizeRows, startColumn, startRow, direction) => {
  startColumn--;
  startRow--;
  const array = [];
  for (let i = 0; i < sizeRows; i++) {
    array.push([]);
    for (let j = 0; j < sizeColumns; j++) {
      array[i].push(0);
    }
  }

  if (direction === 'left') {
    return spiralLeft(array, startColumn, startRow);
  } else if (direction === 'right') {
    return spiralRight(array, startColumn, startRow);
  } else {
    return 'Provide a proper direction left or right';
  }
};

console.log(spiral(5, 6, 2, 4, 'left'));