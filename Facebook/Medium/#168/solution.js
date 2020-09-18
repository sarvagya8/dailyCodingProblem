// O(N²) Time
// O(1) Space
function rotateMatrix(matrix) {
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = i; j < matrix[0].length; j += 1) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[0].length / 2; j += 1) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[0].length - j - 1];
            matrix[i][matrix[0].length - j - 1] = temp;
        }
    }
}
