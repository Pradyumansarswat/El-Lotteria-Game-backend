const Grid = require('../models/Grid');

const startGame = async (req, res) => {
  try {
    const { grid1, grid2 } = req.body;
    const newGame = new Grid({ grid1, grid2 });
    await newGame.save();
    res.json({ message: 'Game started', game: newGame });
  } catch (error) {
    res.status(500).json({ error: 'Failed to start game' });
  }
};

const getRandomNumber = async (req, res) => {
  try {
    const game = await Grid.findOne().sort({ _id: -1 });
    if (!game) return res.status(404).json({ error: 'No game found' });

    const allNumbers = [...new Set([...game.grid1.flat(), ...game.grid2.flat()])].filter(Boolean);
    const randomNumber = allNumbers[Math.floor(Math.random() * allNumbers.length)];

    const updateGrid = (grid) => grid.map(row => row.map(cell => (cell === randomNumber ? null : cell)));

    const updatedGrid1 = updateGrid(game.grid1);
    const updatedGrid2 = updateGrid(game.grid2);

    const isWinner = (grid) => [
      [grid[0][0], grid[0][1], grid[0][2]], // Row 1
      [grid[1][0], grid[1][1], grid[1][2]], // Row 2
      [grid[2][0], grid[2][1], grid[2][2]], // Row 3
      [grid[0][0], grid[1][0], grid[2][0]], // Col 1
      [grid[0][1], grid[1][1], grid[2][1]], // Col 2
      [grid[0][2], grid[1][2], grid[2][2]], // Col 3
    ].some(combination => combination.every(num => num === null));

    const isSamePattern = (grid1, grid2) => {
      for (let i = 0; i < grid1.length; i++) {
        for (let j = 0; j < grid1[i].length; j++) {
          if (grid1[i][j] !== grid2[i][j]) {
            return false;
          }
        }
      }
      return true;
    };

    const isDraw = (grid1, grid2) => {
      const noMoreMoves = grid1.flat().every(cell => cell === null) && grid2.flat().every(cell => cell === null);
      const bothWinners = isWinner(updatedGrid1) && isWinner(updatedGrid2);
      return isSamePattern(updatedGrid1, updatedGrid2) || noMoreMoves || bothWinners;
    };

    let winner = '';
    const player1Wins = isWinner(updatedGrid1);
    const player2Wins = isWinner(updatedGrid2);

    if (player1Wins && player2Wins) {
      winner = 'Draw';
    } else if (player1Wins) {
      winner = 'Player 1';
    } else if (player2Wins) {
      winner = 'Player 2';
    } else if (isDraw(updatedGrid1, updatedGrid2)) {
      winner = 'Draw';
    }

    Object.assign(game, { grid1: updatedGrid1, grid2: updatedGrid2, winner });
    await game.save();

    res.json({ randomNumber, updatedGrid1, updatedGrid2, winner });
  } catch (error) {
    res.status(500).json({ error: 'Error generating number' });
  }
};

module.exports = {
  startGame,
  getRandomNumber
};