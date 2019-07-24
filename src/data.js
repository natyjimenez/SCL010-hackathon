window.fetchingData = {
  /* Funcionalidad que busca en los títulos de películas de la API a partir de un término
  de búsqueda que ingrese el usuario */
  searchByUserInput: () => {
    let userSearch = handlingDOM.catchingSearchTerm();
    console.log(userSearch);
    fetch(`http://www.omdbapi.com/?s=${userSearch}&apikey=cf8ca967`)
      .then(function (response) {
        return response.json();
      })
      .then(function (userSearchParsed) {
        let resultContent = '';
        //handlingDOM.fillingCards().innerHTML = '';
        console.log(userSearchParsed.Plot);
        console.log(userSearchParsed);
        let card = document.createElement('div');
        resultContent += `<div class="card" style="width: 18rem;"> <img src="${userSearchParsed.Poster}" class="card-img-top" alt="${userSearchParsed.Title}">
              <div class="card-body"> <h5 class="card-title">${userSearchParsed.Title}</h5> 
              <p class="card-text">${userSearchParsed.Plot}</p> <a href="#" class="btn btn-primary">Director's Bio</a> </div> </div>`;
        card.innerHTML = resultContent;
        handlingDOM.fillingCards().appendChild(card);
      });

  },
  /* Funcionalidad que busca en la API original a partir de un imdbID que ingrese el usuario */
  searchByImdbId: () => {
    let inputImdbId = handlingDOM.catchingIdToSearch();
    fetch(`http://www.omdbapi.com/?i=${inputImdbId}&apikey=cf8ca967`)
      .then(function (response) {
        return response.json();
      })
      .then(function (idResultParsed) {

        return idResultParsed;
      });
  },

  /*Funcionalidad que recorre la data propia en directorsDataJSLocal.js, extrae su imdbID y lo usa como parámetro
  para hacer la consulta en la API con el método fetch */
  searchInWomenDirectors: () => {
    for (let v = 0; v < womenDirectors.directors.length; v++) {
      let idToSearchInAPI = womenDirectors.directors[v].imdbID;
      fetch(`http://www.omdbapi.com/?i=${idToSearchInAPI}&apikey=cf8ca967`)
        .then(function (response) {
          return response.json();
        })
        .then ((searchParsed) => {
          let resultContent = '';
          let card = document.createElement('div');
          resultContent += `<div class="card" style="width: 18rem;"> <img src="${searchParsed.Poster}" class="card-img-top" alt="${searchParsed.Title}">
              <div class="card-body"> <h5 class="card-title">${searchParsed.Title}</h5> 
              <p class="card-text">${searchParsed.Plot}</p> <a href="#" class="btn btn-dark">Director's Bio</a> </div> </div>`;
          card.innerHTML = resultContent;
          handlingDOM.fillingCards().appendChild(card);
        });
    }
  },

  /*Funcionalidad que toma el nombre de directora ingresada por el usuario, la busca en la data propia,
  extrae su imdbID y lo usa como parámetro para hacer la consulta en la API con el método fetch */
  searchOnlyWomenData: () => {
    let imdbFound = '';
    let inputWmDirector = handlingDOM.onlyWomenDataSearch().toLowerCase();
    for (let m = 0; m < womenDirectors.directors.length; m++) {
      let nameLowerC = (womenDirectors.directors[m].name).toLowerCase();
      if (inputWmDirector === nameLowerC) {
        imdbFound = womenDirectors.directors[m].imdbID;
      }
    }
    fetch(`http://www.omdbapi.com/?i=${imdbFound}&apikey=cf8ca967`)
      .then(function (response) {
        return response.json();
      })
      .then(function (searchParsed) {
        let resultContent = '';
        resultContent += `<div class="card" style="width: 18rem;"> <img src="${searchParsed.Poster}" class="card-img-top" alt="${searchParsed.Title}">
              <div class="card-body"> <h5 class="card-title">${searchParsed.Title}</h5> 
              <p class="card-text">${searchParsed.Plot}</p> <a href="#" class="btn btn-dark">Director's Bio</a> </div> </div>`;
        handlingDOM.fillingCards().innerHTML = resultContent;
      });


  },

  cleanAndShowAll: () => {
    handlingDOM.fillingCards().innerHTML = '';
    fetchingData.searchInWomenDirectors();

  }

};
window.fetchingData = fetchingData;
