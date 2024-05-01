import Mustache from "mustachejs";
import { createApp } from "vue";

const url = `https://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7`;

// ///////////
// Vanilla JS
// ///////////

// // 1. Select elements results div
// const results = document.querySelector('#results');

// // 2. Fetch an array movies form OMDB API
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     // 3. Change the DOM insert the movies in results
//     const movies = data.Search;
//     movies.forEach((movie) => {
//       const cardTemplate = `
//       <div class='col-6'>
//         <div class="card">
//           <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title} poster">
//           <div class="card-body">
//             <h2 class="card-title">${movie.Title}</h2>
//             <p class="card-text">${movie.Year}</p>
//             <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//           </div>
//         </div>
//       </div>`;
//       results.insertAdjacentHTML("beforeend", cardTemplate);
//     });
//   });

// ///////////
// JS with templates
// ///////////

// const template = document.querySelector("#movie-card-template");
// const results = document.querySelector('#results');

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     movies.forEach((movie) => {
//       console.log(template.content) // this is a HTML element
//       // console.log(template.innerHTML) // this is a string
//       const clone = template.content.cloneNode(true); // creating a copy of the original template
//       clone.querySelector(".card-title").innerText = movie.Title;
//       clone.querySelector(".card-img-top").src = movie.Poster;
//       clone.querySelector(".card-img-top").alt = `${movie.Title} poster`;
//       clone.querySelector("a").href = `https://www.imdb.com/title/${movie.imdbID}`;
//       results.appendChild(clone) // inserting the clone into results
//     });
//   });

// ///////////
// MUSTACHEJS
// ///////////

// const testTemplate = "<h1>{{student}} is amazing!</h1>";
// const testData = { student: "Rei" }

// const testResult = Mustache.render(testTemplate, testData);
// console.log(testResult);
// => <h1>Rei is amazing!</h1>

// const template = document.querySelector("#movie-card-template");
// const results = document.querySelector('#results');

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     movies.forEach((movie) => {
//       // {
//       //   "Title": "Harry Potter and the Goblet of Fire",
//       //   "Year": "2005",
//       //   "imdbID": "tt0330373",
//       //   "Type": "movie",
//       //   "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
//       //  }
//       const cardTemplate = template.innerHTML;
//       const card = Mustache.render(cardTemplate, movie);
//       results.insertAdjacentHTML("beforeend", card);
//     });
//   });

// ///////////
// MUSTACHEJS + ITERATION
// ///////////

// const template = document.querySelector("#movie-card-template");
// const results = document.querySelector('#results');

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     const moviesData = {
//       "movies": movies
//     }
//     const cardTemplate = template.innerHTML;
//     const cards = Mustache.render(cardTemplate, moviesData);
//     results.innerHTML = cards;
//   });

// ///////////
// VUEJS
// ///////////

createApp({
  data() {
    return {
      message: "Hello batch #1638"
    }
  }
}).mount("#vue-root")