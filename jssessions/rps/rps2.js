    let win=0;
    let lose=0;
    let tie=0;
function playGame(playerMove)
{
    const computerMove=generateComputeMove();
    console.log(`Computer Move is ${computerMove}`)
    let result;
    switch(playerMove)
    {
        case 'Rock':    
                        switch(computerMove)
                        {
                            case 'Rock' : result='Tie';break;
                            case 'Paper' : result='Lose';break;
                            case 'Scissor' : result='Win';break;

                        }
        break;
        case 'Paper':    
                        switch(computerMove)
                        {
                            case 'Rock' : result='Win';break;
                            case 'Paper' : result='Tie';break;
                            case 'Scissor' : result='Lose';break;

                        }
        break;
        case 'Scissor':    
                        switch(computerMove)
                        {
                            case 'Rock' : result='Lose';break;
                            case 'Paper' : result='Win';break;
                            case 'Scissor' : result='Tie';break;

                        }
        break;
    }

    console.log(`Result : ${result}`)
    

    switch(result)
    {
        case "Win":win++; break;
        case "Lose":lose++; break;
        case "Tie":tie++; break;
    }

    const displayMoveParagraph=document.querySelector('#move')
    displayMoveParagraph.innerHTML=`Player Move is ${playerMove} : Computer Move is ${computerMove}`
    // console.log(`Player Move is ${playerMove}`)
    // console.log(`Computer Move is ${computerMove}`)

    const displayResultParagraph=document.querySelector('#result')
    displayResultParagraph.innerHTML=`Result : ${result}`
   // console.log(`Result : ${result}`)
    
    const displayScoreParagraph=document.querySelector('#score')
    displayScoreParagraph.innerHTML=`Score : Wins ${win} : Tie ${tie} : Loss ${lose}`
   // console.log(`Score : Wins ${win} : Tie ${tie} : Loss ${lose}`)
}


function generateComputeMove()
{
    const randomNumber=Math.random();  //0->1
    //console.log(randomNumber)
    if(randomNumber<1/3)
        return "Rock"
    else if(randomNumber>1/3 && randomNumber<2/3)
        return "Paper"
    else
        return "Scissor"
}