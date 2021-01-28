//Event Listener for keyPress
document.addEventListener("keypress", handleKeyPress);

//Event Listener for click
arr= document.getElementsByClassName("drum");
for(var i=0;i<arr.length;i++)
{
    arr[i].addEventListener("click",handleClick);
}

//function to handle click
function handleClick()
{
    var buttonName= this.innerHTML;
    playAudio(buttonName);
    buttonAnimation(buttonName);
}

//function to handle keyPress
function handleKeyPress(event)
{
    var keyName= event.key;
    playAudio(keyName);   
    buttonAnimation(keyName);
}

//Helper Function
function playAudio(val)
{
    switch (val)
    {
        case 'w':
            var audioName='./sounds/crash.mp3';
            document.body.style.backgroundColor = "green";
            break;
        case 'a':
            var audioName='./sounds/kick-bass.mp3';
            document.body.style.backgroundColor = "yellow";
            break;
        case 's':
            var audioName='./sounds/snare.mp3';
            document.body.style.backgroundColor = "pink";
            break;
        case 'd':
            var audioName='./sounds/tom-1.mp3';
            document.body.style.backgroundColor = "cyan";
            break;
        case 'j':
            var audioName='./sounds/tom-2.mp3';
            document.body.style.backgroundColor = "brown";
            break;
        case 'k':
            var audioName='./sounds/tom-3.mp3';
            document.body.style.backgroundColor = "green";
            break;
        case 'l':
            var audioName='./sounds/tom-4.mp3';
            document.body.style.backgroundColor = "red";
            break;
    }
    var audio= new Audio(audioName);
    audio.play();
}

function buttonAnimation(currentKey)
{
    className= '.'+currentKey;
    var activeButton= document.querySelector(className);
    activeButton.classList.add("pressed");
    setTimeout(function() { 
        activeButton.classList.remove("pressed");
    }, 100);

}