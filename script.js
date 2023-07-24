const xsvg = '<svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>';
const osvg = '<svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 96a160 160 0 1 0 0 320 160 160 0 1 0 0-320zM448 256A224 224 0 1 1 0 256a224 224 0 1 1 448 0z"/></svg>'

const markcycle = [xsvg, osvg];
let xturn = true;
let xwins = 0;
let owins = 0;

// setup
const grid = [];
let simpleGrid = [];
for (let i = 1; i <= 3; i++) {
  const row = [];
  const simpleRow = [];
  for (let j = 1; j <= 3; j++) {
    const coor = i.toString() + j.toString();
    console.log(coor)
    const coords = document.getElementById(coor);
    row.push(coords);
    simpleRow.push('');
  }
  grid.push(row);
  simpleGrid.push(simpleRow);
}
console.log(grid);
console.log(simpleGrid);

grid.forEach((row) => {
  row.forEach((coords) => {
    const r = coords.id.toString().charAt(0);
    const c = coords.id.toString().charAt(1);
    coords.addEventListener('click', () => { mark(coords,r,c) });
  }
  )
}
)

// game functions
function clearBoard() {
  grid.forEach((row) => {
    row.forEach((coords) => {
      coords.innerHTML = '';
    }
    )
  }
  )

  simpleGrid.forEach((row) => {
    simpleRow.forEach((coords) => {
      coords = '';
    }
    )
  }
  )

  console.log(simpleGrid);
}

function checkWinner() {

}

function mark(loc,row,col) {
  if (loc.innerHTML === '') {
    if (xturn) {
      loc.innerHTML = xsvg;
      xturn = false;
      simpleGrid[row-1][col-1] = 'x';
    } else {
      loc.innerHTML = osvg;
      xturn = true;
      simpleGrid[row-1][col-1] = 'o';
    }
    console.log(loc.id);
    console.log(simpleGrid);
  }
}