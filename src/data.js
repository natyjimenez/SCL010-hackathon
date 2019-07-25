window.fetchingData = {
  /* Funcionalidad que busca en los títulos de películas de la API a partir de un término
  de búsqueda que ingrese el usuario */
  searchByUserInput: () => {
    let userSearch = handlingDOM.catchingSearchTerm();
    console.log(userSearch);
    fetch(`http://www.omdbapi.com/?s=${userSearch}&apikey=cf8ca967`)
      .then(response => {
        return response.json();
      })
      .then(userSearchParsed => {
        let resultContent = '';
        handlingDOM.fillingCards().innerHTML = '';
        console.log(userSearchParsed);
        let arrayIn = userSearchParsed.Search;
        console.log(arrayIn);
        let card = document.createElement('div');
        for (let c = 0; c < userSearchParsed.Search.length; c++) {
          let imdbToFetch = arrayIn[c].imdbID;
          fetch(`http://www.omdbapi.com/?i=${imdbToFetch}&apikey=cf8ca967`)
            .then(function (response) {
              return response.json();
            })
            .then(idResultParsed => {
              resultContent += `<div class="cardMovie" style="width: 18rem;"> <img src="${idResultParsed.Poster}" class="card-img-topMovie" alt="${idResultParsed.Title}">
              <div class="card-bodyMovie"> <h5 class="card-titleMovie">${idResultParsed.Year}</h5> 
              <p class="card-textMovie">${idResultParsed.Plot}</p> </div> </div>`;
              card.innerHTML = resultContent;
              handlingDOM.fillingCards().appendChild(card);
            });
        }
      });

  },
  /* Funcionalidad que busca en la API original a partir de un imdbID que ingrese el usuario */
  searchByImdbId: () => {
    let inputImdbId = handlingDOM.catchingIdToSearch();
    fetch(`http://www.omdbapi.com/?i=${inputImdbId}&apikey=cf8ca967`)
      .then(response => {
        return response.json();
      })
      .then(idResultParsed =>{
        console.log(idResultParsed);
        let resultContent = '';
        resultContent += `<div class="cardMovie" style="width: 18rem;"> <img src="${idResultParsed.Poster}" class="card-img-topMovie" alt="${idResultParsed.Title}">
              <div class="card-bodyMovie"> <h5 class="card-titleMovie">${idResultParsed.Title}</h5> 
              <p class="card-textMovie">${idResultParsed.Plot}</p> </div> </div>`;
        handlingDOM.fillingCards().innerHTML = resultContent; 
      });
    },
  
    /*Funcionalidad que recorre la data propia en directorsDataJSLocal.js, extrae su imdbID y lo usa como parámetro
    para hacer la consulta en la API con el método fetch */
    searchInWomenDirectors: () => {
      for (let v = 0; v < womenDirectors.directors.length; v++) {
        let idToSearchInAPI = womenDirectors.directors[v].imdbID;
        fetch(`http://www.omdbapi.com/?i=${idToSearchInAPI}&apikey=cf8ca967`)
          .then(response => {
            return response.json();
          })
          .then(searchParsed => {
            let resultContent = '';
            let card = document.createElement('div');
            resultContent += `<div class="cardMovie" style="width: 13rem; margin=0.5%"> <img src="${searchParsed.Poster}" class="card-img-topMovie" alt="${searchParsed.Title}">
                <div class="card-bodyMovie"> <h5 class="card-title">${searchParsed.Title}</h5> 
                <p class="card-textMovie">${searchParsed.Plot}</p> <button id=${searchParsed.imdbID} class="btnMovie btn-darkMovie" onclick= fetchingData.showModalBio()>Directora: ${searchParsed.Director}</button> </div> </div>`;
            card.innerHTML = resultContent;
            handlingDOM.fillingCards().appendChild(card);
            return searchParsed.imdbID;
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
      .then(response => {
        return response.json();
      })
      .then(searchParsed => {
        let resultContent = '';
        resultContent += `<div class="card" style="width: 18rem;"> <img src="${searchParsed.Poster}" class="card-img-top" alt="${searchParsed.Title}">
              <div class="card-body"> <h5 class="card-title">${searchParsed.Title}</h5> 
              <p class="card-text">${searchParsed.Plot}</p> <button id=${searchParsed.imdbID} class="btnMovie btn-darkMovie" onclick= fetchingData.showModalBio()>Directora: ${searchParsed.Director}</button> </div> </div>`;
        handlingDOM.fillingCards().innerHTML = resultContent;
      });


  },

  cleanAndShowAll: () => {
    handlingDOM.fillingCards().innerHTML = '';
    fetchingData.searchInWomenDirectors();

  },

  showModalBio: ()=>{
    let modalContent = '';
    let directorClicked = event.srcElement.id;
    let name ='';
    let img ='';
    let shortBio = '';
    let officialPage = '';
    for(let w=0; w<(womenDirectors.directors).length; w++){
      if(womenDirectors.directors[w].imdbID == directorClicked){
        name = womenDirectors.directors[w].name;
        img = womenDirectors.directors[w].image;
        shortBio = womenDirectors.directors[w].bio;
        officialPage = womenDirectors.directors[w].www;
      }
    }
    console.log(directorClicked);
    
    modalContent += 
    `<div class="modalIn" id="directorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">${name}</h5>
            <button type="button" id="closeModalBtn" class="close" data-dismiss="modal" aria-label="Close" onclick=handlingDOM.closeModal()>
              <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div data="modal" class="modal-body"><img src="${img}" class="img-fluid"><p>${shortBio}</p><p><a href="${officialPage}" target="_blank">${officialPage}</a></p></div>`;
          document.getElementById('modalCanvas').innerHTML=modalContent;

  }

};
window.fetchingData = fetchingData;