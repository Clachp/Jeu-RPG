var app = {

  player: {
    x: 0,
    y: 0,
    direction: 'right',
  },
  targetCell: {
    x: 5,
    y: 3,
  },
  curentCell: {
    x: null,
    y: null,
  },
  
  drawBoard: function () {
    var board = document.getElementById('board');

    for (var i = 0; i < 4; i++){
      var row = document.createElement ('div');
      row.classList.add('row');
      board.appendChild(row);

      for (var j = 0; j < 6; j++) {
      var cell = document.createElement ('div');
      cell.classList.add ('cell');
      row.appendChild(cell);
    }
    }

    // Si la case courante a les mêmes coordonnées (x ET y) que la variable targetCell, 
    // C'est quoi la case courante ????
    if (app.curentCell.x === app.targetCell.x && app.curentCell.y === app.targetCell.y){
    // on ajoute la classe CSS targetCell à la case. Cette classe CSS est a créer pour que la case soit verte.
      cell.classList.add('targetCell');
    }

    // Si la case courante a les mêmes coordonnées (x ET y) que la variable qui correspond au joueur, 
    if (app.curentCell.x === app.player.x && app.curentCell.y === app.player.y){
      // cell = document.createElement ('div');
      cell.appendChild('player');
    }
    // alors on ajoute une div avec la class player DANS la case courante. 
    cell.classList.add('player');
    // Le code css de cette classe player est déjà fourni.

  },

  init: function () {
    console.log('init !');
    app.drawBoard();
  },

// Si la case courante a les mêmes coordonnées (x ET y) que la variable qui correspond au joueur, alors on ajoute une div avec la class player DANS la case courante. Le code css de cette classe player est déjà fourni.
}

  


document.addEventListener('DOMContentLoaded', app.init);