var overview = document.getElementById('btn-overview')
var keyfeature = document.getElementById('btn-key')
var syllabus = document.getElementById('btn-syllabus')
let overviewContet = document.getElementById('overview')
let keyFeatureContent = document.getElementById('keyfeature')
let syllabusContentClassIv = document.getElementById('classiv')
let syllabusContentClassIx = document.getElementById('classix')


overview.addEventListener('click',clickOnOverview)
keyfeature.addEventListener('click',clickOnKeyFeature)
syllabus.addEventListener('click',clickOnKeySyllabus)

function clickOnOverview(event){
    overviewContet.style.display = "block"
    keyFeatureContent.style.display = "none"
    syllabusContentClassIv.style.display = "none"
    syllabusContentClassIx.style.display = "none"
    overview.classList.add('sec-bg-color','text-white')
    keyfeature.classList.remove('sec-bg-color','text-white')
    syllabus.classList.remove('sec-bg-color','text-white')

}
function clickOnKeyFeature(event){
    overviewContet.style.display = "none"
    keyFeatureContent.style.display = "block"
    syllabusContentClassIv.style.display = "none"
    syllabusContentClassIx.style.display = "none"
    
    keyfeature.classList.add('sec-bg-color','text-white')
    overview.classList.remove('sec-bg-color','text-white')
    syllabus.classList.remove('sec-bg-color','text-white')

}
function clickOnKeySyllabus(event){
    overviewContet.style.display = "none"
    keyFeatureContent.style.display = "none"
    syllabusContentClassIv.style.display = "block"
    syllabusContentClassIx.style.display = "block"
    
    keyfeature.classList.remove('sec-bg-color','text-white')
    overview.classList.remove('sec-bg-color','text-white')
    syllabus.classList.add('sec-bg-color','text-white')

}

window.addEventListener('scroll', ()=>{
    const section = document.getElementById("courseInformation");
    const scrollY = window.scrollY;  // Get vertical scroll position

    // Set the maximum scroll limit (e.g., 300px)
    const maxScroll = 1250; 
        
    if (scrollY <= maxScroll) {
        section.style.transform = `translateY(${scrollY}px)`;
        // section.style.position='absolute'
    }
})