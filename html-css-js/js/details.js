// for fixed header when scroll
window.addEventListener("scroll", function(){
    var navScroll = document.querySelector('header');
    navScroll.classList.toggle("fixed", window.scrollY>10);
})


var movieID='';
var type='';
var movieAPI='';

// writing to html
function showDetails(data){
    console.log(data)
    // show title
    var movieOriginalTitle;
    if (type=='movie'){
        movieOriginalTitle= data.original_title;
        document.getElementById('moviename').innerHTML=movieOriginalTitle;
    }else{
        movieOriginalTitle= data.original_name;
        document.getElementById('moviename').innerHTML=movieOriginalTitle;   
    }
    
    
    //show image
    const posterURL='https://image.tmdb.org/t/p/w500/'+data.poster_path;
    document.getElementById('poster').src=posterURL;
    
    
    // show name, year
    document.getElementById('movietitle').innerHTML=movieOriginalTitle;
    if (type=='movie'){
        document.getElementById('year').innerHTML=` (${data.release_date.split('-')[0]})`;
    }
    else{
        document.getElementById('year').innerHTML=` (${data.first_air_date.split('-')[0]})`;
    }
    
    // show this movie's genres list
    function createGenre(data){
        i=1;
        const noGenre = data.genres.length;
        var genreSpan='';
        data.genres.map((genre) => {
            genreSpan+=genre.name;
            if (i<noGenre){ 
                genreSpan+=' &#9679 ';
                i++;}
            })
            return genreSpan;
        }
        
        document.getElementById('movieGenres').innerHTML=createGenre(data);    
        
        // show rate and tagline and overview
        const movRating=data.vote_average.toFixed(1);
        document.getElementById('score').innerHTML=movRating;
        document.getElementById('tagline').innerHTML=data.tagline;
        document.getElementById('overview').innerHTML=data.overview;
        
        
        // showing media
        if (type=='movie'){
            const mediaTrailer=`<iframe width="600" src="https://www.youtube-nocookie.com/embed/${data.videos.results[0].key}?controls=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            const mainBackdrop=`<img src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}">`;
            const mainPoster=`<img src="${posterURL}">`;
            
            document.getElementById('mediacontainer').innerHTML=mediaTrailer+mainBackdrop+mainPoster;
        }
        else{
            //show media for series
            document.querySelector("body > section:nth-child(4)").remove();
        }
        
        
        // showing extra backdrops
        const media2=document.getElementById('media2')
        if (type=='movie'){
            var backdroplength=data.images.backdrops.length
            if (backdroplength>50){
                backdroplength=50;
            }
            if (!(backdroplength<=1)){
                media2.innerHTML=""
                for (var i=1; i<backdroplength; i++){
                    media2.innerHTML+=`<img src="https://image.tmdb.org/t/p/w500/${data.images.backdrops[i].file_path}">`;
                }
            }
            else {
                media2.parentNode.parentNode.remove()
            }
        }
        else{
            var imagesAPI=`https://api.themoviedb.org/3/tv/${data.id}/images?api_key=2050ac8db077eda8b90b74a0f1423975`
            fetch(imagesAPI)
            .then((res) => res.json())
            .then(showImages)
            .catch((error) =>{
                console.log(error)
            }) 
            function showImages(data){
                var backdroplength=data.backdrops.length
                if (backdroplength>50){
                    backdroplength=50;
                }
                if (!(backdroplength<=1)){
                    media2.innerHTML=""
                    for (var i=0; i<backdroplength; i++){
                        media2.innerHTML+=`<img src="https://image.tmdb.org/t/p/w500/${data.backdrops[i].file_path}">`;
                    }
                }
                else {
                    media2.parentNode.parentNode.remove()
                }
            }
        }
        
        
        //showing extra videos
        const media3=document.getElementById('media3')
        if (type=='movie'){
            var videoslength=data.videos.results.length
            if (videoslength>50){
                videoslength=10;
            }
            if (!(videoslength<=1)){
                media3.innerHTML=""
                for (var i=1; i<videoslength; i++){
                    media3.innerHTML+=`<iframe width="600" src="https://www.youtube-nocookie.com/embed/${data.videos.results[i].key}?controls=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                }
            }
            else {
                media3.parentNode.parentNode.remove()
            }
        }
        else{
            var videoAPI=`https://api.themoviedb.org/3/tv/${data.id}/videos?api_key=2050ac8db077eda8b90b74a0f1423975`
            fetch(videoAPI)
            .then((res) => res.json())
            .then(showVideos)
            .catch((error) =>{
                console.log(error)
            }) 
            function showVideos(data){
                var videoslength=data.results.length
                if (videoslength>50){
                    videoslength=10;
                }
                if (!(videoslength<=1)){
                    media3.innerHTML=""
                    for (var i=0; i<videoslength; i++){
                        media3.innerHTML+=`<iframe width="600" src="https://www.youtube-nocookie.com/embed/${data.results[i].key}?controls=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    }
                }
                else {
                    media3.parentNode.parentNode.remove()
                }
            }
        }
        
        
        //showing extra posters
        if (type=='movie'){
            const media4=document.getElementById('media4')
            var posterslength=data.images.posters.length
            if (posterslength>50){
                posterslength=50;
            }
            if (!(backdroplength<=1)){
                media4.innerHTML=""
                for (var i=1; i<posterslength; i++){
                    media4.innerHTML+=`<img src="https://image.tmdb.org/t/p/w500/${data.images.posters[i].file_path}">`;
                }
            }
            else {
                media4.parentNode.parentNode.remove()
            }
        }
        else{
            var postersAPI=`https://api.themoviedb.org/3/tv/${data.id}/images?api_key=2050ac8db077eda8b90b74a0f1423975`
            fetch(postersAPI)
            .then((res) => res.json())
            .then(showImages)
            .catch((error) =>{
                console.log(error)
            }) 
            function showImages(data){
                var posterlength=data.posters.length
                if (posterlength>50){
                    posterlength=50;
                }
                if (!(posterlength<=1)){
                    media4.innerHTML=""
                    for (var i=0; i<posterlength; i++){
                        media4.innerHTML+=`<img src="https://image.tmdb.org/t/p/w500/${data.posters[i].file_path}">`;
                    }
                }
                else {
                    media4.parentNode.parentNode.remove()
                }
            }
        }
        
    }
    
    // fetch and get info about this movie
    window.onload= function () {
        if (document.location.href.includes("movieID=")){
            movieID=document.location.href.split('movieID=')[1];
            type = 'movie'
        }
        else{
            movieID=document.location.href.split('tvshowID=')[1];
            type='tvshow'
        }
        document.getElementById('details').href=document.location.href;
        if (type=='movie'){
            movieAPI=`https://api.themoviedb.org/3/movie/${movieID}?api_key=2050ac8db077eda8b90b74a0f1423975&append_to_response=videos%2Cimages`;
        }
        else{
            movieAPI=`https://api.themoviedb.org/3/tv/${movieID}?api_key=2050ac8db077eda8b90b74a0f1423975`;
        }
        // console.log(movieAPI);
        
        fetch(movieAPI)
        .then((res) => res.json())
        .then(showDetails)
        .catch((error) =>{
            console.log(error)
        }) 
    }