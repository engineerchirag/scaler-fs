const todoList = [{
    id: 1,
    text: 'Buy milk',
    isCompleted: true,
}, {
    id: 2,
    text: 'Attend Class',
    isCompleted: false,
}, {
    id: 3,
    text: 'Go for Shopping',
    isCompleted: true,
}, {
    id: 4,
    text: 'Watch movie',
    isCompleted: false,
}];

function renderTodoList(todoList) {
    const todoListRef = document.querySelector('.todo-list');
    todoListRef.innerHTML = '';
    todoList.forEach((todo) => {
        const todoListItem = document.createElement('li');
        todoListItem.classList.add('todo-item');
        todoListItem.innerText = todo.text;
        todoListRef.appendChild(todoListItem);
    });
}


const inputRef = document.querySelector('#new-todo');
inputRef.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        // console.log(e.target.value);
        todoList.push({
            id: todoList.length + 1,
            text: e.target.value,
            isCompleted: false,
        });
        console.log(todoList);
        renderTodoList(todoList);
        inputRef.value = '';
    }
});

renderTodoList(todoList);