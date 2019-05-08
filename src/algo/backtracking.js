let has_conflict = (columns) => {
  let len = columns.length, last = columns[len - 1], previous = len - 2

  while (previous >= 0) {
    if (columns[previous] === last) return true;
    if (last - (len - 1) === columns[previous] - previous) return true;
    if (last + (len - 1) === columns[previous] + previous) return true;
    previous--;
  }

  return false;
}

let place_next_queen = (total, queens, columns) => {
  if (queens === 0) return columns;
  columns = columns || [];

  for (let column = 0; column < total; column++) {
    columns.push(column);
    if (!has_conflict(columns) &&
        place_next_queen(total, queens - 1, columns)) {
      return columns;
    }
    columns.pop(column);
  }

  return null;
}


module.exports = place_next_queen;
