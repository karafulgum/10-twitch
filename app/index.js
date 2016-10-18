import 'whatwg-fetch';
import data from './data.json';
import showGamesInList from './twitch/add-games-to-list';
import createGameElement from './twitch/create-game-element';


// Look up a `ul` element with a class called `results`
const ul = document.querySelector('.results');
// console.log(data.top);
// Add games to the results list based on the data from `data.json`
for (let i = 0; i < data.length; i++) {
  const results = data[i];
  ul.appendChild(results);
}
