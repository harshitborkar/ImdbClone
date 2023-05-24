let details=JSON.parse(localStorage.getItem("current_movie"))||[];
let movierender=document.getElementById("movie-details")
let title=details.Title
let poster=details.Poster
let plot=details.Plot
let rating=details.Ratings[0].Value 
movierender.innerHTML=`<h1>${title}</h1>
<h3>${rating}</h3>
<img src="${poster}">
<p>${plot}</p>
`
