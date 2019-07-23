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
      }
    
};
    window.fetchingData = fetchingData;




