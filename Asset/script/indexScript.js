// Content Movie 1

const movieCard = document.getElementById('movieCard');

const movieData = [
        {
            moviePict : 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
            name : 'Spider-Man: Homecoming',
            genre : 'Action, Adventure, Science Fiction',
            link : '/movieDetails.html'
        },
        {
            moviePict: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg',
            name: 'One Piece Film Red',
            genre: 'Animation, Adventure, Action, Fantasy',
            link: '/movieDetails.html'
        },
        {
            moviePict: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
            name: 'Black Panther: Wakanda Forever',
            genre: 'Action, Adventure, Science Fiction',
            link: '/movieDetails.html'
        },
        {
            moviePict: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg',
            name: 'Guardian Of The Galaxy',
            genre: 'Adventure, Action, Science Fiction',
            link: '/movieDetails.html'
        },
        {
            moviePict: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
            name: 'Avengers: Endgame',
            genre: 'Adventure, Science Fiction, Action',
            link: '/movieDetails.html'
        }
    ]

movieData.forEach(el => {
    const figureParent = document.createElement('figure');
    const picture = document.createElement('img');
    const movieInfo = document.createElement('div');
    const movieTitle = document.createElement('figcaption');
    const movieGenre = document.createElement('figcaption');
    const linkDetail = document.createElement('a');
    const btnCard = document.createElement('button');
    
    movieInfo.className = 'caption'
    movieTitle.className = 'movieTitle';
    movieTitle.innerText = el.name;
    movieGenre.className = 'movieGenre';
    movieGenre.innerText = el.genre;
    btnCard.className = 'btn-detail';
    linkDetail.href = el.link;
    picture.src = el.moviePict;
    picture.className = 'imgMovieCard'
    btnCard.innerText = 'Details';
    btnCard.type = 'submit';
    figureParent.appendChild(picture);
    movieInfo.appendChild(movieTitle);
    movieInfo.appendChild(movieGenre);
    figureParent.appendChild(movieInfo);
    movieCard.appendChild(figureParent);
    movieInfo.appendChild(linkDetail);
    linkDetail.appendChild(btnCard);
    
    figureParent.addEventListener('mouseenter', () => {
        figureParent.target.style.height = '30em';
    })
    figureParent.addEventListener('mouseleave', () => {
        figureParent.style.height = '19em';
    })

    console.log(figureParent);
});



// Content Movie 2

const movieCard2 = document.getElementById('card2');
movieCard2.className = 'card2'


const movieItem = [
    {
        moviePict: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
        title : 'Spider-Man: Homecoming',
        genre : 'Action, Adventure, Science Fiction',
        link : '/movieDetails.html'
    },
    {
        moviePict: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg',
        title: 'One Piece Film Red',
        genre: 'Animation, Adventure, Action, Fantasy',
        link: '/movieDetails.html'
    },
    {
        moviePict: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
        title: 'Black Panther: Wakanda Forever',
        genre: 'Action, Adventure, Science Fiction',
        link: '/movieDetails.html'
    },
    {
        moviePict: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
        title: 'Avengers: Endgame',
        genre: 'Adventure, Science Fiction, Action',
        link: '/movieDetails.html'
    },
    {
        moviePict: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg',
        title: 'Guardian Of The Galaxy',
        genre: 'Adventure, Action, Science Fiction',
        link: '/movieDetails.html'
    }
]



movieItem.forEach(el => {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    const figureCaption = document.createElement('figcaption');
    const figureCaption2 = document.createElement('figcaption');
    const link2 = document.createElement('a');
    const btnDetail = document.createElement('button');
    const caption = document.createElement('div');
    
    figureCaption.className = 'movieTitle';
    figureCaption2.className = 'movieGenre';
    btnDetail.className = 'btn-detail';
    btnDetail.innerText = 'Detail'
    btnDetail.type = 'submit'
    image.className = 'imgMovieCard'

    figure.appendChild(image);
    figure.appendChild(caption)
    caption.appendChild(figureCaption);
    caption.appendChild(figureCaption2);
    caption.appendChild(link2);
    link2.appendChild(btnDetail);
    movieCard2.appendChild(figure);
    
    image.src = el.moviePict;
    figureCaption.innerText = el.title;
    figureCaption2.innerText = el.genre;
    link2.href = el.link;
});