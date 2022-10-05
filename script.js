

async function model(){	

    // Use the API to get the current user's name
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer REDACTED_API_KEY', // Max's API key
        },
        body: JSON.stringify({
            model: 'text-davinci-002',
            prompt: 'This is a test for',
            max_tokens: 100,
            temperature: 0.8,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['\n']
        })
    });
    const data = await response.json();
    console.log(data);

    // PRint the response text in choices/text to the console
    console.log(data.choices[0].text);
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
