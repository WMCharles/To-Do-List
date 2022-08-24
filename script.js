
document.addEventListener("DOMContentLoaded", () => {
    // your code here
    document.getElementById('todo').addEventListener('submit', (e) => {
      e.preventDefault()
      handleTask(e.target.new_task_description.value)
    })
  })
  
  function handleTask(todo){
    let p = document.createElement('p')
    p.innerText = todo
    document.getElementById('content').appendChild(p)
    document.getElementById('new_task_description').value = "";
  }