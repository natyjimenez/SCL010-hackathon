
    catchingIdToSearch : () =>{
        let searchTerm = document.getElementById('searchIdBox').value;
        return searchTerm;
    },

    fillingCards: () =>{
        let canvas = document.getElementById('searchResultsBox');
        return canvas;

    }, 

    onlyWomenDataSearch :()=>{
        let directorName = document.getElementById('searchOnlyWmBox').value;
        console.log(directorName.toLowerCase());
        return directorName;
    },

    cleanInputs : ()=>{
    document.getElementById('searchOnlyWmBox').value = '';
    document.getElementById('searchInputBox').value = '';
    document.getElementById('searchIdBox').value = '';

    }
        
        
    

};

window.handlingDOM = handlingDOM;

