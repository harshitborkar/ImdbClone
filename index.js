    const apiKey="e149e5d1";
const apiBaseUrl="https://www.omdbapi.com/?t=";
let search=document.getElementById("search-input");
let movieGrid=document.getElementById("movie-grid");

function favMovie(e){
    const first=e.target.name.split(" ");
    
    const movieName=first[0]+first[1];
    
    if(e.target.innerHTML=="Favourite"){
        e.target.innerHTML="Unfavourite";
        let favmovie = JSON.parse(localStorage.getItem("favMovie"))||[];
        let results=JSON.parse(localStorage.getItem("results"))||[];        
        
        favmovie.push(results[Number(e.target.id)]);
    
        localStorage.setItem("favMovie",JSON.stringify(favmovie));
    
        e.target.value=" ";

    }
}


function movieDetails(event){
    let details=JSON.parse(localStorage.getItem("results"))||[];
    let currentMovie=details[Number(event.target.id)];
    localStorage.setItem("current_movie",JSON.stringify(currentMovie));
    window.location.assign("movie.html");
}

search.addEventListener("input",(e)=>{
 const fetchApi=async function(){
    
    const response=await fetch(`http://www.omdbapi.com/?t=${e.target.value}&apikey=${apiKey}`);
    const data=await response.json();
    
    let results=JSON.parse(localStorage.getItem("results"))||[];
    results.push(data);
    localStorage.setItem("results",JSON.stringify(results));
    const avatar = data.Title;
    const imgsrc = data.Poster;
    currentMovie = data;
    
    movieGrid.innerHTML+=`<div class="card-body">
    <h5>${avatar}</h5>
    <img src="${imgsrc}" class="img-mov">
    <button class="btn btn-primary" id="${results.length-1}" name=${JSON.stringify(data)}
    onclick="favMovie(event)">Favourite</button>
    <button class="btn btn-primary" id="${results.length-1}" onclick=movieDetails(event)>Details</button>
    
    
    
    </div>`;
    
 }
 fetchApi();
})
 

