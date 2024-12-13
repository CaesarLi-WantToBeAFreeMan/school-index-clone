const slideshows = document.getElementsByClassName("slideshow"),
      dots = document.getElementsByClassName("dots"),
      campusNewsButton = document.getElementById("campus-news-button"),
      campusNews = document.getElementById("campus-news"),
      departmentStoryButton = document.getElementById("department-story-button"),
      departmentStory = document.getElementById("department-story"),
      previousImageButton = document.getElementById("previous-image-button"),
      nextImageButton = document.getElementById("next-image-button"),
      image = document.getElementsByClassName("accelerate-images"),
      links = document.getElementsByClassName("link-option-containers");

let imageIndex = 0;
showSlide(0);
dots [0].style.backgroundColor = "cyan";

function showSlide(number){
    for(let i = 0; i < 5; i++)
        slideshows [i].style.display = "none";
    slideshows [number].style.display = "block";
}

for(let i = 0; i < dots.length; i++)
    dots [i].addEventListener("click", () =>{
        for(let j = 0; j < dots.length; j++)
            dots [j].style.backgroundColor = "silver";
        dots [i].style.backgroundColor = "cyan";
        showSlide(i);
    });

campusNewsButton.addEventListener("mouseover", () =>{
    campusNewsButton.style.backgroundColor = "blue";
    departmentStoryButton.style.background = "transparent";
    campusNews.style.display = "block";
    departmentStory.style.display = "none";
});

departmentStoryButton.addEventListener("mouseover", () =>{
    departmentStoryButton.style.backgroundColor = "blue";
    campusNewsButton.style.background = "transparent";
    campusNews.style.display = "none";
    departmentStory.style.display = "block";
});

previousImageButton.addEventListener("click", () =>{
    if(--imageIndex < 0)
        imageIndex = 7;
    for(let i = 0; i < image.length; i++){
        image [i].style.transform = `translateX(-${imageIndex * 300}px)`;
    }
});

nextImageButton.addEventListener("click", () =>{
    if(++imageIndex > 7)
        imageIndex = 0;
    for(let i = 0; i < image.length; i++)
        image [i].style.transform = `translateX(-${imageIndex * 300}px)`;
});

for(let i = 0; i < links.length; i++)
    links [i].addEventListener("change", () =>{
        if(links [i].value)
            window.location.href = links [i].value;
        links [i].selectedIndex = 0;
    });