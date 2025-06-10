function handleClick()
{
    const subscribeButton=document.getElementById("subscribe-button");
    if(subscribeButton.textContent==="Subscribe")
    {
    subscribeButton.innerHTML="Unsubscribe"
    subscribeButton.style.backgroundColor="green"
    }
    else
    {
    subscribeButton.innerHTML="Subscribe"
    subscribeButton.style.backgroundColor="red"
    }
}

function handleClick2()
{
    const subscribeButton=document.getElementById("subscribe-button");
    subscribeButton.textContent=subscribeButton.textContent==="Subscribe"?"Unsubscribe":"Subscribe"
}