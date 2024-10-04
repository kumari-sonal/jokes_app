document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/favourites');
    const favourites = await response.json();
    
    const favouritesContainer = document.getElementById('favouritesContainer');
    favouritesContainer.innerHTML = '';

    favourites.forEach(joke => {
        const jokeCard = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${joke.image_url}" class="card-img-top" alt="Joke Image">
                    <div class="card-body">
                        <p class="card-text">${joke.joke_text}</p>
                    </div>
                </div>
            </div>
        `;
        favouritesContainer.innerHTML += jokeCard;
    });
});
