document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task
    function addTask(taskName) {
      if (taskName.trim() === '') {
        alert('Please enter a task!');
        return;
      }
      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';
      taskItem.innerHTML = `
        <span>${taskName}</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = ''; // Clear input field
    }
  
    // Event listener for submitting the task form
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTask(taskInput.value);
    });
  
    // Event delegation for completing and deleting tasks
    taskList.addEventListener('click', function(event) {
      const target = event.target;
      if (target.classList.contains('complete-btn')) {
        const taskItem = target.closest('.task-item');
        taskItem.classList.toggle('completed');
      } else if (target.classList.contains('delete-btn')) {
        const taskItem = target.closest('.task-item');
        taskList.removeChild(taskItem);
      }
    });
  });
  