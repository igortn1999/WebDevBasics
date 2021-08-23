var listElement = document.querySelector('#app ul');
var inputeElemnt = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    'fazer cafe',
    'Estudar JS',
    'Mais cafe'
];

function renderTodos(){
    for(todo of toDos){
        //console.log(todo);
        var todoText = document.createTextNode(todo);
        var todoElement = document.createElement('li');


        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

