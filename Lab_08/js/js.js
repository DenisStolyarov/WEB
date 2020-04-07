jsonArray = '[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]';

function Show() {
    let arr = [
        { a: 1, b: 2, c: 3 },
        { a: 3, b: 5, c: 1 },
        { a: 2, b: 3, c: 9 },
        { a: 2, b: 5, c: 9 },
        { a: 2, b: 3, c: 10 }
    ]

    jsonStr = JSON.stringify(arr)

    document.getElementById("out_json").innerHTML = jsonStr.toString();

    function getSortedScore(obj) {
        var keys = [];
        for (var key in obj[0]) keys.push(key);
        return obj.sort(function(a, b) {
            for (var i in keys) {
                let k = keys[i];
                if (a[k] - b[k] > 0) return -1;
                else if (a[k] - b[k] < 0) return 1;
                else continue;
            };
        });
    }

    console.log(getSortedScore(JSON.parse(jsonStr)));
}