window.handlingDOM = {
    catchingSearchTerm : () =>{
        let searchTerm = document.getElementById('searchInputBox').value;
        return searchTerm;
    },

    catchingIdToSearch : () =>{
        let searchTerm = document.getElementById('searchIdBox').value;
        return searchTerm;
    },

    

};

window.handlingDOM = handlingDOM;