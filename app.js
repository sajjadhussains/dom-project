

function changeBgColor(){
    let bgColor = randomColorGenerate();
    console.log(bgColor);
    document.getElementById('root').style.backgroundColor = bgColor;
}

function randomColorGenerate(){
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    return `rgb(${red},${blue},${green})`;
}