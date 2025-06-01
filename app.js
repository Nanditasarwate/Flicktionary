        const form = document.querySelector('#searchForm');
        const resultsContainer = document.querySelector('#resultsContainer');
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
             resultsContainer.innerHTML = '';

            const userSearch = form.elements.query.value;
            form.elements.query.value = '';
            const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=b74ffc8d&s=${userSearch}`);
            makeImages(res.data.Search);
            console.log(res.data);
                                
        })      

        
    const makeImages = (movies) => {
        for (let result of movies ) {
        const img = document.createElement('IMG');
            img.src = result.Poster;
            resultsContainer.appendChild(img);
            }
    }
        
