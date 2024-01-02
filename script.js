let userValue;
function clicked(event){
    userValue = event.value;
    document.querySelector('#user-input').innerText = event.innerText;
    let computerValue = Math.round(Math.random()*3);
    if(computerValue == 1)
    {
        document.querySelector('.result').innerText = "Stone";
        if(userValue == computerValue)
        document.querySelector('#finalResult').innerText = 'Draw';
        else if(userValue == 2)
        document.querySelector('#finalResult').innerText = 'You Win';
        else
        document.querySelector('#finalResult').innerText = 'You Loose';
    }
    else if(computerValue == 2)
    {
        document.querySelector('.result').innerText = "Paper";
        if(userValue == computerValue)
        document.querySelector('#finalResult').innerText = 'Draw';
        else if(userValue == 3)
        document.querySelector('#finalResult').innerText = 'You Win';
        else
        document.querySelector('#finalResult').innerText = 'You Loose';
    }
    else
    {
        document.querySelector('.result').innerText = "Scissors";
        if(userValue == computerValue)
        document.querySelector('#finalResult').innerText = 'Draw';
        else if(userValue == 1)
        document.querySelector('#finalResult').innerText = 'You Win';
        else
        document.querySelector('#finalResult').innerText = 'You Loose';
    }
}
