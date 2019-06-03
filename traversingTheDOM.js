let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child'); 

val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Node Types
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype 


// Get children element nodes
// val = list.children;

console.log(val);