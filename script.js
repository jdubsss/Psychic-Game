var userInput = document.getElementById('userInput'),
        computerInput = document.getElementById('computerInput'),
        wins = document.getElementById('wins'),
        loses = document.getElementById('loses'),
        choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        winCount = 0,
        loseCount = 0,
        randNumber,
        compChoice,
        userChoice;
		
    document.onkeyup = function(event) {
        if (event.key === "a" || event.key === "b" || event.key === "c"  || event.key === "d" || event.key === "e" || event.key === "f" || event.key === "g" || event.key === "h" || event.key === "i" || event.key === "j" || event.key === "k" || event.key === "l" || event.key === "m" || event.key === "n" || event.key === "o" || event.key === "p" || event.key === "q" || event.key === "r" || event.key === "s" || event.key === "t" || event.key === "u" || event.key === "v" || event.key === "w" || event.key === "x" || event.key === "y" || event.key === "z") {
            userChoice = userInput.textContent = event.key
        
            randNumber = Math.floor(Math.random() * 26 + 1);
            compChoice = choices[randNumber];
            
            computerInput.textContent = compChoice;
            result = userChoice + compChoice;
            
            if (userChoice === compChoice) winCount++
            else loseCount++
            
            wins.textContent = winCount;
            loses.textContent = loseCount;
        
        }
      
    
    }