import Mustache from "mustachejs";
import { createApp } from "vue";

// console.log("Happy Wed!");

const url = `https://www.omdbapi.com/?s=back to the future&apikey=620c6871`;

// ///////////
// Vanilla JS
// ///////////

// 1. Select elements (results)
// const results = document.querySelector("#results");

// 2 Fetch API (GET OMDB api) --> object
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//     // 3. Change the DOM (insert the movie card into the results)
//     data.Search.forEach((movieData) => {
//       const card = 
//       `<div class='col-6'>
//           <div class="card mb-3">
//             <img src="${movieData.Poster}" class="card-img-top" alt="${movieData.Title}">
//             <div class="card-body">
//               <h2 class="card-title">${movieData.Title}</h2>
//               <p class="card-text">${movieData.Year}</p>
//               <a href="https://www.imdb.com/title/${movieData.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//             </div>
//           </div>
//         </div>`;
//       results.insertAdjacentHTML("afterbegin", card);
//     });
//   });

// ///////////
// JS with templates
// ///////////

// const movieCardTemplate = document.querySelector("#movieCardTemplate");
// const results = document.querySelector("#results");

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     data.Search.forEach((movieData) => {
//       // movieCardTemplate.innerHTML --> string
//       // movieCardTemplate.content ---> HTML element
//       // console.log(movieCardTemplate.innerHTML);
//       // console.log(movieCardTemplate.content);
//       // XXX.cloneNode(true) --> makes a copy of a HTML element
//       const card = movieCardTemplate.content.cloneNode(true);
//       card.querySelector(".card-title").innerText = movieData.Title;
//       card.querySelector(".card-text").innerText = movieData.Year;
//       card.querySelector(".card-img-top").src = movieData.Poster;
//       card.querySelector(".card-img-top").alt = movieData.Title;
//       card.querySelector("a").href = `https://www.imdb.com/title/${movieData.imdbID}`;
//       console.log(card);
      
//       results.appendChild(card) // --> works for a HTML element card
//       // results.insertAdjacentHTML("afterbegin", card); --> works for a string card
//       // results.insertAdjacentElement("afterbegin", card); --> works for a HTML element card
//     });
//   });

// ///////////
// MUSTACHEJS
// ///////////

// const template = "Esteban is {{adjective}} {{quality}}."
// const data = {
//   quality: "curious",
//   adjective: "incredibly"
// };
// const result = Mustache.render(template, data);
// console.log(result);

// const movieCardTemplate = document.querySelector("#movieCardTemplate");
// const results = document.querySelector("#results");

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     data.Search.forEach((movieData) => {
//       const template = movieCardTemplate.innerHTML;
//       // console.log(template);
//       // console.log(movieData);
      
//       const card = Mustache.render(template, movieData);
//       // console.log(card);
//       results.insertAdjacentHTML("afterbegin", card);
//     });
//   });


// ///////////
// MUSTACHEJS + ITERATION
// ///////////

// const movieCardTemplate = document.querySelector("#movieCardTemplate");
// const results = document.querySelector("#results");

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const movieData = {
//       movieCards: data.Search
//     }
//     // movieData is this 👇
//     // {
//     //    movieCards: [{Title: XXX, Year: YYY,...}, {}, {}, {}]
//     // }
//     // console.log(movieData);
//     const template = movieCardTemplate.innerHTML;
//     const cards = Mustache.render(template, movieData);
//     // console.log(cards);
//     results.insertAdjacentHTML("afterbegin", cards);
  
//   });


// ///////////
// VUEJS
// ///////////

createApp({
  data() {
    return {
      message: "Hello batch #1808"
    }
  }
}).mount("#vue-root");