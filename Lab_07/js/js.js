function readFile(object) {
    var file = object.files[0]
    var reader = new FileReader()
    reader.onload = function() {
        var parser = new DOMParser();

        // XMLDocument object:
        var doc = parser.parseFromString(reader.result, "text/xml");
        console.log(reader.result);
        var result = doc.getElementsByTagName("author")[3].innerHTML; //.getElementsByTagName("firstName");
        console.log(result);
        document.getElementById('out').innerHTML = result;
    }
    reader.readAsText(file)
}