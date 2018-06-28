const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
    let tasks = verifyLocalStorage();

    tasks.forEach(function(task){
        makeOneTask(task);
    });
}


function addTask(e){

    if(taskInput.value === ''){
        alert('Adicione uma tarefa');
    }

    makeOneTask(taskInput.value);

    storeInLocalStorage(taskInput.value);

    taskInput.value = '';

    e.preventDefault();
}

function storeInLocalStorage(task){
    let tasks = verifyLocalStorage();
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Você deseja realmente excluir?')){
            value = e.target.parentElement.parentElement;
            removeTaskFromLocalStorage(value);
        }      
    }
}

function removeTaskFromLocalStorage(item){
    let tasks = verifyLocalStorage();
    
    tasks.forEach(function(task, index){
        if(item.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskList.removeChild(item);
}

function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    clearLocalStorage();
}

function clearLocalStorage(){
    localStorage.clear();
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    let allList = document.querySelectorAll('.collection-item');

    allList.forEach(function(task){
        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    })

    console.log(text);
}

function makeOneTask(task){
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
}

function verifyLocalStorage(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
}

