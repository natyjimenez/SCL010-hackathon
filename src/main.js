
//encabezado debe estar
window.handlingDOM = {
    catchingSearchTerm : () =>{
        let searchTerm = document.getElementById('searchInputBox').value;
        return searchTerm;
    },


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

    },

    closeModal : () =>{
        document.getElementById('closeModalBtn').addEventListener('click', function(){
            document.getElementById('directorModal').style.display = "none";
        });
    }
        
        
    

};

window.handlingDOM = handlingDOM;

