//scroll

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("active", window.scrollY > 0);
}) 

// api key  from TMDB
const api = "api_key=fb935160506b54569de2fb6410677341";
// base url of the site
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";


// requests for movies data

const requests = {
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
};

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {
    
    // every refresh the movie will be change

    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");


    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
  });


  //Serach

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('active');
});

 