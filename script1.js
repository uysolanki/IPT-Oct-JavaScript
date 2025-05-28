// function changeHeading()
// {
//     const headingElements=document.getElementsByClassName("heading1");

//     console.log(headingElements)
//     //headingElements[0].textContent="Apple"

//     Array.from(headingElements).forEach(
//         (heading)=>{
//                 heading.textContent="Apple"
//         }
//     )
// }



// function changeHeading()
// {
//     const headingElements=document.querySelectorAll('.heading1')

//     console.log(headingElements)
//     //headingElements[0].textContent="Apple"

//     Array.from(headingElements).forEach(
//         (heading,index)=>{
//             if(index%2==1)
//                 heading.textContent="Mango"
//             else
//                 heading.textContent="Banana"
//         }
//     )

// }


function changeHeading()
{
    const headingElements=document.querySelectorAll('#amitabh div')

    Array.from(headingElements).forEach(
        (divEle,index)=>{
           divEle.style.backgroundColor="red"
        }
    )

}