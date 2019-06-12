// // Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // Set session storage item - this will clear once the session has ended
// sessionStorage.setItem('name', 'Beth');

// // Remove from storage
// localStorage.removeItem('name')

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // Clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){ // if local storage .get item tasks is null, theres nothing in there for tasks
        tasks = []; // set an array and add to it
    } else {                                    // if there is something, then we want to set tasks equal to whats in there 
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }

    tasks.push(task); // adds task item to the array

    localStorage.setItem('tasks', JSON.stringify(tasks)); // Puts into a string inside an array
    alert('Task saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})