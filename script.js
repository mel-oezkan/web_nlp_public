let n_Questions = [];
function testIncrease() {
    n_Questions = [...n_Questions].concat([Math.random() * 100])
}

function logQuestions () { 
    console.log(n_Questions)
}

async function run_model(){

    document.getElementById('feedback').style.display = "none";

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
            max_tokens: 100,
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

async function feedback(){
    var answer = document.getElementById("textbox").value;
    var question = document.getElementById("name").innerHTML;
    question = question.replace(/(\r\n|\n|\r)/gm, "");
    // -------------------------------------------------------------------------------------

    console.log("question: ", question);
    console.log("answer: ", answer);

    const input_2 = `You are a professor in an oral exam at a university. 

    The question is: ${question}
    
    The student responds: ${answer}
    
    Evaluate the students answer to the question and give an explanation.{}`

    // Use the API to get the current user's name
    const response_2 = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer REDACTED_API_KEY', // Max's API key
        },
        body: JSON.stringify({
            model: 'text-davinci-002',
            prompt: input_2,
            max_tokens: 100,
            temperature: 0,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['{}']
        })
    });

    const data_2 = await response_2.json();
    var feedback = data_2.choices[0].text;

    console.log(feedback);

    // Only show when button pressed
    document.getElementById('feedback').innerHTML= feedback;
    document.getElementById('feedback').style.display = "block";
}

function testFunction (){
    console.log("HALLOS");
}

async function generate_question() {
    
    // Get the text from the input box, id = input
    let subject = document.getElementById("input").value;
    subject = subject ? subject : "Neuroscience";
    
    const mode = document.getElementById("mode").value ?? "easy";

    console.log("subject: ", subject);
    console.log("mode: ", mode);

    // creating the prompt for the API call
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
            max_tokens: 100,
            temperature: 0.8,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ['{}']
        })
    });

    const data = await response.json();
    const resp_obj = split_response(data)

    console.log(resp_obj);
    add_question(resp_obj);
}

function split_response(req_data) {
    const request = req_data.choices[0].text.split("?")

    const question = request[0];
    const answer = request[1];

    return {
        "question": question,
        "answer": answer
    }
}


function show_answer(){
    document.getElementById('answer').style.display = "block";
}

function clearInput(){
    document.getElementById('input').value = "";
}
