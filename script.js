let lastSort = {
    type: null,
    descending: false
};

const searchInput = document.getElementById("searchInput");

function filterMovies(query) {
    const movies = document.querySelectorAll(".movie");
    const lowerQuery = query.toLowerCase();

    movies.forEach(movie => {
        const title = movie.querySelector("h1").textContent.toLowerCase();

        if (title.includes(lowerQuery)) {
            movie.style.display = "block"; // show
        } else {
            movie.style.display = "none"; // hide
        }
    });
}

async function fetchMovieList(sortType) {
    const res = await fetch("files/text/movies.txt");
    const text = await res.text();
    const movies = text.split("\n").map(m => m.trim()).filter(Boolean);

    const scoreThing = await fetch("files/text/scores.txt");
    const scoresText = await scoreThing.text();
    const scoreMovies = scoresText.split("\n");

    const moviePromises = movies.map((movie, i) => {
        const [title, year] = movie.split(", ");
        return fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&y=${year}&apikey=thewdb`)
        .then(r => r.json())
        .then(data => ({ data, score: scoreMovies[i], index: i }));
    });

    const movieDataArray = await Promise.all(moviePromises);

    // Determine if we should reverse
    if (lastSort.type === sortType) {
        lastSort.descending = !lastSort.descending;
    } else {
        lastSort.descending = false; // default order first time
    }
    lastSort.type = sortType;

    // Sorting
    if (sortType === "score") {
        movieDataArray.sort(({ score: a }, { score: b }) => {
        const [aPatriko, aOskaro] = a.split(", ").map(Number);
        const [bPatriko, bOskaro] = b.split(", ").map(Number);
        const aAvg = (aPatriko + aOskaro) / 2;
        const bAvg = (bPatriko + bOskaro) / 2;
        return bAvg - aAvg;
        });
    } else if (sortType === "oskaro") {
        movieDataArray.sort(({ score: a }, { score: b }) => {
        const [, aOskaro] = a.split(", ").map(Number);
        const [, bOskaro] = b.split(", ").map(Number);
        return bOskaro - aOskaro;
        });
    } else if (sortType === "patriko") {
        movieDataArray.sort(({ score: a }, { score: b }) => {
        const [aPatriko] = a.split(", ").map(Number);
        const [bPatriko] = b.split(", ").map(Number);
        return bPatriko - aPatriko;
        });
    } else if (sortType === "imdb") {
        movieDataArray.sort(({ data: a }, { data: b }) => {
            const ratingA = parseFloat(a.imdbRating) || 0;
            const ratingB = parseFloat(b.imdbRating) || 0;
            return ratingB - ratingA; // highest first
        });
    } else if (sortType === "alphabetical") {
        movieDataArray.sort(({ data: a }, { data: b }) => a.Title.localeCompare(b.Title));
    } else if (sortType === "date") {
        movieDataArray.sort(({ data: a }, { data: b }) => {
            return Number(b.Year) - Number(a.Year);
        })
    } else {
        movieDataArray.sort((a, b) => a.index - b.index);
    }

    // Reverse if descending
    if (lastSort.descending) movieDataArray.reverse();

    // Clear and append
    const main = document.querySelector('main');
    main.innerHTML = "";
    movieDataArray.forEach(({ data, score }) => {
        const [patriko, oskaro] = score.split(", ").map(Number);
        const div = document.createElement("div");
        div.classList.add("movie");

        // Create <p> for scores
        const p = document.createElement("p");

        const oskaroSpan = document.createElement("span");
        oskaroSpan.textContent = `Oskaro: ${oskaro}`;
        if (oskaro === 10) oskaroSpan.classList.add("cinema");

        const patrikoSpan = document.createElement("span");
        patrikoSpan.textContent = ` Patriko: ${patriko}`;
        if (patriko === 10) patrikoSpan.classList.add("cinema");

        if(patriko == 10 && oskaro == 10){
        div.classList.add("absolute-cinema")
        }

        const avgSpan = document.createElement("span");
        avgSpan.textContent = ` (${((oskaro + patriko) / 2)})`;

        p.appendChild(oskaroSpan);
        p.appendChild(patrikoSpan);
        p.appendChild(avgSpan);

        // Build innerHTML for the rest

        div.innerHTML = `
            <h1>${data.Title}</h1>
            <img src="${data.Poster}">
            <p>${data.Released}</p>
            <a href="https://www.imdb.com/title/${data.imdbID}" target="_blank" class="score">
                <img src="https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_iPhone_retina_180x180._CB1582158069_.png">
                <b>${data.imdbRating}</b>
            </a>
        `;
        div.querySelector('b').style.color = `hsl(${(Number(div.querySelector('b').textContent) / 10).toFixed(2) * 120}, 100%, 50%)`

        // Insert score <p> before the IMDB link
        div.insertBefore(p, div.querySelector("a"));
        div.style.backgroundImage = `url(${data.Poster})`;
        main.appendChild(div);
    });
}

fetchMovieList("og");

searchInput.addEventListener("input", () => {
    filterMovies(searchInput.value);
});