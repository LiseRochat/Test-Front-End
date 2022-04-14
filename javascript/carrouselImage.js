const ImagesToSlide = ["images/background-01.jpg","images/background-02.jpg","images/background-03.jpg","images/background-04.jpg","images/background-05.jpg"]
let compteur = 0;

function slideDiapo(){
    const launchSlider = setInterval(function(){
        $('header').css('backgroundImage',"url("+ImagesToSlide[compteur]+")");
        compteur++;
        if(compteur == ImagesToSlide.length){
            
            compteur = 0;
        } 
    }, 1500)
}
slideDiapo();