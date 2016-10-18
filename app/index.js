import 'whatwg-fetch';
import data from './data.json';
import showGamesInList from './twitch/add-games-to-list';
import createGameElement from './twitch/create-game-element';


// Look up a `ul` element with a class called `results`

// console.log(data.top);
// Add games to the results list based on the data from `data.json`
// for (let i = 0; i < data.top.length; i++) {
//   const ul = document.querySelector('.results');
//   const games = data.top[i];
//   const name = document.querySelector('game-item__name');
//   name.innerText = games.name;
  // const popularity = document.querySelector('game-item__popularity');
  // popularity.innerText = games.popularity;
  // const pic = document.querySelector('game-item__pic');
  // pic.src.innerText = games.box.large;
  // ul.appendChild(games);
// }
