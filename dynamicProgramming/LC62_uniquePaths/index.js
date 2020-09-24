function uniquePaths(m, n) {
    // creating subrrays in the matrix
    const matrix = [];
    for(let i = 0; i <= n; i++) {
        matrix.push([]);
    }

    //fill out the row with initial 1s
    for(let row = 0; row < n; row++) {
        matrix[row][0] = 1;
    }

    //fill out the col with initial 1s
    for(let col = 0; col < m; col++) {
        matrix[col][0] = 1;

        for(let row = 1; row < n; row++) {
            for(let col = 1; col < m; col++) {
                matrix[row][col] = matrix[row][col - 1] + matrix[row - 1][col];
            }
        }
    }
    return matrix[matrix.length - 1][m - 1];
}

module.exports = uniquePaths;
