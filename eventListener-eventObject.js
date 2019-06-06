// add an event listener

document.querySelector('.clear-tasks').addEventListener('click', function(e){ // unamed function
    console.log('Hello World');

    //e.preventDefault(); this is a parameter to stop a default link behavior
});

document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e){ // named event function
    // console.log('Clicked');

    let val;

    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // Event type
    val = e.type;

    //Timestamp
    val = e.timeStamp

    // Coordinates event relative to the window (browser window)
    val = e.clientY;
    val = e.clientX;

    // Coordinates event relative to the element (CLEAR TASKS BTN) 
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
};