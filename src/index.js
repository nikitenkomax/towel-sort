// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    }
    let newArr = [];
    for (let k = 0; k < matrix.length; k++) {
        if (k % 2 === 0) {
            matrix[k].forEach((item) => {
                newArr.push(item);
            });
        } else if (k % 2 !== 0) {
            matrix[k].reverse().forEach((item) => {
                newArr.push(item);
            });
        }
    }
    return newArr;
};
