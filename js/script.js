

 
window.addEventListener('scroll',scrollONevent)

function scrollONevent (){
    let navigation = document.getElementById('nav')
    let content = document.getElementById('content')
    let screen = window.scrollY
    let width = window.screen.availWidth;
    if(width > 700){
        if(screen > 0 ){
            navigation.style.position = "fixed";
            navigation.style.width="100%"
            content.style.display="none"
            // console.log(navigation.style.position)
        }
        else{
            navigation.style.position = "static";
            navigation.style.width="100%"
            content.style.display="block"
            // console.log(navigation.style.position)
        }
    }
    
}
const shakeButton = document.getElementById('shakeButton');

function shakeButtonFunction() {
    shakeButton.style.animation = 'shakeDiagonal 0.5s ease-in-out';
    setTimeout(() => {
        shakeButton.style.animation = '';
    }, 500); // Reset animation after it finishes
}

// Shake every 3 seconds
setInterval(shakeButtonFunction, 2000);



