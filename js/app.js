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
      cell.classList.add('cell');
      row.appendChild(cell);
      

      //childNode ?
      
      // Si la case courante a les mêmes coordonnées (x ET y) que la variable targetCell, 
       if (app.curentCell.x === app.targetCell.x && app.curentCell.y === app.targetCell.y){
        // on ajoute la classe CSS targetCell à la case. Cette classe CSS est a créer pour que la case soit verte.
          cell.classList.add('targetCell');

      // Si la case courante a les mêmes coordonnées (x ET y) que la variable qui correspond au joueur, 
      if (app.curentCell.x === app.player.x && app.curentCell.y === app.player.y){
        // alors on ajoute une div avec la class player DANS la case courante. 
         cell = document.createElement ('div');
         cell.classList.add('player');

    }
    }
    }
    }
  },

  init: function () {
    console.log('init !');
    app.drawBoard();
  },

  clearBoard: function (){
    board.textContent = '';
  },

  redrawBoard: function (){
    this.clearBoard ();
    this.drawBoard();
  },

// Si la case courante a les mêmes coordonnées (x ET y) que la variable qui correspond au joueur, alors on ajoute une div avec la class player DANS la case courante. Le code css de cette classe player est déjà fourni.
}




document.addEventListener('DOMContentLoaded', app.init);