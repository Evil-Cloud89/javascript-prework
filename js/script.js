function playGame(playerInput){
  playerInput == '3';

  function getMoveName(argMoveId){
    if(argMoveId == 1){
    return 'kamień';
    } else if(argMoveId == 2){
    return 'papier';
    } else if(argMoveId == 3){
    return 'nożyce';
    } 

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + argComputerMove);

  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  /*
  if(playerInput == '1'){
    playerMove = 'kamień';
  } else if(playerInput == '2'){
    playerMove = 'papier';
  } else if(playerInput == '3'){
    playerMove = 'nożyce';
  }
  */

  printMessage('Twój ruch to: ' + argPlayerMove);

  console.log('moves:', argComputerMove, argPlayerMove);

  function displayResults(argComputerMove, argPlayerMove) {
    console.log('Ruch komputera to ' + argComputerMove);
    console.log('Ruch gracza to ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Mamy remis!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Komputer wygrywa!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
      printMessage('Błąd gry! Wybierz proszę poprawną liczbę!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Mamy remis!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Komputer wygrywa!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
      printMessage('Błąd gry! Wybierz proszę poprawną liczbę!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Komputer wygrywa!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Mamy remis!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
      printMessage('Błąd gry! Wybierz proszę poprawną liczbę!');
    }
  }
    
  displayResults(argComputerMove, argPlayerMove);

  /*
  if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Mamy remis!');
  } else if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
  } else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Błąd gry! Wybierz proszę poprawną liczbę!');
  } else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Mamy remis!');
  } else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
  } else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Błąd gry! Wybierz proszę poprawną liczbę!');
  } else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
  } else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy remis!');
  } else if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Błąd gry! Wybierz proszę poprawną liczbę!');
  }
  */
}

clearMessages();

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});