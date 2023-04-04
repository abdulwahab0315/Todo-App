const tasksList = [];
let isEditAble = false;
let activeId = -1;
taskId = 0;
const userInput = document.getElementById ("user-input")

const keyPressListener =(event) =>{
    if(event.key === "Enter"){
        const {value} = document.getElementById("user-input");
       
        if (!isEditAble) {
            addTask(value);
        } else {
            updateText(value);
        }
    }
    
}
document.addEventListener("keypress" , keyPressListener);

const addTask = (taskText) => {
    const obj = {
        id : ++taskId,
        title : taskText,
        isCompleted : false,
    }
    tasksList.push(obj)
    // const lastIndex = tasksList.length - 1;

    const taskItem = document.createElement("li")
    taskItem.className = "task-item";
    taskItem.id = `item_${currentId}`

    taskItem.innerHTML = `<div class="checkbox" onclick="markAsComplete(${currentId})"></div>
    <span>${obj.title}
    </span>
    <button id="edit_${currentId}" onclick="updateTask(${
    currentId
  })">Edit</button>
    <button onclick="deleteTask(${
      currentId
    })">Delete</button>`;

    const list = document.querySelector (".tasks-list")
    list.appendChild(taskItem)
    resetInputField();
}

const updateTask = (id) =>{
    const currentTask = tasksList.id((t) => t.id === id)
    userInput.value = currentTask.title;
    isEditAble = true;
    activeId = id;
}

const updateText = (taskText) => {
    tasksList[activeId] = taskText;
  
    const activeSpan = document.querySelector(`#item_${activeId} span`)
    console.log(taskText);
    activeSpan.innerText = taskText;
    
    isEditAble = false;
  
    resetInputField();
  };
  
const resetInputField = ( ) =>{
    userInput.value = "";
}
const markAsComplete = () => {
    const currentTask = tasksList [index]
    currentTask.isCompleted = !currentTask.isCompleted;
    const activeCheckbox = document.querySelector(`#item_${index} .checkbox`)
    activeCheckbox.classList.toggle("check-box")
}
const deleteTask = (index) => {
    tasksList.splice(index, 1)
    const currentTaskItem = document.querySelector(`#item_${index}`)
    currentTaskItem.remove();
}