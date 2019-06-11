const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
// const select = document.querySelector('select')

// Clear input
taskInput.value = ''; // this line clears the form. you want to run this once a form has been submitted

// form.addEventListener('submit', runEvent); // form with an event listener that passes in submit and the runEvent function 

// //Keydown
// taskInput.addEventListener('keydown', runEvent);

// //Keyup
// taskInput.addEventListener('keyup', runEvent);

// //Keypress
// taskInput.addEventListener('keypress', runEvent);

// //Focus
// taskInput.addEventListener('focus', runEvent);

// //Blur
// taskInput.addEventListener('blur', runEvent);

// //Cut
// taskInput.addEventListener('cut', runEvent);

// //Paste
// taskInput.addEventListener('paste', runEvent);

// //Input
// taskInput.addEventListener('input', runEvent);

// // Change
// select.addEventListener('change',runEvent);


function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);

    // heading.innerText = e.target.value;

//     //Get input value
//     console.log(taskInput.value);

//     e.preventDefault(); //Usually when you set a submit you may want to have a preventDefault(); inside the function
}