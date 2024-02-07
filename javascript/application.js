import Mustache from "mustachejs";
import { createApp } from "vue";

console.log("Good Wed!");

// ///////////
// Vanilla JS
// ///////////

// // 1. Select elements (results)
// const results = document.getElementById("results");

// // 2. Fetch ombdbAPI
// const url = "https://www.omdbapi.com/?s=matrix&apikey=adf1f2d7"
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data.Search);
//     const movies = data.Search;
//     // 3. Change the DOM, insert the movies in the result
//     movies.forEach((movie) => {
//       results.insertAdjacentHTML("afterbegin", `
//       <div class='col-6'>
//         <div class="card">
//           <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
//           <div class="card-body">
//             <h6 class="card-title">${movie.Title}</h6>
//             <p class="card-text">${movie.Year}</p>
//             <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//           </div>
//         </div>
//       </div>
//       `);
//     });
//   });

// ///////////
// JS with templates
// ///////////

// // // 1. Select elements (results)
// const results = document.getElementById("results");
// const template = document.getElementById("movieCardTemplate");
// // console.log(template);
// // // 2. Fetch ombdbAPI
// const url = "https://www.omdbapi.com/?s=matrix&apikey=adf1f2d7"
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     // 3. Change the DOM add cardinfo into the results
//     movies.forEach((movie) => {
//       const clone = template.content.cloneNode(true);
//       clone.querySelector("h6.card-title").innerText = movie.Title;
//       clone.querySelector("p.card-text").innerText = movie.Year;
//       clone.querySelector("img.card-img-top").src = movie.Poster;
//       clone.querySelector("img.card-img-top").alt = movie.Title;
//       clone.querySelector("a.btn-primary").href += movie.imdbID;
//       console.log(clone);
//       results.appendChild(clone);
//     });
//   });
    
    
// "h6.card-title"
// <h6 class="card-title">Matches this!</h6>

// h6 .card-title
// <h6>
//   <div class="card-title">Matches this!</div>
// </h6>


// ///////////
// MUSTACHEJS
// ///////////

// const testTemplate = "<h4>{{subTitle}}</h4>";
// const testData = {
//   subTitle: "Yoshio is the bomb"
// };
// const rendered = Mustache.render(testTemplate, testData);
// // <h4>{{subTitle}}</h4>
// // <h4>Yoshio is the bomb</h4>
// console.log(rendered);

// // Movie data structure:
// // {
// //   "Title": "Harry Potter and the Deathly Hallows: Part 2",
// //   "Year": "2011",
// //   "imdbID": "tt1201607",
// //   "Type": "movie",
// //   "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
// // }

// // // // 1. Select elements (results)
// const results = document.getElementById("results");
// const template = document.getElementById("movieCardTemplate");

// // 2. Fetch ombdbAPI
// const url = "https://www.omdbapi.com/?s=matrix&apikey=adf1f2d7"
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     // 3. Change the DOM add cardinfo into the results
//     movies.forEach((movie) => {
//       const output = Mustache.render(template.innerHTML, movie);
//       results.insertAdjacentHTML("beforeend", output);
//     });
//   });


  // ///////////
// MUSTACHEJS + ITERATION
// ///////////

// // // // 1. Select elements (results)
// const results = document.getElementById("results");
// const template = document.getElementById("movieCardTemplate");

// // 2. Fetch ombdbAPI
// const url = "https://www.omdbapi.com/?s=matrix&apikey=adf1f2d7"
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     // 3. Change the DOM add cardinfo into the results
//     const moviesData = {
//       movies: data.Search
//     }
//     const output = Mustache.render(template.innerHTML, moviesData);
//     results.insertAdjacentHTML("beforeend", output);
//   });

// ///////////
// VUEJS
// ///////////

createApp({
  data() {
    return {
      message: "Hello Yoshio!"
    }
  }
}).mount("#vue-root");