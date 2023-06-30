document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
  
      const todoText = todoInput.value;
      if (todoText.trim() !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = '';
      }
    });
  
    function createTodoItem(todoText) {
      const todoItem = document.createElement('li');
      todoItem.className = 'todo-item';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      todoItem.appendChild(checkbox);
  
      const todoTextSpan = document.createElement('span');
      todoTextSpan.textContent = todoText;
      todoItem.appendChild(todoTextSpan);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
      });
      todoItem.appendChild(deleteButton);
  
      return todoItem;
    }
  });
  