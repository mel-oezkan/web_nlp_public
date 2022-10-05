
async function load_checker(){	
  	
    // loads the model
    // ... 
    
    document.getElementById('checker').innerHTML="Script is loaded."
}

async function text() {
    document.getElementById('name').innerHTML= nameGenerator();
}

function nameGenerator() {
    var name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        name += possible.charAt(Math.floor(Math.random() * possible.length));

    return name;
}
