console.log('tictactoe2 loaded');

var playerX = {
	userName1: "Gael",
	mark: 'X',
	boxesPicked: [],
	score: 0
}

var playerO = {
	userName2: "Sancho",
	mark: 'O',
	boxesPicked: [],
	score: 0
}

var render = function(players){
	var playersDiv = document.queryselector('#players');
	var h2 = document.createElement('h2')
	h2.innerHTML = player.name;
	var scoreDiv = document.createElement('div')
	div.innerHTML = player.score;

	playersDiv.appendChild('h2');
	playersDiv.appendChild('scoreDiv');
}

var game = {
	players: [playerX, playerO],
	currentPlayer:[playerX, playerO],

	boxesPicked: [],
	// boxesPickedO: [],
	// [boxNumber, row, column]
	gameGrid: [
		[1, 1, 1],
		[2, 1, 2],
		[3, 1, 3],
		[4, 2, 1],
		[5, 2, 2],
		[6, 2, 3],
		[7, 3, 1],
		[8, 3, 2],
		[9, 3, 3],
	],

	renderBoard: function(){
		var $board = $('#gameboard');
		var $list = $('<ul>');
		
		for(var i = 0; i < this.gameGrid.length; i++){
  			var thisGame = this;
  			console.log(this);
  			
  			$el = $('<li>').attr("class", "box").attr("id", this.gameGrid[i][0]);
  			$el.appendTo($list);
  			// find Matt and make explain
  			$el.on('click', indexLocker(i));
	  }
		
		//if method need to declare function first
		function indexLocker(index) {
		  	var that = this;
			var myClickFunction = function () {
				$(this).text(thisGame.currentPlayer.mark);
				console.log(thisGame);
				
				thisGame.currentPlayer.boxesPicked.push(thisGame.gameGrid[index][0]);
				
				//this line above will pick up the gameGrid index and put it inside the currentPlayer.boxesPicked.
				//we are pushing the gameboard index(0) into the boxed picked of the current player in this game.
				//Here I need I believe a if/then statement that states that if box is clicked do not allow another click to change the outcome. 
				// if (thisGame.currentPlayer.mark == this)
				
				//above all the possible winning combinations of the game. I need to compare it now to the array of thisGame.currentPlayer.boxesPicked[i]
				// var checkWin = function() {
				// };
				// var gameWinner = [];
				// 	for(var i = 0; i < winningCombo.length){

				// 	}
				// }
				// ****add checkWin function 
				thisGame.changePlayer();
			};
			
			
			return myClickFunction;
		};

		$list.appendTo($board);
    console.log('board rendered');
	},
	
	changePlayer: function(){
		if (this.currentPlayer == this.players[0]){//playerX
			this.currentPlayer = this.players[1]; //to playerO
		} else if (this.currentPlayer == this.players[1]){
			this.currentPlayer = this.players[0];
		}
	}
	// compare currentPLayer boxes to winning combo
	// checkWin: function(){

	// }
}

game.renderBoard()