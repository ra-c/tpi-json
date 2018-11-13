var request = new XMLHttpRequest();
request.open("GET", "./es2.json", false);
request.send();
var pippo = JSON.parse(request.responseText);
alert (pippo.libri[0].codiceLibro);