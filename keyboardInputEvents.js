const form = document.querySelector('form');
const taskInput = document.getElementById('task');

form.addEventListener('submit', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(taskInput.value);

    e.preventDefault();
}