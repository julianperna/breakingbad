const inpSearch = document.getElementById('inp-search');
const salida = document.getElementById('salida');

window.addEventListener('load', () => {
    loader();
    fetchCharcters();
});

inpSearch.addEventListener('change', () => {
    let searchQuery = inpSearch.value;
    loader();
    fetchCharcters(searchQuery);
});

function loader(){
    salida.innerHTML = '<div class="gif-spinner mx-auto"><img src="https://i.pinimg.com/originals/90/80/60/9080607321ab98fa3e70dd24b2513a20.gif"></img></div>'
}

async function fetchCharcters(a){
    let res;

    if(a){
        res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${a}`);
    }else{
        res = await fetch('https://www.breakingbadapi.com/api/characters');
    }

    let results = await res.json();

    salida.innerHTML = "";

    results.map(result => {
        const htmlString = `<img src="${result.img}" class="img">
            <div class="info-display">
                <h5>Portrayed: ${result.portrayed}</h5>
                <hr>
                <h6>Name: <span>${result.name}</span></h6>
                <h6>Nickname: <span>${result.nickname}</span></h6>
                <h6>Category: <span>${result.category}</span></h6>
                <h6>Status: <span>${result.status}</span></h6>
            </div>`;
    
    let salidaString = document.createElement('div');
    salidaString.classList.add('col-md-3', 'mb-3', 'img-info');
    salidaString.innerHTML = htmlString;
    salida.appendChild(salidaString);
    });
}