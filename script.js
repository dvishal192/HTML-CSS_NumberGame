//Generating a random number between 1 and 20
let number = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore = 0;



document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    // Case 1- When no number entered in the guess field and check clicked.
    
    if(!guess){
        document.querySelector('.message').textContent= '⛔ No Number Entered' ;
    }
    
    // Case 2- When correct number entered in the guess field and check clicked.
    
    else if (guess === number){
        document.querySelector('.message').textContent= '🎉 Correct Number!' ;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent = number;
        
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        }
    
    // Case 3- When incorrect number entered in the guess field and check clicked.
    
    else if (guess !== number){
        if (score >1)
                {
            document.querySelector('.message').textContent = guess > number ? '📈 Too high!': '📉 Too Low!' ;
            score= score-1;
            document.querySelector('.score').textContent = score;
                }
            else{
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
    }
})



document.querySelector(".again").addEventListener('click',function(){
    document.querySelector('.score').textContent = 20;
    number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value='';
});









//'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 30;
document.querySelector('.guess').value=88;
console.log(document.querySelector('.guess').value);
*/
