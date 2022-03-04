import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Tic Tac Toe';
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  status = 'Win'; // 'Win', 'Lose', 'Tie'
  start = true;
  isX = true;
  winner: string[];

  ngOnInit() {}

  onClick(x: number, y: number) {
    console.log('x, y', x, y);
    if (this.board[x][y] === '') {
      if (this.isX) {
        this.board[x][y] = 'X';
        this.isX = false;
      } else {
        this.board[x][y] = 'O';
        this.isX = true;
      }
    }
  }

  reset() {
    this.clear();
  }

  clear() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.isX = true;
  }

  get player() {
    return this.isX ? 'X' : 'O';
  }

  calculateWinner() {
    console.log('hola?');
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a];
      }
    }
    return null;
  }
}
