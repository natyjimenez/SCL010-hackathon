window.fetchingData = {
    captureDirector: () => {
        fetch('http://www.omdbapi.com/?s=jane&apikey=cf8ca967')
          .then(function (response) {
            return response.json();
          })
          .then(function (jsonMoviesJane) {
            console.log("esto es lo que contiene jsonMovies.Search Poster" + jsonMoviesJane.Search[0].Poster);
            console.log("esto es lo que contiene jsonMovies.Search Poster " + jsonMoviesJane.Search[0].Poster);
            document.getElementById('title_id').innerHTML = jsonMoviesJane.Search[0].Title;
            document.getElementById('poster_id').src = jsonMoviesJane.Search[0].Poster;
            document.getElementById('type_id').innerHTML = jsonMoviesJane.Search[0].Type;
            document.getElementById('year_id').innerHTML = jsonMoviesJane.Search[0].Year;
            document.getElementById('imdbID_id').innerHTML = jsonMoviesJane.Search[0].imdbID;
            console.log(jsonMoviesJane);
            return jsonMoviesJane;
          });
    
      },
    
      capturaIMDBid: () =>
        fetch('http://www.omdbapi.com/?i=tt2132504&apikey=cf8ca967')
        .then(function (response) {
          console.log("Segundo objeto es el resultado de la búsqueda con id específico");
          return response.json();
        })
        .then(function (jsonMovies) {
          console.log(jsonMovies);
          return jsonMovies;
        })
    
};
    window.fetchingData = fetchingData;




