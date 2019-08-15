const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.hexBtn');
const bodyColor = document.querySelector('body');
const hex = document.querySelector('.hex');

btn.addEventListener('click', () => {
  let hexCol = '#';
  for(let i = 0; i<6; i++) {
    let random = Math.floor(Math.random()*hexNumbers.length);
    hexCol +=hexNumbers[random];
      // console.log(hexCol);
    bodyColor.style.backgroundColor = hexCol;
    hex.innerText = `This hex color code is: ${hexCol}`;
  }
});
