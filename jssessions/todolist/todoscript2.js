let todoList=['apple','mango']
const textElement=document.getElementById('t1')
textElement.addEventListener('keypress',(event)=>{
    if(event.key==='Enter')
        addtolist()
})
display()
function addtolist() 
{
const textData=textElement.value;

const paraElement=document.getElementById("p1")
//console.log(textData)
if(todoList.includes(textData))
{
    //alert('Data allready exists')
    //textElement.style.borderColor='red'
    paraElement.style.display='block'

}
else
{
    paraElement.style.display='none'
    todoList.push(textData)
    textElement.value=""
    textElement.focus();
}

display()
}

function display()
{
    const displayTodoDiv=document.getElementById('showtodo')
    let displayList="";
    todoList.forEach(
    (entry,index)=>{
       displayList+=`<div id='todo-row'><span>${entry}</span><button class='delete-button'>Delete</button></div>`
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


