    let win=0;
    let lose=0;
    let tie=0;

    let score={win,lose,tie}

    const rockButton=document.querySelector('#rock-button')
    rockButton.addEventListener('click',()=>{playGame('Rock')})

    const paperButton=document.querySelector('#paper-button')
    paperButton.addEventListener('click',()=>{playGame('Paper')})

    const scissorButton=document.querySelector('#scissor-button')
    scissorButton.addEventListener('click',()=>{playGame('Scissor')})

    document.body.addEventListener('keydown', handleKeydown);

    function handleKeydown(event)
    {
        switch(event.key)
        {
            case 'r':
            case 'R':playGame('Rock');break;

            case 'p':
            case 'P':playGame('Paper');break;

            case 's':
            case 'S':playGame('Scissor');break;
        }
    }
function playGame(playerMove)
{
    const computerMove=generateComputeMove();
   // console.log(`Computer Move is ${computerMove}`)
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

    //console.log(`Result : ${result}`)
    

    switch(result)
    {
        case "Win":score.win++; break;
        case "Lose":score.lose++; break;
        case "Tie":score.tie++; break;
    }

    displayOutput(playerMove,computerMove,result)
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


function resetScore()
{
score={win:0,lose:0,tie:0}
}

function displayOutput(playerMove,computerMove,result)
{
    const displayMoveParagraph=document.querySelector('#move')
    displayMoveParagraph.innerHTML=`Player Move is ${playerMove} : Computer Move is ${computerMove}`
    // console.log(`Player Move is ${playerMove}`)
    // console.log(`Computer Move is ${computerMove}`)

    const displayResultParagraph=document.querySelector('#result')
    displayResultParagraph.innerHTML=`Result : ${result}`
   // console.log(`Result : ${result}`)
    
    const displayScoreParagraph=document.querySelector('#score')
    displayScoreParagraph.innerHTML=`Score : Wins ${score.win} : Tie ${score.tie} : Loss ${score.lose}`
   // console.log(`Score : Wins ${win} : Tie ${tie} : Loss ${lose}`)
}