import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  parentEl.innerHTML = '';

  for (let i = 0; i < data.top.length; i++) {
    const gameItem = data.top[i];
    const el = createGameElement(gameItem);
    const ul = document.querySelector('.results');
    const name = document.querySelector('game-item__name');
    name.innerText = gameItem.name;
    ul.appendChild(el);
  }
}

// for (let i = 0; i < data.top.length; i++) {
//   const ul = document.querySelector('.results');
//   const games = data.top[i];
//   const name = document.querySelector('game-item__name');
//   name.innerText = games.name;
// }
