const form = document.querySelector("#form");
const input = document.querySelector("input");
form.addEventListener('submit', async function(e) {

    e.preventDefault();
    const TvShow = form.elements.query.value;
    const config = { params: { q: TvShow } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    showImg(res.data);
    rst();


})
const showImg = (shows) => {
    for (let result of shows) {
        const img = document.createElement("img");
        if (result.show.image) {
            img.src = result.show.image.medium;
            document.body.append(img);

        }

    }

}

function rst() {
    form.elements.query.value = '';
}