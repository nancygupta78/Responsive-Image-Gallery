const images=[
" ./car/car.jpg", 
    "./car/pexels-austin-russell-686677111-30570357.jpg", 
    "./car/pexels-dbaler-11960288.jpg" ,
    "./car/pexels-introspectivedsgn-28906423.jpg", 
   "./car/pexels-kouki-walim-1227247-37426530.jpg",
   "./car/pexels-maja-kos-1139601728-20943730.jpg" ,
    "./car/pexels-mikey-white-922915629-19976444.jpg",
    "./car/pexels-odobesku-9018708.jpg" ,
    "./car/pexels-sefa-demirtas-2152709769-36352986.jpg", 
    "./car/pexels-shantanu09-8975647.jpg" ,
    "./car/pexels-snnematic-18412480.jpg",
    "./car/pexels-theshuttervision-12682786.jpg",
    "./car/pexels-wavyvisuals-377312923-19273958.jpg",
     "./car/pexels-zakhar-18397478.jpg",
    " ./car/pexels-zeko-340144-5726879.jpg", 

    "./bike/pexels-abhinav-8532352.jpg", 
    "./bike/pexels-benprater-37721365.jpg",
   "./bike/pexels-cigdem-bilgin-2154409770-33233632.jpg",
     "./bike/pexels-francesco-querente-2160182055-36984177.jpg",
    "./bike/pexels-jisso-heby-597210750-22845706.jpg",
    "./bike/pexels-memet-oz-296480690-31870162.jpg",
   "./bike/pexels-nandu-vasudevan-167142178-10933042.jpg",
    "./bike/pexels-nguy-n-bin-exciter-2161855701-37811560.jpg" ,
    "./bike/pexels-oneilgonzales-14407485.jpg", 
     "./bike/pexels-shivanshu-sharma-1351241-12714382.jpg",
   "./bike/pexels-shndgd-36990109.jpg",
    "./bike/pexels-suhashanjar-30275560.jpg",
    "./bike/pexels-suhashanjar-30858871.jpg", 
    "./bike/pexelsclass-willians-huerta-2157111846-36429478.jpg",

    "./monuments/monument.jpg" ,
    "./monuments/monument2.jpg" ,
    "./monuments/pexels-alen-joe-chacko-274124557-27316284.jpg",
     "./monuments/pexels-archaic-ki-d-3378812-5476018.jpg",  
    "./monuments/pexels-ayush-800654-5076126.jpg" ,
    "./monuments/pexels-isaacgraphy-17906713.jpg",
     "./monuments/pexels-kokoko-cookiez-349384071-14815156.jpg" , 
    "./monuments/pexels-mananmaheshwari-37069496.jpg" ,
    "./monuments/pexels-molnartamasphotography-12467056.jpg",
     "./monuments/pexels-primitive-spaces-2147980412-35822735.jpg", 
    "./monuments/pexels-setu-r8-8816365.jpg", 
  "./monuments/pexels-tshakeb-15687156.jpg",
     "./monuments/pexels-ulrick-t-15393862.jpg",
    "./monuments/pexels-you-know-what-blog-822152095-20876797.jpg" ,  
];

let current=0;

function openLightbox(index){
current=index;
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=images[current];
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

function changeImage(direction){

current=current+direction;

if(current<0)
current=images.length-1;

if(current>=images.length)
current=0;

document.getElementById("lightbox-img").src=images[current];

}

function filterImages(category){

let imgs=document.querySelectorAll(".gallery img");

imgs.forEach(img=>{

if(category=="all"){
img.style.display="block";
}
else{
if(img.classList.contains(category))
img.style.display="block";
else
img.style.display="none";
}

});

}