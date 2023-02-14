const message = document.querySelector(".container h1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const btn = document.querySelector(".btn");

function newGame(){
    let num1 = randomNumber();
    let num2 = randomNumber();
    
    let path1 = "../images/dice"+num1+".png"
    let path2 = "../images/dice"+num2+".png"
    
    img1.setAttribute("src",path1);
    img2.setAttribute("src",path2);
    
    function randomNumber(){
        let num = Math.floor(Math.random()*6)+1;
        return num;
    }
    
    if(num1===num2){
        message.innerHTML = "Draw";
    }else if(num1>num2){
        message.textContent = "Player 1 wins";
    }else{
        message.textContent = "Player 2 wins";
    }
}







