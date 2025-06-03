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