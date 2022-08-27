
const btn = document.getElementById("btn");
let colorArray = ["#89cff0", "#9966cc", "#ed2839", "#becb11", "#ea52dc", "#6574f6"];


btn.addEventListener("click", () => {
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
    let body = document.querySelector('body');
       body.style.backgroundColor = randomColor;
});

