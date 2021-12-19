var scoreCount1 = 0;
var scoreCount2=0;
var clickCount = 0;
var holdCount =0;

const buttonClik = document.getElementById("clik");
const buttonHold= document.getElementById("hold");
const buttonReset=document.getElementById("reset");

buttonClik.addEventListener("click", () => {
    let random = (Math.floor(Math.random() * 6) + 1);
  if (holdCount%2==0)
  ////////////PLAYER A//////////////////////
  {

    if (clickCount == 0) {
      document.getElementById('diceF').style.display = "block";
      document.getElementById('diceF').src = "images/dice.png";
      document.getElementById('score1').innerHTML = ('score: 0');
      document.getElementById('score2').innerHTML = ('score: 0');
      document.getElementById('clik').innerHTML = ('Roll');
      document.getElementById('status1').innerHTML = ('You start!');
      document.getElementById('status2').innerHTML = ('');
      clickCount++;
      scoreCount1 = 0;
      scoreCount2=0;
      return;
    }
    else if (clickCount > 0 && scoreCount1 + random >= 20 && random != 1) {
      document.getElementById('diceF').src = `images/dice-${random}.png`;
      document.getElementById('score1').innerHTML = (`score: ${scoreCount1 + random}`);
      document.getElementById('status2').innerHTML = ('');
      document.getElementById('status1').innerHTML = ('You win!');
      document.getElementById('clik').innerHTML = ('Click here to play again');
      scoreCount1 = 0;
      scoreCount2=0;
      clickCount = 0;
      holdCount=0;
      return;
    }
    else if (clickCount > 0 && random !== 1 && scoreCount1 + random < 20) {
      scoreCount1 = scoreCount1 + random;
      document.getElementById('diceF').src = `images/dice-${random}.png`;
      document.getElementById('score1').innerHTML = (`score: ${scoreCount1}`);
      document.getElementById('status1').innerHTML = ('Your turn');
      document.getElementById('status2').innerHTML = ('');
      document.getElementById('clik').innerHTML = ('Roll');
      clickCount++
      return;
    }
    else if (clickCount > 0 && random == 1) {
     
      document.getElementById('diceF').src = `images/dice-${random}.png`;
      document.getElementById('score1').innerHTML = ('score:0');
      document.getElementById('status2').innerHTML = ('Your turn');
      document.getElementById('status1').innerHTML = ('Oh dear, you got a 1');
      
      scoreCount1 = 0;    
      holdCount++;
      return;
    }

}else{
///////////////////PLAYER B///////////////////////////
if (clickCount == 0) {
  document.getElementById('diceF').style.display = "block";
  document.getElementById('diceF').src = "images/dice.png";
  document.getElementById('score1').innerHTML = ('score: 0');
  document.getElementById('score2').innerHTML = ('score: 0');
  document.getElementById('clik').innerHTML = ('Roll');
  document.getElementById('status2').innerHTML = ('You start!');
  document.getElementById('status1').innerHTML = ('');
  clickCount++;
  scoreCount1 = 0;
  scoreCount2=0;
  return;
}
    else if (clickCount > 0 && scoreCount2 + random >= 20 && random != 1) {
        document.getElementById('diceF').src = `images/dice-${random}.png`;
        document.getElementById('score2').innerHTML = (`score: ${scoreCount2 + random}`);
        document.getElementById('status1').innerHTML = ('');
        document.getElementById('status2').innerHTML = ('You win!');
        document.getElementById('clik').innerHTML = ('Click here to play again');
        scoreCount2 = 0;
        scoreCount1=0;
        clickCount = 0;
        holdCount=1;
        return;
      }
      else if (clickCount > 0 && random !== 1 && scoreCount2 + random < 20) {
        scoreCount2 = scoreCount2 + random;
        document.getElementById('diceF').src = `images/dice-${random}.png`;
        document.getElementById('score2').innerHTML = (`score: ${scoreCount2}`);
        document.getElementById('status2').innerHTML = ('Your turn');
        document.getElementById('status1').innerHTML = ('');
        document.getElementById('clik').innerHTML = ('Roll');
        clickCount++
        return;
      }
      else if (clickCount > 0 && random == 1) {
        document.getElementById('diceF').src = `images/dice-${random}.png`;
        document.getElementById('score2').innerHTML = ('score: 0');
        document.getElementById('status2').innerHTML = ('Oh dear, you got a 1');
        document.getElementById('status1').innerHTML = ('Your turn');
        
        scoreCount2 = 0;        
        holdCount++;        
        return;
      }
  }
}
  )

buttonHold.addEventListener("click",()=>{holdCount++;
  if(holdCount%2==0){
document.getElementById('status1').innerHTML = ('Your turn')
document.getElementById('status2').innerHTML = ('So you want to hold! Good luck!')}
else{
    document.getElementById('status1').innerHTML = ('So you want to hold! Good luck!')
    document.getElementById('status2').innerHTML = ('Your turn')
  };
}
);

buttonReset.addEventListener("click",()=>{
    document.getElementById('diceF').style.display = "none";
    document.getElementById('score1').innerHTML = ('');
    document.getElementById('score2').innerHTML = ('');
    document.getElementById('clik').innerHTML = ('Start');
    document.getElementById('status1').innerHTML = ('');
    document.getElementById('status2').innerHTML = ('');
    scoreCount1 = 0;
    scoreCount2=0;
    holdCount=0;
    clickCount=0;
    return;})
