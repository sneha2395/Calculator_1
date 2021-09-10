let screeen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
for(items of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innertext;
        console.log('Button text is', buttontext);
        if(buttonText == 'X'){
            buttonText ='*';
            screen.value += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'C'){
        screenValue = "=";
        screen.value = screenValue;
        }
        else if (buttonText =='='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })

}
