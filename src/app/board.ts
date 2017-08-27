export type Cell = 'X' | 'O' | '';

export class Board {
  node: HTMLDivElement;
  cells: HTMLElement[][];
  values: Cell[][];

  constructor(node: HTMLDivElement = null) {
    if (node) {
      this.node = node;
    } else {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
    }

    this.node.classList.add('board');

    this.cells = [];
    this.values = [];

    for (let y = 0; y < 3; y++) {
      let row = [];
      let rowEl = document.createElement('div');
      rowEl.classList.add('row');

      for (let x = 0; x < 3; x++) {
        let cell = document.createElement('button');
        cell.classList.add('cell');
        rowEl.appendChild(cell);
        row.push(cell);
      }
      this.values.push(row.map(x => '' as Cell));
      this.cells.push(row);
      this.node.appendChild(rowEl);
    }
  }

  onClick(handler: (x: number, y: number, cell: Cell) => void) {
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        this.cells[y][x].addEventListener('click', e => {
          handler(x, y, this.cells[y][x].innerText as any as Cell)
        })
      }
    }
  }

  setCell(x: number, y: number, value: 'X' | 'O' | '') {
    let cell = this.cells[y][x];
    cell.innerText = value;
  }
}