
document.addEventListener("DOMContentLoaded", () => {
    // your code here
    document.getElementById('todo').addEventListener('submit', (e) => {
      e.preventDefault()
      handleTask(e.target.new_task_description.value)
    })
  })
  
//   function that adds the 
  function handleTask(todo){
    let p = document.createElement('p')
    let t = document.createTextNode(todo)
    let x = document.createElement('span')
    let y = document.createElement('span')
    y.innerHTML = '<input type="submit" value="done">'
    x.innerHTML = '<input type="submit" value="x">'
    p.appendChild(t)
    p.appendChild(y)
    p.appendChild(x)
    document.getElementById('content').appendChild(p)
    document.getElementById('new_task_description').value = "";
  }