window.fetchingData = {
    searchByUserInput: () => {
        let userSearch = handlingDOM.catchingSearchTerm();
        fetch(`http://www.omdbapi.com/?s=${userSearch}&apikey=cf8ca967`)
          .then(function (response) {
            return response.json();
          })
          .then(function (userSearchParsed) {
            console.log(userSearchParsed);
            return userSearchParsed;
          });
    
      },
    
      searchByImdbId: () =>{
        let inputImdbId = handlingDOM.catchingIdToSearch();
        fetch(`http://www.omdbapi.com/?i=${inputImdbId}&apikey=cf8ca967`)
        .then(function (response) {
          return response.json();
        })
        .then(function (idResultParsed) {
          console.log(idResultParsed);
          return idResultParsed;
        });
      },

      searchInWomenDirectors: ()=>{
        for(let v=0; v<womenDirectors.directors.length; v++){
          let idToSearchInAPI = womenDirectors.directors[v].imdbID;
          fetch(`http://www.omdbapi.com/?i=${idToSearchInAPI}&apikey=cf8ca967`)
          .then(function (response) {
            return response.json();
          })
          .then(function (userSearchParsed) {
            console.log(userSearchParsed);
            return userSearchParsed;
          });
    

        }

      }
    
};
    window.fetchingData = fetchingData;




