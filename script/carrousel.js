(function(){
    console.log('debut carrousel');
    let elGalerie = document.querySelector('.galerie');
    let elGalerieImg = elGalerie.querySelectorAll('figure figure img');

    for (const img of elGalerieImg) {
        img.addEventListener('mousedown', function(){
            console.log(img.getAttribute('src'));
        }
        );
    }
})()