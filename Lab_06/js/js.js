jsonObject = '{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}';
jsonArray = '[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]';

function Fill() {

    let student = JSON.parse(jsonObject);
    let array = JSON.parse(jsonArray);
    document.getElementById("resultObject").innerHTML = student.name + " " + student.age;
    var result = array.filter(function(param) {
        return param % 3 != 0;
    })
    document.getElementById("resultArray").innerHTML = result.toString();
}