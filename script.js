

async function run_model(){

    // Get the text from the input box, id = input
    //var input = document.getElementById("input").value;
    const input = `You are a professor in an oral exam. The subject is computer science. 
    Ask me a question about the subject and dont ask the same question twice.{}`

    // Use the API to get the current user's name
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer REDACTED_API_KEY', // Max's API key
        },
        body: JSON.stringify({
            model: 'text-davinci-002',
            prompt: input,
            max_tokens: 150,
            temperature: 0.8,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['{}']
        })
    });
    const data = await response.json();
    console.log(data);
    console.log(data.choices[0].text);

    document.getElementById('name').innerHTML= data.choices[0].text;
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
    document.getElementById('name').innerHTML= model();
}
