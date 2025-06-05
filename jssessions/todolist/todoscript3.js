let todoList=[{todoItem:'Watch Video',todoDate:'2025-06-17'},{todoItem:'Practice Programming',todoDate:'2025-06-17'}]
const textElement=document.getElementById('t1')
textElement.addEventListener('keypress',(event)=>{
    if(event.key==='Enter')
        addtolist()
})
display()
function addtolist() 
{
const textData=textElement.value;
const eventDate=document.getElementById('d1').value;

if(textData==="")
{
    alert("Please enter text")
    return;
}
else if(eventDate==="")
{
    alert("Please enter Date")
    return;
}

console.log(eventDate)

const paraElement=document.getElementById("p1")
//console.log(textData)
    paraElement.style.display='none'
    const todoObject={todoItem:textData,todoDate:eventDate}
    if(!checkForDuplicateItem(todoObject))
    {
    todoList.push(todoObject)
    textElement.value=""
    textElement.focus();
    }
    else
    {
    paraElement.style.display='block'
    }
    display()
}




function display()
{
    const displayTodoDiv=document.getElementById('showtodo')
    let displayList="";
    todoList.forEach(
    (entry,index)=>{
       displayList+=`<div id='todo-row'><span>${entry.todoItem}</span><span>${entry.todoDate}</span><button class='delete-button'>Delete</button></div>`
    }
)
displayTodoDiv.innerHTML=displayList;

const deleteButtons=document.querySelectorAll('.delete-button')
console.log(deleteButtons)


deleteButtons.forEach(
    (singleDeleteButton,index)=>{
        singleDeleteButton.addEventListener('click',()=>{
            todoList.splice(index,1)
            display()
        });
    });

}


function checkForDuplicateItem(todoObject)
{
    for(let i=0;i<todoList.length;i++)
    {
         if(JSON.stringify(todoList[i])===JSON.stringify(todoObject))
            return true;
    }
    return false;
}

//   todoList.forEach(
//     (todoItem)=>{
//         if(JSON.stringify(todoItem)===JSON.stringify(todoObject))
//             return true;
//     }
//   )
//   return false;
// }

