# Seriestv
<h3> Welcome to my repository.</h3>
<h4>This project was developed with angular/ts and to apply styles or tailwindcss design</h4>
<h4>It consumes Tmdb Api rendered four list of series already defined a detail page with the poster of the actors of the series, plus a page for series research</h4>
<h4>To use this project install the node_module with</h4>

````

npm install


````

<h4>In the Environment folder create a file with the name Environment.Development.ts and add this code</h4>


````

export const environment = {
  apiwestern:
    'https://api.themoviedb.org/3/discover/tv?api_key= //here your key &with_genres=37&language=pt-BR',
  apipopular:
    'https://api.themoviedb.org/3/tv/popular?api_key= //here your key  &language=pt-BR',
  apisearch:
    'https://api.themoviedb.org/3/search/tv?api_key= //here your key &language=pt-BR',
  apifamily:
    'https://api.themoviedb.org/3/discover/tv?api_key= //here your key &with_genres=10751&language=pt-BR',
  apianimation:
    'https://api.themoviedb.org/3/discover/tv?api_key= //here your key &with_genres=16&language=pt-BR',
  apidetails: `https://api.themoviedb.org/3/tv/`,
  apikeydetails: `?api_key= //here your key &language=pt-BR`,
};



````

<h4>Ready to render use the command</h4>

````

ng serve -o


````
<br>


<img align="center" alto="Caio-traler"  height="500"  width="278" src="https://github.com/Caio-Vieira/movie_site/assets/129814574/a9604f5c-54bb-496c-ae2d-605216dd2d29">

