function greet() {
    console.log("test");
}

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

function debugUpdateStorage() {
    localStorage.getItem("debug")
}