let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);//بنزود واحد لما ندوس علي التالي 
}

function showSlides(n) {
    let i,slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {
        slideIndex = 1; //عشان تيجي لأخر الصور وتبدأ من اول وجديد
    }

    if (n < 1) {
        slideIndex = slides.length; //عشان تيجي لأول الصور وتبدأ من جديد
    }

    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //نخلي الصور تظهر لما ندوس ع ال بعده وتخفي الصوره ال قبلها
    }

    slides[slideIndex-1].style.display = "block"; //نخلي الصور تظهر ف الاول
}