const headingElements=document.getElementsByTagName('h1')
console.log(headingElements)


Array.from(headingElements).forEach(
    (headingElement)=>
    {
        console.log(headingElement.innerHTML)
    }
)