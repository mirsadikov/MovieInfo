// for fixed header when scroll
window.addEventListener("scroll", function(){
    var navScroll = document.querySelector('header');
    navScroll.classList.toggle("fixed", window.scrollY>50);
})


// Getting elements from result.html
const searchButton = document.querySelector('#searchButton');
const textInput = document.querySelector('#movieNameInput');
const searchResults = document.querySelector('#resultContainer');
var selectedType;

// API START--result page
// API values
const API_KEY ='2050ac8db077eda8b90b74a0f1423975';
const movieAPI ='https://api.themoviedb.org/3/search/movie?api_key=2050ac8db077eda8b90b74a0f1423975'
const serieAPI ='https://api.themoviedb.org/3/search/tv?api_key=2050ac8db077eda8b90b74a0f1423975'
const imgURL ='https://image.tmdb.org/t/p/w500/'

// Creating  movie card
function cardFigure(movies) {
    const section = document.createElement('section')
    section.classList='figuresContainer'
    
    movies.map((movie) => {
        if (movie.poster_path){
            const img=document.createElement('img');
            img.src=imgURL + movie.poster_path;
            
            const figcaption = document.createElement('figcaption')
            if (movie.original_title){
                figcaption.innerHTML=movie.original_title;
            }
            else{
                figcaption.innerHTML=movie.name;
            }
            
            const figure=document.createElement('figure');
            figure.appendChild(img);
            figure.appendChild(figcaption);
            
            const figureLink = document.createElement('a');
            if (selectedType=='movie'){
                figureLink.href='details.html?movieID='+movie.id;
            }
            else{
                figureLink.href='details.html?tvshowID='+movie.id;
            }
            figureLink.appendChild(figure);        
            section.appendChild(figureLink);
        }
    })
    return section;
}

// writing to result.html
function renderSearchMovies(data){
    console.log(data)
    searchResults.innerHTML='';
    const movies = data.results;
    if (data.results.length!=0){
        searchResults.appendChild(cardFigure(movies))
        // console.log(data)
        window.scroll({
            top: document.querySelector("#content-type").offsetTop-100,
            behavior: 'smooth'
        })//scrolls to result
    }
    else{
        searchResults.innerHTML='<h1>NO RESULTS</h1><img class="duck" src="./images/duck.gif">';
    }
    
}

// function for window load--fetch
function showResult(keyValue){
    if (keyValue!=undefined && keyValue!=""){
        localStorage.setItem("input", keyValue)
        const resultAPI= movieAPI + '&query=' + keyValue+ "&include_adult=false";
        fetch(resultAPI)
        .then((res) => res.json())
        .then(renderSearchMovies)
        .catch((error) =>{
            console.log(error)
        })
    }
}

// page onload event--this gets data from index.html and fetch API
window.onload = function () {
    document.querySelectorAll("#type-movie")[0].checked = true;
    var URLwithKey=document.location.href,
    keyValue= URLwithKey.split('key=')[1];
    selectedType='movie';
    showResult(keyValue);
}

//  Results page>>>Search button event
searchButton.onclick = function(e){
    const inputValue = textInput.value; 
    const resultAPI= movieAPI + '&query=' + inputValue+ "&include_adult=false";
    e.preventDefault();
    if (inputValue!=""){
        document.querySelectorAll("#type-movie")[0].checked = true;
        movieFind(e,resultAPI)
        localStorage.setItem("input", inputValue)
        textInput.value=''
        window.scrollBy({
            top: document.querySelector("#content-type").offsetTop - window.scrollY-100,
            behavior: 'smooth'
        })//scrolls to result 
    }
    else{
        alert("Please enter at least 1 character");
    }
}
function movieFind(e, resultAPI){
    fetch(resultAPI)
    .then((res) => res.json())
    .then(renderSearchMovies)
    .catch((error) =>{
        console.log(error)
    })
    
}

document.querySelector("#typemovie").addEventListener('click', function(e){
    console.log("movie")
    selectedType='movie'
    const resultAPI= movieAPI + '&query=' + localStorage.getItem("input")+ "&include_adult=false";
    movieFind(e, resultAPI)
})
document.querySelector("#typeserie").addEventListener('click', function(e){
    selectedType='tvshow';
    console.log("serie")
    const resultAPI= serieAPI + '&query=' + localStorage.getItem("input")+ "&include_adult=false";
    movieFind(e, resultAPI)
})