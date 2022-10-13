

function initalizeStorage () {
    console.log("outputs: ", localStorage.getItem("outputs"))
}

function debugAddStorage() {
    let currValues = debugGetStorage() ?? [];

    currValues = [...currValues].concat(
        Math.floor(Math.random() * 100));

    const serial_values = JSON.stringify(currValues)
    localStorage.setItem('debug', serial_values);
    
    console.log(currValues)
}

function debugGetStorage() {
    const str_storage = localStorage.getItem("debug")
    return JSON.parse(str_storage);
}

function debug_print_storage() {
    let currValues = debugGetStorage() ?? [];
    console.log(currValues)
}

function reset_storage() {
    localStorage.clear();
    console.log(debugGetStorage());
}

function add_question(obj) {
    let currValues = debugGetStorage() ?? [];

    currValues = [...currValues].concat(
        obj
    );

    // serialize the local storage items
    const serial_values = JSON.stringify(currValues)
    localStorage.setItem('debug', serial_values);
}
