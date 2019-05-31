// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[1]);
items[0].style.color = 'red'
items[3].textContent = 'Cams the man'

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementByTagName
const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[2].style.color = 'red'
lis[3].textContent = 'Cams the man'