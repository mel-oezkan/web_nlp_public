let questionTopic = undefined;
let questionType = undefined;
let questionDiff = undefined;

function handleDropdown(obj_id) {
    document.getElementById("Drop-" + obj_id).classList.toggle("show");
}

function handleValue(source, value) {
    let sourceDom = document.getElementById("Head-" + source);
    sourceDom.value = value;

    document.getElementById("Drop-" + source).classList.remove('show');
}
