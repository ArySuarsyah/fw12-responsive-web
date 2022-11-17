const list = document.getElementById('listMovie')
list.className = 'listMovie'



const getMovieData = fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0425e48e1b84cac8b5d27b8c9980a9ba&language=en-US&page=1');

const proses = async () => {
    const respons = await getMovieData;
    const data = await respons.json();
    list.innerHTML = data.poster
    
    let movie = data.results
    console.log(movie);
    movie.forEach((el) => {
        const figureViewAll = document.createElement(`figure`);
        list.appendChild(figureViewAll);
        
        const picture = document.createElement('img');
        figureViewAll.appendChild(picture);
        // picture.src = el.poster;
        
        
        const divInfo = document.createElement('div');
        figureViewAll.appendChild(divInfo);
        
        
        const title = document.createElement('figcaption');
        title.className = 'movieTitle';
        title.innerText = movie.title
        
        divInfo.appendChild(title);
        const genre = document.createElement('figcaption');
        genre.className = 'movieGenre';
        genre.innerText = el.genre;
        divInfo.appendChild(genre);
        
        
        const linkDetail = document.createElement('a');
        divInfo.appendChild(linkDetail);
        linkDetail.href = el.link;


        const btnCard = document.createElement('button');
        linkDetail.appendChild(btnCard);
        btnCard.className = 'btn-detail';
        btnCard.innerText = 'Details';
        btnCard.type = 'submit';
        
    });
};
    
    
    
    
    
    proses()