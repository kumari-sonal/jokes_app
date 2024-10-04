document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = document.getElementById('query').value;

    const response = await fetch('http://localhost:3000/api/search-jokes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    });
    
    const jokes = await response.json();
    const jokesContainer = document.getElementById('jokesContainer');
    jokesContainer.innerHTML = '';

    jokes.forEach(joke => {
        const jokeCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${joke.image_url}" class="card-img-top" alt="Joke Image">
                    <div class="card-body">
                        <p class="card-text">${joke.joke_text}</p>
                        <button class="btn btn-success" onclick="saveFavourite('${joke.joke_id}', '${joke.joke_text}', '${joke.image_url}')">Favourite</button>
                    </div>
                </div>
            </div>
        `;
        jokesContainer.innerHTML += jokeCard;
    });
});

async function saveFavourite(joke_id, joke_text, image_url) {
    await fetch('http://localhost:3000/api/favourite-joke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ joke_id, joke_text, image_url })
    });
    alert('Joke added to favourites!');
}
