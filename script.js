
async function load_checker(){	
  	
    // loads the model
    // ... 
    
    document.getElementById('checker').innerHTML="Script is loaded."
}

async function fetchRequest() {
    fetch()
        .then((response) => response.json())
        .then((data) => console.log(data));

    const data = { username: 'example' };

    fetch('https://api.openai.com/v1/completions', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
    
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        

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
