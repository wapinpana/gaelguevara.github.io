console.log('tictactoe2 loaded');

var playerX = {
	name: "name",
	mark: 'X',
	boxesPicked: [],
	wins: 0
}

var playerO = {
	name: "name",
	mark: 'O',
	boxesPicked: [],
	wins: 0
}

// var winningCombo = [
// 					[1, 2, 3]
// 					[4, 5, 6]
// 					[7, 8, 9]
// 					[1, 4, 7]
// 					[2, 5, 8]
// 					[3, 6, 0]
// 					[1, 5, 9]
// 					[7, 5, 3]
// 					]; 

var game = {
	players: [playerX, playerO],
	currentPlayer: [this.playerX, this.playerO],
	boxesPickedX: [],
	boxesPickedO: [],
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
		var indexLocker = function (index) {
			var myClickFunction = function () {
				$(this).text(thisGame.currentPlayer.mark);
				thisGame.currentPlayer.boxesPicked.push(thisGame.gameGrid[index][0]);
				//should I have two different boxex picked
				//we are pushing the gameboard index(0) into the boxed picked of the current player in this game.
				//Here I need I believe a if/then statement that states that if box is clicked do not allow another click to change the outcome. 
				// if (thisGame.currentPlayer.mark == this)
				
				//above all the possible winning combinations of the game. I need to compare it now to the array of thisGame.currentPlayer.boxesPicked[i]
				var checkWin = function() {
				};
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
		for(var i = 0; i < this.gameGrid.length; i++){
			var thisGame = this;
			console.log(this);
			$el = $('<li>').attr("class", "box").attr("id", this.gameGrid[i][0]);
			$el.appendTo($list);
			// find Matt and make explain
			$el.on('click', indexLocker(i));
			//at this part we are saying that we are displaying what is (i)
			// (function (index) {
			// 	$el.on('click', function () {
			// 		$(this).text(thisGame.currentPlayer.mark);
			// 		thisGame.currentPlayer.boxesPicked.push(thisGame.gameBoard[index][0])
			// 		// add checkWin function 
			// 		thisGame.changePlayer();
			// 	})
			// })(i);
		}
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