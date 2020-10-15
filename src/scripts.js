const formElement = document.querySelector('.add-todo-form');
const input = formElement.querySelector('input');
const todoList = document.querySelector('.todo-list');

function completeHandle(e) {
    const target = e.target;
    const buttonsWrapper = target.parentNode;
    const listItem = buttonsWrapper.parentNode;
    target.textContent = target.textContent === 'Complete' ? 'Restore' : 'Complete';
    target.classList.toggle('complete-button');
    listItem.classList.toggle('complete-todo-item');
}

function deleteButtonHandle(e) {
    const target = e.target;
    const buttonsWrapper = target.parentNode;
    const listItem = buttonsWrapper.parentNode;
    listItem.parentNode.removeChild(listItem);
}

function formSubmitHandle(e) {
    
    e.preventDefault();

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-button');
    completeButton.textContent = "Complete";
    completeButton.onclick = completeHandle;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = deleteButtonHandle;

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.appendChild(completeButton);
    buttonsWrapper.appendChild(deleteButton);

    const newTodoItem = document.createElement('li');
    newTodoItem.classList.add('todo-item');
    newTodoItem.textContent = input.value;
    newTodoItem.appendChild(buttonsWrapper);
    
    todoList.appendChild(newTodoItem);

    input.value = null;
    
}

formElement.addEventListener('submit', formSubmitHandle);
