/* 
@param1- guess: string 5 uppercase letter word
@param1- hiddenTarget: string 5 uppercase letter word
@return- "--+*+" 
        "-" wrong
        "+" right letter wrong place
        "*" right place

EXCEPTIONS:
    - if two of the same letter are correct but wrong place it marks the first letter as correct
        - But takes priority if second letter is correct place

PSUEDOCODE

intialise MARKED_GUESS as empty string
for let i=0; i<HIDDEN_TARGET.length ;i++ {
    IF GUESS[i]===HIDDEN_TARGET[i]{
        HIDDEN_TARGET[i] = "*"
        GUESS[i] = "*"
        MARKED_GUESS += "*"
    }
}

for let i=0; i<HIDDEN_TARGET.length ;i++ {
    if(GUESS[i] = "*"){
        continue
    }
    let MATCH = false
    for(let j=0; j<GUESS.LENGTH; j++){
        if GUESS[i] = HIDDEN_TARGET[j]{
            HIDDEN_TARGET[j] = "*"
            MARKED_GUESS += "+"
            MATCH = true
            break
        } 
    }
    if(MATCH === false){
        MARKED_GUESS += "-"
    }   
}

APPLE     A*PLE      A*PL*     A*PL*     A**L*     A**L*
PEOPE ==> PEOPE  ==> PEOPE ==> PEOPE ==> PEOPE ==> PEOPE
          +          ++        ++-       ++-+      ++-+-

*/

export default function markWordleGuess(
  guess: string,
  hiddenTarget: string
): string {
  const markedGuessArray = new Array(hiddenTarget.length);
  const [hiddenTargetArray, guessArray] = [
    hiddenTarget.split(""),
    guess.split(""),
  ];

  for (let i = 0; i < hiddenTargetArray.length; i++) {
    if (guessArray[i] === hiddenTargetArray[i]) {
      hiddenTargetArray[i] = "*";
      guessArray[i] = "*";
      markedGuessArray[i] = "*";
    }
  }

  for (let i = 0; i < hiddenTargetArray.length; i++) {
    if (guessArray[i] === "*") {
      continue;
    }
    let match = false;
    for (let j = 0; j < guessArray.length; j++) {
      if (guessArray[i] === hiddenTargetArray[j]) {
        hiddenTargetArray[j] = "*";
        markedGuessArray[i] = "+";
        match = true;
        break;
      }
    }
    if (match === false) {
      markedGuessArray[i] = "-";
    }
  }

  return markedGuessArray.join("");
}

console.log(markWordleGuess("PEOPE", "APPLE"));
