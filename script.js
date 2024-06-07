let config = null;

async function getConfig(){
    let resp = await fetch('dummy.json');
    let data = await resp.json();
    config = data; // 2 properties 
}


window.onload = ()=> {
    console.log('loaded');
    getConfig();  // of await config

    async function getData(searchparameter){
        let url = `${config.baseurl}t=${searchparameter}${config.apikey}`; 
            //(zelfde als hierboven)  let resp = await fetch(`${config.baseurl}s=${searchparameter}${config.apikey}`);
        let resp = await fetch(url);
        return await resp.json();
    }

    function showMovieOnCard(movie){
        //DOM Manipulation
        document.getElementById('movie-title').innerText = movie.Ttle;
        console.log(movie); 
        document.getElementById('movie-plot').innerText = movie.Plot;
        document.getElementById('movie-release').innerText = movie.Released;
        document.getElementById('movie-poster').setAttribute('src', movie-Poster);
        // Show the card
        document.getElementById('card').style.display = 'block'; 
    }

let submitForm = event=> {
    event.preventDefault();
    let value = document.getElementById('inputTitle').value;
    //search for the movie
    getData(value).then(result => {;  
        console.log(result);
        showMovieOnCard(result);
    });
}

//event listener for the form
document.getElementById('searchform').addEventListener('submit',submitForm);

document.getElementById('card').style.display = 'none'; 
}