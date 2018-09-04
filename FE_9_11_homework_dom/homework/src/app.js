let addTaskItem = document.getElementById('addItem');
let taskItemList = document.getElementById('main-list');
let input = document.getElementById('taskDescription');
let inputBtn = document.getElementById('addItem');
let error = document.getElementById('maximumError');
error.style.display = 'none';
let qtyOfItems = 0;
const MAX_SIZE_OF_TASKS = 10;
const ONE = 1;
const MINUS_ONE = 1;
const ZERO = 0;
let dragSrcEl = null;

function deleteNode(button) {
    let num = getClosest(button, 'li');
    num.remove();
}

function toggleNodeShowing(element) {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function toggleActions() {
    if (input.disabled === true) {
        input.disabled = false;
        inputBtn.disabled = false;
    } else {
        input.disabled = true;
        inputBtn.disabled = true;
    }
}

function toggleAction(element) {
    if (element.disabled === true) {
        element.disabled = false;
    } else {
        element.disabled = true;
    }
}

function changeItem(e) {
    console.log(e.target.nodeName);
    if (e.target.nodeName === 'I' && e.target.id !== 'checkbox-task' ) {
        if(qtyOfItems === MAX_SIZE_OF_TASKS) {
            deleteNode(e.target);
            toggleActions();
            toggleNodeShowing(error);
        } else {
            deleteNode(e.target);
        }
        qtyOfItems = qtyOfItems - ONE;
    } else if(e.target.id === 'checkbox-task'){
        changeCheckboxStatus(e.target);
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

function addTask(event) {
    let userInput = document.getElementById('taskDescription').value;
    document.getElementById('taskDescription').value = '';
    if(userInput.length === ZERO) {
        alert('Please fill in the form!');
    } else if(qtyOfItems < MAX_SIZE_OF_TASKS) {
        let newTask = `
              <div id="main-list__item" class="listitem main-list__item">
                <div class="listitem-group">
                  <div id="listitem-checkox">
                      <i class="material-icons" id="checkbox-task">
                      check_box_outline_blank
                      </i>
                  </div>
                  <div class="listitem-text"><span>${userInput}</span></div>
                </div>
                <button id="listitem-edit"><i class="material-icons">delete</i></button>
              </div>
        `;
        let listItem = document.createElement('li');
        listItem.setAttribute('draggable', true);
        listItem.innerHTML = newTask;
        document.getElementById('main-list').appendChild(listItem);
        qtyOfItems = qtyOfItems + ONE;
        console.log(qtyOfItems);
        if (qtyOfItems === MAX_SIZE_OF_TASKS) {
            toggleNodeShowing(error);
            toggleActions();
        }
    }
    let cols = document.querySelectorAll('#main-list li');
    [].forEach.call(cols, addDnDHandlers);
    event.preventDefault();
}

function changeCheckboxStatus(elem) {
    elem.innerHTML = 'check_box';
}

addTaskItem.addEventListener('click', addTask , false);
taskItemList.addEventListener('click', changeItem, false);

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
  this.classList.add('dragElem');
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(e) {
//
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcEl !== this) {
    this.parentNode.removeChild(dragSrcEl);
    let dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    let dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
    
  }
  this.classList.remove('over');
  return false;
}

function handleDragEnd(e) {
  this.classList.remove('over');
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false)
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);
}
