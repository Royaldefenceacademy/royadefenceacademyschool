async function fetchSliderImages() {
    try {
        // Example API URL (replace with your actual API endpoint)
        const response = await fetch('http://3.110.189.42:8000/topscrollers/', {
            method: 'GET', // Explicitly use the GET method
        });

        // Check if the response is okay (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const images = await response.json();

        // Select the carousel content element
        const carouselContent = document.getElementById('carouselContent');

        // Loop through images and add them to the carousel
        images.forEach((image, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselContent.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="${image.Image}" class="d-block w-100" alt="${image.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${image.title}</h5>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

// Initialize the carousel with fetched images
fetchSliderImages();
 
window.addEventListener('scroll',scrollONevent)

function scrollONevent (){
    let navigation = document.getElementById('nav')
    let content = document.getElementById('content')
    let screen = window.scrollY
    if(screen > 0 ){
        navigation.style.position = "fixed";
        navigation.style.width="100%"
        content.style.display="none"
        console.log(navigation.style.position)
    }
    else{
        navigation.style.position = "static";
        navigation.style.width="100%"
        content.style.display="block"
        console.log(navigation.style.position)
    }
}