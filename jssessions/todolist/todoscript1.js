let todoList=['apple','mango']
display()
function addtolist() 
{

const textElement=document.getElementById('t1')
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
    (entry)=>{
       displayList+=`<p>${entry}</p>`
    }
)

displayTodoDiv.innerHTML=displayList;
}