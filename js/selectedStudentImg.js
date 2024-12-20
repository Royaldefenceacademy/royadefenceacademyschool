let insetGallery = document.getElementById('insertStudent');
        let loadingIndicator = document.getElementById('loading');
        let galleryContainer = document.getElementById('gallery');
let imageLinkArray = ['all india sainik school entrance exam aissee 2022 Abhishek Kumar  Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 anirudha singh Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 chanchal singh Royal Academy.png','all india sainik school entrance exam aissee 2022 chatanya mishra Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 dishant patil Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 Divyanshu  . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 harendra kumar.png','all india sainik school entrance exam aissee 2022 KARTIK  . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 Divyanshu  . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 prabhat kumar  Royal Defecne Academy.png.jpg','all india sainik school entrance exam aissee 2022 prakash singh . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 raghvendra raj Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 Rishabh verma . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 saina patil.png','all india sainik school entrance exam aissee 2022 vansh sharma royal academy.png','all india sainik school entrance exam aissee 2022 vishwajeet singh rathore  Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 yuvraj jadon  Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 vansh sharma royal academy.png']
let loadedImages = 0;

// imageLinkArray.forEach((src,index)=>{
//     insetGallery.innerHTML += ` 
//     <div class="col-md-2 mt-3 ">
//                     <img src="./images/${src}" alt="${src}" title="${src}" class="img-fluid rounded">
//                 </div>
// `}

// )

imageLinkArray.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = `./images/${src}`;
    img.alt = src;
    img.title = src;
    img.className = 'img-fluid rounded';
    img.onload = () => {
        loadedImages++;
        if (loadedImages === imageLinkArray.length) {
            // Hide the loading indicator and show the gallery
            loadingIndicator.style.display = 'none';
            galleryContainer.style.display = 'block';
        }
    };
    img.onerror = () => {
        loadedImages++;
        console.error(`Failed to load image: ${src}`);
        if (loadedImages === imageLinkArray.length) {
            loadingIndicator.style.display = 'none';
            galleryContainer.style.display = 'block';
        }
    };
    insetGallery.innerHTML += `
        <div class="col-md-2 mt-3">
            ${img.outerHTML}
        </div>
    `;
});