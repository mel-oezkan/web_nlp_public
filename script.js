
// Find response box
var name = document.getElementById("response");

function model_check() {
    document.getElementById('checker').innerHTML="Model loaded."
}

function text() {
    document.getElementById('name').innerHTML= nameGenerator();
}

function nameGenerator() {
    var name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));

    return name;
}

