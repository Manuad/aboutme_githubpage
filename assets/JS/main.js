const myAccess = '563492ad6f91700001000001189ff3f514204c2e8051b9e549c2158b';
const url = 'https://api.pexels.com/v1/search?query=programmer&per_page=15';
const imageContainer = document.getElementById('imageContainer');

fetch(url, {
    headers: {
        Authorization: myAccess
    }
}).
    then (response => response.json()).
        then (data => {
            const arrayImages = data.photos.slice(0, 9);
            
            arrayImages.forEach(image => {
                const imageData = {
                    image: image.src.medium,
                    title: image.photographer
                }
                //role="link"
                const templateImage = `
                <div class="col mb-4">
                    <div class="card">
                        <img class="card-img-top" src='${imageData.image}' alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${imageData.title}</h5>
                            <hr/>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                `;
                imageContainer.innerHTML += templateImage;
            });
        });