const paraElement=document.getElementsByTagName("p")
paraElement[0].innerHTML="Mern"


const paragraph1=document.getElementById("para1")
paragraph1.style.setProperty('color','red')
//paragraph1.style.color='blue'
paragraph1.classList.add('green')


//arrange for the data
//prepare the html from the data
//make it interactive

const allComElements=document.querySelectorAll('.com')
console.log(allComElements)

Array.from(allComElements).forEach(
    (element)=>
    {
        element.innerHTML="Apple"
        element.style.color='blue'
    }
)



function toggleButtonText()
{
const subscribeButton=document.querySelector('#js-subscribe-button')
console.log(subscribeButton)
if(subscribeButton.innerHTML==='Subscribe')
{
    subscribeButton.innerHTML='UnSubscribed'
    //subscribeButton.style.setProperty('background-color','lightpin')
    subscribeButton.classList.add('unsubscribe-button')
}
else
{
     subscribeButton.innerHTML='Subscribe'
    // subscribeButton.style.setProperty('background-color','rgb(182, 3, 3)')
    subscribeButton.classList.remove('unsubscribe-button')
}
}


function toggleButtonText1()
{
const subscribeButton=document.querySelector('#js-subscribe-button')
console.log(subscribeButton)
subscribeButton.innerHTML==='Apple'?subscribeButton.innerHTML='Mango':subscribeButton.innerHTML='Apple'
}


const testButton=document.querySelector('#test-button')
console.log(testButton)
testButton.innerHTML="RCB IPL 2025 Champion"
testButton.style.setProperty('background-color','red')
//testButton.addEventListener('click',wish)
//testButton.addEventListener('click',greet('Virat Kohli'))
testButton.addEventListener('click',()=>greet('Shreyas Iyer'))


function greet(playerName)
{
    setTimeout(
        ()=>{
            alert(`Congratulations ${playerName}`)
        },5000
    )
    
}

function wish()
{
    alert('Congratulations BCCI')
}