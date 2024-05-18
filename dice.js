document.addEventListener('DOMContentLoaded',(event) => {
const canvas=document .getElementById('diceCanvas');
const ctx=canvas.getContext('2d');
function drawDice(number){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.strokeRect(10,10,180,180);
    ctx.font='100px Arial';
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.fillText(number,canvas.width/2,canvas.height/2);


    
    
}
function getrandom(){
    return Math.floor(Math.random()*6)+1;

}
document.body.onkeyup=function(event){
    if(event.key==32||event.code=="Space"|| event.keycode==32){
        const randomNumber=getrandom();
        drawDice(randomNumber);
    }
}
drawDice(getrandom());
document.addEventListener('Keydown',onSpacePress);

});   