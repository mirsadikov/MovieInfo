// for fixed header when scroll
window.addEventListener("scroll", function(){
    var navScroll = document.querySelector('header');
    navScroll.classList.toggle("fixed", window.scrollY>10);
})

// some data
var genreID='';
var genreName='';
const genreResults = document.querySelector('#resultContainer');
const genreAPI='https://api.themoviedb.org/3/genre/movie/list?api_key=2050ac8db077eda8b90b74a0f1423975';
const thisGenreAPI='https://api.themoviedb.org/3/discover/movie?api_key=2050ac8db077eda8b90b74a0f1423975&sort_by=popularity.desc&include_adult=false&page=1&with_genres='
const imgURL ='https://image.tmdb.org/t/p/w500/'

// Creating  movie card
function cardFigure(movies) {
    const section = document.createElement('section')
    section.classList='figuresContainer'

    movies.map((movie) => {
        if (movie.poster_path){
            const img=document.createElement('img');
            img.src=imgURL + movie.poster_path;
            img['data-movie-id']=movie.id;

            const figcaption = document.createElement('figcaption')
            figcaption.innerHTML=movie.original_title;

            const figure=document.createElement('figure');
            figure.appendChild(img);
            figure.appendChild(figcaption)

            const figureLink = document.createElement('a')
            figureLink.href='details.html?movieID='+movie.id;
            figureLink.appendChild(figure)           
            section.appendChild(figureLink);
        }
    })
    return section;
}

// writing results to bygenres.html
function renderGenreMovies(data){
    const movies = data.results;
    genreResults.appendChild(cardFigure(movies))
    console.log(data)
}

// writing genre name to h2
function getGenreName(data){
    const genres= data.genres;
    genres.map((genre) => {
        if (genre.id==genreID){
            genreName=genre.name;
            document.getElementById('genrename').innerHTML=genreName
        }
    })
}

// fetch on page load and dynamically generates movies cards
window.onload= function () {
    genreID=document.location.href.split('genreID=')[1];
    fetch(genreAPI)
        .then((res) => res.json())
        .then(getGenreName)  // writes genre name to h2
        .catch((error) =>{
            console.log(error)
        })  

    fetch(thisGenreAPI+genreID)
        .then((res) => res.json())
        .then(renderGenreMovies)  //gets movies
        .catch((error) =>{
            console.log(error)
        }) 
}

//when more button pressed shows more
var pageNumber=1;
const moreButton=document.getElementById('more')
moreButton.onclick= function(){
    pageNumber=pageNumber+1;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2050ac8db077eda8b90b74a0f1423975&sort_by=popularity.desc&include_adult=false&page=${pageNumber}&with_genres=${genreID}`)
        .then((res) => res.json())
        .then(renderGenreMovies)
        .catch((error) =>{
            console.log(error)
        }) 
        window.scrollBy(0, -50);
}