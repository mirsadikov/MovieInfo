// for fixed header when scroll
window.addEventListener("scroll", function(){
    var navScroll = document.querySelector('header');
    navScroll.classList.toggle("fixed", window.scrollY>50);
})


// getting elements from index.html
const homeSearchButton = document.querySelector('#homeSearchButton');
const movieNameInputHome = document.querySelector('#movieNameInputHome');

// this function on form submit
function validateForm(event){
    var inputValueHome=movieNameInputHome.value;
    if (inputValueHome){
        document.getElementById('homeForm').action = './result.html?#?key='+inputValueHome;
    }
    else{
        alert("Please enter at least 1 character")
        event.preventDefault();
    }
}

//  Home--trending , nowplaying movie types, some elements
const popularContainer = document.querySelector('.containerPopular');
const nowplayingContainer = document.querySelector('.containerNowplaying');
const popularAPI = 'https://api.themoviedb.org/3/trending/movie/day?api_key=2050ac8db077eda8b90b74a0f1423975';
const nowplayingAPI ='https://api.themoviedb.org/3/movie/now_playing?api_key=2050ac8db077eda8b90b74a0f1423975&language=en-US&page=1';
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
            if (figcaption.innerHTML=='undefined'){
                figcaption.innerHTML=movie.original_name;
            }

            const figure=document.createElement('figure');
            figure.appendChild(img);
            figure.appendChild(figcaption)

            const figureLink = document.createElement('a')
            figureLink.href='details.html?movieID='+movie.id ;
            figureLink.appendChild(figure)           
            section.appendChild(figureLink);
        }
    })
    return section;
}


///////////////////////////////////////////////
// writing to popular movies section
function renderPopularMovies(data){
    const dataMovies = data.results;
    popularContainer.appendChild(cardFigure(dataMovies))
    console.log(data)
}
// writing to nowplaying movies section
function renderNowPlayingMovies(data){
    const dataMovies = data.results;
    nowplayingContainer.appendChild(cardFigure(dataMovies))
    console.log(data)
}


///////////////////////////////////////////////
// page onload event-- API
window.onload = function () {
    fetch(popularAPI)
        .then((res) => res.json())
        .then(renderPopularMovies)
        .catch((error) =>{
            console.log(error)
        })   
    fetch(nowplayingAPI)
        .then((res) => res.json())
        .then(renderNowPlayingMovies)
        .catch((error) =>{
            console.log(error)
        })  
}

