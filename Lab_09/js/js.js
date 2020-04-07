function Show() {
    var array = [10, 16, 5, 11, 56];
    var resultArray = new Array(array.length);
    for (let index = 0; index < array.length; index++) {
        resultArray[index] = parseInt(array[index].toString(), 10).toString(16)
    }
    document.getElementById("out_cod").innerHTML = resultArray;
    for (let index = 0; index < array.length; index++) {
        resultArray[index] = parseInt(resultArray[index].toString(), 16).toString(10)
    }
    document.getElementById("out_decod").innerHTML = resultArray;
}