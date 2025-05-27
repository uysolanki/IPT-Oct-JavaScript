function changeHeading()
{
    const headingElements=document.getElementsByClassName("heading1");

    console.log(headingElements)
    //headingElements[0].textContent="Apple"

    Array.from(headingElements).forEach(
        (heading)=>{
                heading.textContent="Apple"
        }
    )

}