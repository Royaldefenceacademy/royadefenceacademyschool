

 
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
        // console.log(navigation.style.position)
    }
}

