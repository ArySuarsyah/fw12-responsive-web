const list = document.getElementById('listMovie')
list.className = 'listMovie'



const getMovieData = fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0425e48e1b84cac8b5d27b8c9980a9ba&language=en-US&page=1');
const genreData = fetch('https://api.themoviedb.org/3/genre/list?api_key=0425e48e1b84cac8b5d27b8c9980a9ba')

const proses = async () => {
    const respons = await getMovieData;
    const data = await respons.json(); 
    //buatkan di sini resu mas.? bukan mas 
    const responsGenre = await genreData; //gitu yoi lanjut 
    const dataGenre = await responsGenre.json();
    console.log(dataGenre.genres);
    
    let movie = data.results
    movie.forEach((el) => {
        

        const figureViewAll = document.createElement(`figure`);
        list.appendChild(figureViewAll);
        
        const picture = document.createElement('img');
        figureViewAll.appendChild(picture);
        picture.src =`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}` // poster
        
        
        const divInfo = document.createElement('div');
        figureViewAll.appendChild(divInfo);
        
        
        const title = document.createElement('figcaption');
        title.className = 'movieTitle';
        title.innerText = el.title; //title
        
        divInfo.appendChild(title);
        const genre = document.createElement('figcaption');
        genre.className = 'movieGenre';
        // genre.innerText = res.genres; //id Genre
        
                for (let i = 0; i < el.genre_ids.length; i++) {
                    for (let j = 0; j < dataGenre.genres.length; j++) {
                        if (el.genre_ids[i] == dataGenre.genres[j].id) {
                            genre.innerText += ` ${dataGenre.genres[j].name} `
                        }
                    }
                } 
        divInfo.appendChild(genre);
        
        
        const linkDetail = document.createElement('a');
        divInfo.appendChild(linkDetail);
        linkDetail.href = 'movieDetails.html';


        const btnCard = document.createElement('button');
        linkDetail.appendChild(btnCard);
        btnCard.className = 'btn-detail';
        btnCard.innerText = 'Details';
        btnCard.type = 'submit';
        
    });
};
    
    
    
    
    
    proses()