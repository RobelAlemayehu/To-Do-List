const taskBtn = document.getElementById("add-task")
const taskInput = document.getElementById("task-input")
const list = document.getElementById("to-do-list").querySelector("ul")


taskBtn.addEventListener("click", function(){

    console.log("Clicked")
    const task = taskInput.value.trim() // it accepts the input and store in a variable
    if (task === "") return
    const li = document.createElement("li") // it will create a list 
    li.textContent = task 

    list.appendChild(li)
    taskInput.value = ""

})

