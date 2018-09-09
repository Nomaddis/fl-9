const rootNode = document.getElementById('root');
let checkTask = document.getElementById('taskList');
let notification = document.getElementById('index-notification');
let taskInput = document.getElementById('addInput');
let editInput = document.getElementById('editInput');
const ZERO = 0;
const MINUS_ONE = -1;
const empty = 0;
let items = [];
let pages = ['index', 'add', 'modify'];

// let id = [];
// let labelToEdit = null;

//

//
// function load() {
//     items = loadFromLocalStorage();
//     id = getNextId();
//
//     items.forEach(item => renderItem(item));
// }
//
// load();
//
// function getNextId() {
//
//     for (let i = 0; i<items.length; i++) {
//         let item = items[i];
//         if (item.id > id) {
//             id = item.id;
//         }
//     }
//     id++;
//     return id;
// }
// function modifyTask() {
//     if (editInput.value) {
//         let item = findItem(labelToEdit);
//         item.description = editInput.value;
//         labelToEdit.innerText = editInput.value;
//         saveToLocalStorage();
//         show('index');
//     }
// }
//
// function findItem(child) {
//     let listItem = child.parentNode;
//     let id = listItem.getAttribute('data-id');
//     id = parseInt(id);
//     let item = items.find(item => item.id === id);
//     return item;
// }
//
// function show(shown) {
//     location.href = '#' + shown;
//     pages.forEach(function(page) {
//         document.getElementById(page).style.display = 'none';
//     });
//     document.getElementById(shown).style.display = 'flex';
//     return false;
// }
//
//
// function checkItem(checkBox) {
//     checkBox.setAttribute('src', 'assets/img/done-s.png');
// }
//
// function setChecked(checkbox, isDone) {
//     if (isDone) {
//         checkbox.classList.add('checked');
//         checkbox.src = 'assets/img/done-s.png';
//         let newPosition = checkTask.childElementCount - 1;
//         let listItem = checkbox.parentNode;
//         listItem.classList.add('checked');
//         checkTask.removeChild(listItem);
//         checkTask.appendChild(listItem);
//     } else {
//         checkbox.classList.remove('checked');
//         checkbox.src = 'assets/img/todo-s.png';
//         let listItem = checkbox.parentNode;
//         listItem.classList.remove('checked');
//     }
// }
//
// function loadFromLocalStorage() {
//     let localStorageItems = localStorage.getItem('items');
//     if (localStorageItems === null) {
//         return [];
//     }
//     return JSON.parse(localStorageItems);
// }
//

//
//
// function renderItem(item) {
//     let listItem = document.getElementById('item_template').cloneNode(true);
//     listItem.style.display = 'flex';
//     listItem.setAttribute('data-id', item.id);
//     let label = listItem.querySelector('label');
//     label.innerText = item.description;
//     let checkbox = listItem.querySelector('input');
//     checkTask.appendChild(listItem);
//     setChecked(checkbox, item.isDone);
//     notification.style.display = 'block';
//     return listItem;
// }
//
// function createNewElement(task, isDone) {
//     let item = { isDone, id: id++, description: task };
//     items.push(item);
//     saveToLocalStorage();
//     renderItem(item);
// }
//
// function modifyItem(label) {
//     labelToEdit = label;
//     editInput.value = label.innerText;
//     show('modify');
//     editInput.focus();
//     editInput.select();
// }
//
// function addTask() {
//     if (taskInput.value !== "") {
//         createNewElement(taskInput.value, false);
//         taskInput.value = '';
//         show('index');
//     }
// }



function deleteNode(button) {
    let id = button.parentNode.getAttribute('data-id');
    id= parseInt(id);
    for (let i in items) {
        if (items[i].id === id) {
            items.splice(i, 1);
            break;
        }
    }
    let num = getClosest(button, 'li');
    num.remove();
    saveToLocalStorage();
    if (items.length === empty) {
        notification.style.display = 'flex';
    }
}

function getClosest(elem, selector) {
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                let matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= ZERO && matches.item(i) !== this) {
                    //
                }
                return i > MINUS_ONE;
            };
    }
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) {
            return elem;
        }
    }

    return null;
}

function saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
}
