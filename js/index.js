const URL_PATH = "https://api.themoviedb.org";
const API_KEY = "a8cf93c6f0b9e3d858ab64d82c2a51ab";

document.addEventListener("DOMContentLoaded", () => {
    renderNewsMovies();
    renderListMovies('popular', 'now-playing__list');
    renderListMovies('top_rated', 'top-rated-playing__list');
})

const getMovies = (type) => {
    const url = `${URL_PATH}/3/movie/${type}?api_key=${API_KEY}&language=es-ES&page=1`;

    return fetch(url)
        .then(response => response.json())
        .then(result => result.results)
        .catch(error => console.log(error))
}


const renderNewsMovies = async () => {
    const newMovies = await getMovies('now_playing');

    let html = '';

    newMovies.forEach((movie, index) => {
        const { id, title, overview, backdrop_path } = movie;
        const urlImage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
        const urlMovie = `../movie.html?id=${id}`;

    });
 

    document.getElementsByClassName('list-news-movies')[0].innerHTML = html;

}

const renderListMovies = async (type, classLoc) => {
    const movies = await getMovies(type);

    let html = "";
    movies.forEach((movie, index) => {
        const { id, title, poster_path } = movie;
        const movieCover = `https://image.tmdb.org/t/p/w500${poster_path}`;
        const urlMovie = `../pelis.html?id=${id}`;

        if (index < 5) {
            html += `
                <li class="list-group-item">
                    <img src="${movieCover}" alt="${title}">
                    <h3>${title}</h3>
                    <a href="${urlMovie}" class="btn btn-primary">Ver Más</a>
                </li>
            `;
        }
        document.getElementsByClassName(classLoc)[0].innerHTML = html;
    })

}