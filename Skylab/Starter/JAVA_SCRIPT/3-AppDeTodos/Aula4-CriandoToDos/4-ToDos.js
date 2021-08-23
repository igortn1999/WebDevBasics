var listElement = document.querySelector('#app ul');
var inputElemnt = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    'fazer cafe',
    'Estudar JS',
    'Mais cafe'
];

function renderTodos(){

    listElement.innerHTML = '';
    for(todo of toDos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElemnt.value;

    toDos.push(todoText);
    inputElemnt.value='';
    renderTodos();
}
buttonElement.onclick = addTodo();

