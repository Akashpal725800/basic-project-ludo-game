  let rollCount=0; 
  let sum=0;
  function rollDice() {
    const fristdece = document.getElementById("dice1");
    fristdece.classList.add("rolling");
               setTimeout(()=>
        {
               rollCount=rollCount++;
        }
    )
    setTimeout(() => {
        const player1 = Math.floor(Math.random() * 6) + 1;
        sum+=player1;
        const diceImage1 = "dice" + player1 + ".jpg";
        dice1.setAttribute("src", diceImage1);
         document.getElementById("score").innerHTML="Total Score(p1)="+sum;

           document.getElementById("result1").innerHTML += 
                "Player1 roll " + rollCount + " = " + player1 + "<br>";

        // remove anima...
        dice1.classList.remove("rolling");

        document.getElementById("btn1").disabled = true;  
        document.getElementById("btn2").disabled = false; 
    },800); 
    rollCount++;

}

let rollCounts=0;
let sum2=0;
function rollDicee() {
    const secdice = document.getElementById("dice2");
    secdice.classList.add("rolling");
     setTimeout(()=>
        {
                rollCounts=rollCounts++;
        }
    )
     
    setTimeout(() => {
        const player2 = Math.floor(Math.random() * 6) + 1;
        
        sum2+=player2;

        const diceImage2 = "dice" + player2 + ".jpg"; 
        dice2.setAttribute("src", diceImage2);

        document.getElementById("score2").innerHTML="Total Score(p2)="+sum2;

            
         document.getElementById("result2").innerHTML += 
                "Player 2 roll " + rollCounts + " = " + player2 + "<br>";


        dice2.classList.remove("rolling");

        document.getElementById("btn2").disabled = true; 
        document.getElementById("btn1").disabled = false;  
    }, 800); 
    rollCounts++;
}
 