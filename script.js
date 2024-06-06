let config = null;

async function getConfig(){
    let resp = await fetch('config.json');
    let data = await resp.json();
    config = data; // 2 properties 
}


window.onload =()=> {
    console.log('loaded');
    getConfig();

    async function getData(nr){

    }
}

let submitForm 