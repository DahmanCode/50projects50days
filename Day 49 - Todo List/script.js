const pushBtn = document.querySelector('#push')
const input = document.querySelector('#newtask input')
const task = document.querySelector('#tasks')

pushBtn.onclick = function() {
  if(input.value.length == 0) {
    alert('Please Enter a Task')
  } else {
    task.innerHTML += `
     <div class="task">
       <span id="taskname">
         ${input.value}
       </span>
       <button class="delete">
         <i class="fas fa-trash-alt"></i>
       </button>
     </div>
    `;

    var current_tasks = document.querySelectorAll('.delete');
    for(var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function() {
        this.parentNode.remove();
      }
    }

    var tasks = document.querySelectorAll('.task');
    for(var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function() {
        this.classList.toggle('completed');
      }
    }

    input.value = "";
  }
}