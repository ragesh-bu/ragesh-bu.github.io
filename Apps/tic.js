const allBoxes = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
// Function called whenever user tab on any box
function checkStatus() {

  // Setting DOM to all boxes or input field
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  let winningBoxes = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
    [b1, b5, b9],
    [b3, b5, b7]
  ];


  let gameOver = false;

  for (const winningCombo of winningBoxes) {
    // console.log(winningCombo);
    if (winningCombo.join('').toLowerCase() == 'xxx') {
      document.getElementById('print')
        .innerHTML = "Player X won";
      window.alert('Player X won');
      for (const b of allBoxes ) {
        document.getElementById(b).disabled = true
      }
      gameOver = true;
      break;
    } else if (winningCombo.join('').toLowerCase() == '000') {
      document.getElementById('print')
        .innerHTML = "Player 0 won";
      window.alert('Player 0 won');
      for (const b of allBoxes ) {
        document.getElementById(b).disabled = true
      }
      gameOver = true;
      break;
    }
  }

  // Checking about Tie
  if (!gameOver) {
    if ((b1 == 'X' || b1 == '0') && (b2 == 'X' ||
        b2 == '0') && (b3 == 'X' || b3 == '0') &&
      (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
      (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
      document.getElementById('print')
        .innerHTML = "Match Tie";
      window.alert('Match Tie');
    } else {

      // Printing Result
      if (flag == 1) {
        document.getElementById('print')
          .innerHTML = "Player X Turn";
      } else {
        document.getElementById('print')
          .innerHTML = "Player 0 Turn";
      }
    }
  }
}

// Function to reset game
function reset() {
  location.reload();
  for (const b of allBoxes ) {
    document.getElementById(b).value = '';
  }

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;

function setBox(elem) {
  if (flag == 1) {
    document.getElementById(elem.id).value = "X";
    document.getElementById(elem.id).disabled = true;
    flag = 0;
  } else {
    document.getElementById(elem.id).value = "0";
    document.getElementById(elem.id).disabled = true;
    flag = 1;
  }
}
