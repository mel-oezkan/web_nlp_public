let n_Questions = [];

function testIncrease() {
    n_Questions = [...n_Questions].concat([Math.random() * 100])
}

function logQuestions () { 
    console.log(n_Questions)
}

async function run_model(){

    // Get the text from the input box, id = input
    var subject = document.getElementById("input").value;
    var mode = document.getElementById("mode").value;
    
    console.log(subject);
    console.log(mode);

    const input = `You are a professor in an oral exam at a university.
    The subject is ${subject}. Ask me a ${mode} knowledge question about the subject and answer it
    in a new line.{}`

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
            max_tokens: 50,
            temperature: 0.8,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['{}']
        })
    });

    // convert the data into json
    const data = await response.json();
    
    // Split the string from the ? to the end into a new string
    var request = data.choices[0].text.split("?");
    var question = request[0] + "?";
    var answer = request[1];

    // write the resulting result as item
    document.getElementById('name').innerHTML= question;

    // Only show answer when the user clicks the button
    document.getElementById('answer').innerHTML= answer;
    document.getElementById('answer').style.display = "none";
}

function show_answer(){
    document.getElementById('answer').style.display = "block";
}