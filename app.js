

function changeBgColor(){
    const inputField = document.getElementById('input-field');
    let bgColor = randomColorGenerate();
    inputField.value = bgColor;
    console.log(bgColor,inputField);
    document.getElementById('root').style.backgroundColor = bgColor;
}

function randomColorGenerate(){
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;
}