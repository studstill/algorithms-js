function zombify(matrix, virusStrength, row, col) {

  function infect(row, col) {
    // Check that there is a row, then check that there is a column on
    // the row, then check if it's already infected
    if (!matrix[row] || !matrix[row][col] || matrix[row][col] == -1)
      return;
    if (matrix[row][col] <= virusStrength) {
      matrix[row][col] = -1;
      spread(row, col)
    }
  }

  function spread(row, col) {
    infect(row - 1, col);
    infect(row + 1, col);
    infect(row, col - 1);
    infect(row, col + 1);
  }

  infect(row, col);
  return matrix;
}
