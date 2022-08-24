let input = document.getElementById('new_task_description')
let content = document.getElementById('content')

document.addEventListener("DOMContentLoaded", () => {
    // your code here
    document.getElementById('todo').addEventListener('submit', (e) => {
      e.preventDefault()
      handleTask()
    })
  })
  
//   function that adds the 
  function handleTask(){
    
    // div that holds all items  
    let itemall = document.createElement('div')
    itemall.classList.add('itemall')

    // item
    let item = document.createElement('p')
    item.classList.add('item')
    item.innerText = input.value
    itemall.appendChild(item)

    //if input area is empty
    if(input.value === "") return

    // check button 
    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check_button")
    itemall.appendChild(checkbutton)

    // delete button
    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash_button")
    itemall.appendChild(trashbutton)

    content.appendChild(itemall)
    input.value = ''

  }

//   function that checks and deletes task in todo list
function taskHandler(e){
    const item = e.target

    // check
    if(item.classList[0] === 'check_button'){
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete 
    if(item.classList[0] === 'trash_button'){
        const todolist = item.parentElement
        todolist.remove()
    }
}

content.addEventListener('click', taskHandler)
