// var rootNode = document.getElementById("root");
//
// // Your code goes here
//
// rootNode.appendChild(/* Append your list item node*/);


let addTaskItem = document.getElementById('addItem');
let taskItemList = document.getElementById('main-list');
let checkboxTask = document.getElementById('checkbox-task');

let listItemEdit = document.getElementById('listitem-edit');

function updateFrom(button) {
    let element = document.getElementById('main-list');
    // let num = button.parentNode.querySelector("li");
    let num = getClosest(button, 'li');
    console.log(element);
    console.log(num);
    element.parentNode.removeChild(num);
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
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }
    // Get the closest matching element
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }
    return null;

}



function deleteTaskItem(e) {
    if (e.target.nodeName === "BUTTON" || e.target.nodeName === "I") {
        updateFrom(e.target);
        console.log(e.target);
    }
}



function addTask(event) {
    let userInput = document.getElementById('taskDescription').value;
    document.getElementById('taskDescription').value = '';
    if(userInput.length === 0) {
        userInput.innerHTML = "Please fill in the form!";
    } else {
        let newTask = `
              <div id="main-list__item" class="listitem main-list__item">
                <div class="listitem-group">
                  <div id="listitem-checkox"><i class="material-icons">check_box_outline_blank</i></div>
                  <div class="listitem-text"><span>${userInput}</span></div>
                </div>
                <button id="listitem-edit"><i class="material-icons">delete</i></button>
              </div>
        `;
        let listItem = document.createElement('li');
        listItem.innerHTML = newTask;
        document.getElementById('main-list').appendChild(listItem);
    }
    event.preventDefault();
}

function changeCheckboxStatus(event) {
    event.srcElement.innerHTML = 'check_box';
}

addTaskItem.addEventListener("click", addTask, false);
checkboxTask.addEventListener("click", changeCheckboxStatus, false);
taskItemList.addEventListener("click", deleteTaskItem, false);
// listItemEdit.addEventListener("click", deleteTaskItem, false);