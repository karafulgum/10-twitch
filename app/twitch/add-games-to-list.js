import createGameElement from './create-game-element';
//
// export default function showGamesInList(itemOne, itemTwo) {
//   console.log(Array.from(itemOne));
// }
//
export default function showGamesInList(data) {
 // debugger;
  for (let i = 0; i < data.length; i++) {
    const info = data[i];
    info.appendChild(data[i]);
  }
  const gameItem = document.createElement('div');
}
