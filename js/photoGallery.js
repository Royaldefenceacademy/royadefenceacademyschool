let insetGallery = document.getElementById('insertGallery')


let imageLinkArray = ['all india sainik school entrance exam aissee 2022 Abhishek Kumar  Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 anirudha singh Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 chanchal singh Royal Academy.png','all india sainik school entrance exam aissee 2022 chatanya mishra Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 dishant patil Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 Divyanshu  . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 harendra kumar.png','all india sainik school entrance exam aissee 2022 KARTIK  . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 Divyanshu  . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 prabhat kumar  Royal Defecne Academy.png.jpg','all india sainik school entrance exam aissee 2022 prakash singh . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 raghvendra raj Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 Rishabh verma . Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 saina patil.png','all india sainik school entrance exam aissee 2022 vansh sharma royal academy.png','all india sainik school entrance exam aissee 2022 vishwajeet singh rathore  Royal Defecne Academy.png','all india sainik school entrance exam aissee 2022 yuvraj jadon  Royal Defecne Academy.png','ALL INDIA SAINIK SCHOOLS ENTRANCE EXAM AISSEE - AISSEE - 2022_ India Panshul.png','ALL INDIA SAINIK SCHOOLS ENTRANCE EXAM AISSEE - AISSEE - 2022_ India PARAS KUMAR.png','ALL INDIA SAINIK SCHOOLS ENTRANCE EXAM AISSEE - AISSEE - 2022_ India prabhat gupta Royal Academy.png','ALL INDIA SAINIK SCHOOLS ENTRANCE EXAM AISSEE - AISSEE - 2022_ India shourya sevta Royal Academy.png','anant-kumar selection in rms chali.jpeg','anish gaur selection in rms chail.jpeg','bhanu partap selection in sainik school.jpeg','chandra prakash yadav selection in RIMC.jpeg','Dhuruv Choudhary selection in rms-ajmer.jpeg','gaurav selection in sainik school rewari.jpeg','pankaj sanfwan selection.jpeg','pawan vannur selection.jpeg','RASHTRIYA MILITARY SCHOOL COACHING ROYAL DEFENCE ACADEMY JAIPUR  8769422006.png']


imageLinkArray.forEach((src,index)=>{
    insetGallery.innerHTML += ` 
    <div class="col-md-4 mt-3">
    <a href="./images/${src}" target="_blank">
        <img class="w-75" src="./images/${src}" alt="">
    </a>
</div>
`
console.log(src,index)
})