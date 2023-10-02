# Series
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



<img align="center" alto="Caio-page-serie"  height="800"  width="900" src="https://github.com/Caio-Vieira/tvseries-angular.ts/assets/129814574/8f70b2b7-fd19-4ade-81fd-ad233ee0d314">

<br></br>

<img align="center" alto="Caio-page-serie"  height="800"  width="900" src="https://github.com/Caio-Vieira/tvseries-angular.ts/assets/129814574/a0dfcf94-aa61-4a6a-967f-bff7efc0d1c6">

<br></br>



<div display= "flex" align="center">
<img align="center" alto="Caio-page-serie"  height="500" width="278" src="https://github.com/Caio-Vieira/tvseries-angular.ts/assets/129814574/3a23adc4-604f-4ac0-ba80-e8e9f4f2c2f9">  
<img align="center" alto="Caio-page-serie"  height="500"  width="278" src="https://github.com/Caio-Vieira/tvseries-angular.ts/assets/129814574/9f89141a-fb55-48d3-8724-bb1e36fac72d">
</div>



