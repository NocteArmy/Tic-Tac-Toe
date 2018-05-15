$(document).ready(() => {
  var isIt1P, playerOne, players, compPiece, isItCompsTurn, results, endResults, wins;
  var isItEndGame = false;
  var sections = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ]
  $("#reset").on('click', () => {
    $("#game-screen").addClass('hide');
    $("#score").addClass('hide');
    $("#start-screen").removeClass('hide');
    for(var i = 1; i < 10; i++) {
      $("#section-" + i).html("");
    }
    isItEndGame = false;
  });
  
  $("#one-player").on('click', () => {
    $("#start-screen").addClass('hide');
    $("#1p-text").removeClass('hide');
    $("#2p-text").addClass('hide');
    $("#choice-screen").removeClass('hide');
    isIt1P = true;
    isItCompsTurn = false;
    players = ["1P", "Comp"];
    wins = [0, 0];
    $("#player-one").html(players[0] + " wins");
    $("#player-one-score").html(wins[0]);
    $("#player-two").html(players[1] + " wins");
    $("#player-two-score").html(wins[1]);
  });
  $("#two-player").on('click', () => {
    $("#start-screen").addClass('hide');
    $("#2p-text").removeClass('hide');
    $("#1p-text").addClass('hide');
    $("#choice-screen").removeClass('hide');
    isIt1P = false;
    players = ["1P", "2P"];
    wins = [0, 0];
    $("#player-one").html(players[0] + " wins");
    $("#player-one-score").html(wins[0]);
    $("#player-two").html(players[1] + " wins");
    $("#player-two-score").html(wins[1]);
  });
  $("#back-btn").on('click', () => {
    $("#choice-screen").addClass('hide');
    $("#start-screen").removeClass('hide');
  });
  
  $("#x").on('click', () => {
    playerOne = "X";
    if(isIt1P) { compPiece = "O"; }
    results = [
      ["","",""],
      ["","",""],
      ["","",""]
    ]
    isItCompsTurn = false;
    $("#choice-screen").addClass('hide');
    $("#game-screen").removeClass('hide');
    $("#score").removeClass('hide');
  });
  $("#o").on('click', () => {
    playerOne = "O";
    if(isIt1P) { compPiece = "X"; }
    results = [
      ["","",""],
      ["","",""],
      ["","",""]
    ]
    $("#choice-screen").addClass('hide');
    $("#game-screen").removeClass('hide');
    $("#score").removeClass('hide');
    if(isIt1P) {
      setTimeout(() => {
        let firstMove = Math.round(Math.random() * 8) + 1;
        isItCompsTurn = true;
        $("#section-" + firstMove).trigger('click');
      }, 1000);
    }
  });
  
  $("#section-1").on('click', () => {
    if($("#section-1").html() !== "") { return null; }
    if(isItEndGame) { return null; }
    
    results[0][0] = (getMoveCount(results) + 1) % 2 !== 0 ? "X" : "O";
    $("#section-1").html('<p class="game-text">' + results[0][0] + '</p>');
    
    endResults = checkResults(results, results[0][0]);
    if(endResults.result !== 0) {
      isItEndGame = true;
      endGame(endResults)
    } else {
      isItCompsTurn = isItCompsTurn ? false : true;
      if(isIt1P && isItCompsTurn) {
        let bestMove = getNextTurn(results, compPiece);
        $("#section-" + sections[bestMove.move.i][bestMove.move.j]).trigger('click');
      }
    }
  });
  $("#section-2").on('click', () => {
    if($("#section-2").html() !== "") { return null; }
    if(isItEndGame) { return null; }
    
    results[0][1] = (getMoveCount(results) + 1) % 2 !== 0 ? "X" : "O";
    $("#section-2").html('<p class="game-text">' + results[0][1] + '</p>');
    
    endResults = checkResults(results, results[0][1]);
    if(endResults.result !== 0) {
      isItEndGame = true;
      endGame(endResults)
    } else {
      isItCompsTurn = isItCompsTurn ? false : true;
      if(isIt1P && isItCompsTurn) {
        let bestMove = getNextTurn(results, compPiece);
        $("#section-" + sections[bestMove.move.i][bestMove.move.j]).trigger('click');
      }
    }
  });
  $("#section-3").on('click', () => {
    if($("#section-3").html() !== "") { return null; }
    if(isItEndGame) { return null; }
    
    results[0][2] = (getMoveCount(results) + 1) % 2 !== 0 ? "X" : "O";
    $("#section-3").html('<p class="game-text">' + results[0][2] + '</p>');
    
    endResults = checkResults(results, results[0][2]);
    if(endResults.result !== 0) {
      isItEndGame = true;
      endGame(endResults)
    } else {
      isItCompsTurn = isItCompsTurn ? false : true;
      if(isIt1P && isItCompsTurn) {
        let bestMove = getNextTurn(results, compPiece);
        $("#section-" + sections[bestMove.move.i][bestMove.move.j]).trigger('click');
      }
    }
  });
  $("#section-4").on('click', () => {
    if($("#section-4").html() !== "") { return null; }
    if(isItEndGame) { return null; }
    
    results[1][0] = (getMoveCount(results) + 1) % 2 !== 0 ? "X" : "O";
    $("#section-4").html('<p class="game-text">' + results[1][0] + '</p>');
    
    endResults = checkResults(results, results[1][0]);
    if(endResults.result !== 0) {
      isItEndGame = true;
      endGame(endResults)
    } else {
      isItCompsTurn = isItCompsTurn ? false : true;
      if(isIt1P && isItCompsTurn) {
        let bestMove = getNextTurn(results, compPiece);
        $("#section-" + sections[bestMove.move.i][bestMove.move.j]).trigger('click');
      }
    }
  });
  $("#section-5").on('click', () => {
    if($("#section-5").html() !== "") { return null; }
    if(isItEndGame) { return null; }
    
    results[1][1] = (getMoveCount(results) + 1) % 2 !== 0 ? "X" : "O";
    $("#section-5").html('<p class="game-text">' + results[1][1] + '</p>');
    
    endResults = checkResults(results, results[1][1]);
    if(endResults.result !== 0) {
      isItEndGame = true;
      endGame(endResults)
    } else {
      isItCompsTurn = isItCompsTurn ? false : true;
      if(isIt1P && isItCompsTurn) {
        let bestMove = getNextTurn(results, compPiece);
        $("#section-" + sections[bestMove.move.i][bestMove.move.j]).trigger('click');
      }
    }
  });
  $("#section-6").on('click', () => {
    if($("#section-6").html() !== "") { return null; }
    if(isItEndGame) { return null; }
    
    results[1][2] = (getMoveCount(results) + 1) % 2 !== 0 ? "X" : "O";
    $("#section-6").html('<p class="game-text">' + results[1][2] + '</p>');
    
    endResults = checkResults(results, results[1][2]);
    if(endResults.result !== 0) {
      isItEndGame = true;
      endGame(endResults)
    } else {
      isItCompsTurn = isItCompsTurn ? false : true;
      if(isIt1P && isItCompsTurn) {
        let bestMove = getNextTurn(results, compPiece);
        $("#section-" + sections[bestMove.move.i][bestMove.move.j]).trigger('click');
      }
    }
  });
  $("#section-7").on('click', () => {
    if($("#section-7").html() !== "") { return null; }
    if(isItEndGame) { return null; }
    
    results[2][0] = (getMoveCount(results) + 1) % 2 !== 0 ? "X" : "O";
    $("#section-7").html('<p class="game-text">' + results[2][0] + '</p>');
    
    endResults = checkResults(results, results[2][0]);
    if(endResults.result !== 0) {
      isItEndGame = true;
      endGame(endResults)
    } else {
      isItCompsTurn = isItCompsTurn ? false : true;
      if(isIt1P && isItCompsTurn) {
        let bestMove = getNextTurn(results, compPiece);
        $("#section-" + sections[bestMove.move.i][bestMove.move.j]).trigger('click');
      }
    }
  });
  $("#section-8").on('click', () => {
    if($("#section-8").html() !== "") { return null; }
    if(isItEndGame) { return null; }
    
    results[2][1] = (getMoveCount(results) + 1) % 2 !== 0 ? "X" : "O";
    $("#section-8").html('<p class="game-text">' + results[2][1] + '</p>');
    
    endResults = checkResults(results, results[2][1]);
    if(endResults.result !== 0) {
      isItEndGame = true;
      endGame(endResults)
    } else {
      isItCompsTurn = isItCompsTurn ? false : true;
      if(isIt1P && isItCompsTurn) {
        let bestMove = getNextTurn(results, compPiece);
        $("#section-" + sections[bestMove.move.i][bestMove.move.j]).trigger('click');
      }
    }
  });
  $("#section-9").on('click', () => {
    if($("#section-9").html() !== "") { return null; }
    if(isItEndGame) { return null; }
    
    results[2][2] = (getMoveCount(results) + 1) % 2 !== 0 ? "X" : "O";
    $("#section-9").html('<p class="game-text">' + results[2][2] + '</p>');
    
    endResults = checkResults(results, results[2][2]);
    if(endResults.result !== 0) {
      isItEndGame = true;
      endGame(endResults)
    } else {
      isItCompsTurn = isItCompsTurn ? false : true;
      if(isIt1P && isItCompsTurn) {
        let bestMove = getNextTurn(results, compPiece);
        $("#section-" + sections[bestMove.move.i][bestMove.move.j]).trigger('click');
      }
    }
  });
  
  function endGame(winner) {
    if(winner.result === 'draw') {
      setTimeout(() => {
        $("#game-screen").addClass('hide');
        $("#end-screen").removeClass('hide');
        $("#end-screen").html('<p class="board-text ml-2 mr-2">The game was a draw... No Winners!</p>');
      }, 750);
    } else {
      playerOne === winner.result ? wins[0]++ : wins[1]++;
      setTimeout(() => {
        winner.winningLine.forEach((val) => {
          let sectionUpdate = sections[val[0]][val[1]];
          $("#section-" + sectionUpdate).addClass('winner');
        });
      }, 500);
      $("#player-one-score").html(wins[0]);
      $("#player-two-score").html(wins[1]);
      setTimeout(() => {
        $("#game-screen").addClass('hide');
        $("#end-screen").removeClass('hide');
        winner.winningLine.forEach((val) => {
          let sectionUpdate = sections[val[0]][val[1]];
          $("#section-" + sectionUpdate).removeClass('winner');
        });
      }, 2500)
      if(playerOne === winner.result) {
        $("#end-screen").html('<p class="board-text ml-2 mr-2">Player 1 won the game!!</p>');
      } else {
        if(isIt1P) {
          $("#end-screen").html('<p class="board-text ml-2 mr-2">You lost to the computer...</p>');
        } else {
          $("#end-screen").html('<p class="board-text ml-2 mr-2">Player 2 won the game!!</p>');
        }
      }
    }
    setTimeout(() => {
      for(var i = 1; i < 10; i++) {
        $("#section-" + i).html("");
      }
    }, 4000);
    setTimeout(() => {
      isItEndGame = false;
      $("#end-screen").addClass('hide');
      if(playerOne === "X") {
        $("#o").trigger('click');
      } else {
        $("#x").trigger('click');
      }
    }, 4500);
  }
  
  function checkResults(board, symbol) {
    let result = 0;
    
    if(getMoveCount(board) < 5) {
      return {result}
    }
    
    let line;
    let winningLine = [];
    
    for(var i = 0; i < 3; i++) {
      line = board[i].join("");
      if(line === symbol.repeat(3)) {
        result = symbol;
        winningLine = [[i,0], [i,1], [i,2]];
        return {result, winningLine}
      }
    }
    
    for(var j = 0; j < 3; j++) {
      let column = [board[0][j], board[1][j], board[2][j]];
      line = column.join("");
      if(line === symbol.repeat(3)) {
        result = symbol;
        winningLine = [[0,j], [1,j], [2,j]];
        return {result, winningLine}
      }
    }
    
    let diag1 = [board[0][0],board[1][1],board[2][2]];
    line = diag1.join("");
    if(line === symbol.repeat(3)) {
      result = symbol;
      winningLine = [[0,0], [1,1], [2,2]];
      return {result, winningLine}
    }
    
    let diag2 = [board[0][2],board[1][1],board[2][0]];
    line = diag2.join("");
    if(line === symbol.repeat(3)) {
      result = symbol;
      winningLine = [[0,2], [1,1], [2,0]];
      return {result, winningLine}
    }
    
    if(getMoveCount(board) === 9) {
      result = 'draw';
      return {result, winningLine}
    }
    
    return {result}
  }
  
  function getNextTurn(board, symbol) {
    function copyBoard(board) {
      let copy = [];
      for(var i = 0; i < 3; i++) {
        copy.push([]);
        for (var j = 0; j < 3; j++) {
          copy[i][j] = board[i][j];
        }
      }
      return copy;
    }
    
    function getFreeSpaces(board) {
      let freeSpaces = [];
      for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
          if(board[i][j] === "") {
            freeSpaces.push({i, j});
          }
        }
      }
      return freeSpaces;
    }
    
    let availableMoves = getFreeSpaces(board);
    
    let moveScores = [];
    for(var i = 0; i < availableMoves.length; i++) {
      let move = availableMoves[i];
      let newBoard = copyBoard(board);
      newBoard[move.i][move.j] = symbol;
      let resultCheck = checkResults(newBoard, symbol).result;
      let score;
      if(resultCheck === 'draw') {
        score = 0;
      } else if(resultCheck === symbol) {
        score = 1;
      } else {
        let otherSymbol = symbol === "X" ? "O" : "X";
        let nextMove = getNextTurn(newBoard, otherSymbol);
        score = (- (nextMove.score));
      }
      if(score === 1) {
        return {move, score};
      }
      moveScores.push({move, score});
    }

    moveScores.sort((moveA, moveB) => {
      return moveB.score - moveA.score;
    });
    
    return moveScores[0];
  }
  
  function getMoveCount(board) {
    let counter = 0;
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        if(board[i][j] !== "") {
          counter++
        }
      }
    }
    return counter;
  }
});