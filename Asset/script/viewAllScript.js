const list = document.getElementById('listMovie')
list.className = 'listMovie'



const getMovieData = fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0425e48e1b84cac8b5d27b8c9980a9ba&language=en-US&page=1');

const proses = async () => {
    const respons = await getMovieData;
    const data = await respons.json();
    list.innerHTML = data.original_title
    
};



data.forEach(el => {

    let figureViewAll = document.createElement(`figure`);
    const picture = document.createElement('img');
    const divInfo = document.createElement('div');
    const title = document.createElement('figcaption');
    const genre = document.createElement('figcaption');
    const linkDetail = document.createElement('a');
    const btnCard = document.createElement('button');
    
    title.className = 'movieTitle';
    title.innerText = data.original_title;
    genre.className = 'movieGenre';
    genre.innerText = el.genre;
    btnCard.className = 'btn-detail';
    linkDetail.href = el.link;
    picture.src = el.moviePict;
    btnCard.innerText = 'Details';
    btnCard.type = 'submit';
    figureViewAll.appendChild(picture);
    divInfo.appendChild(title);
    divInfo.appendChild(genre);
    figureViewAll.appendChild(divInfo);
    list.appendChild(figureViewAll);
    divInfo.appendChild(linkDetail);
    linkDetail.appendChild(btnCard);

});