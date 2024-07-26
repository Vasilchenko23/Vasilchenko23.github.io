// Validation
const email = document.querySelector(".newsletter__email");
const icon1 = document.querySelector(".newsletter__icons");
const btn = document.querySelector(".newsletter__btn");
let redExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


email.addEventListener("keyup", function(e){
    if(email.value.match(redExp)){
        email.style.color = "#172432"
        email.style.background = "#e8f0fe"
        email.style.borderColor = "#e8f0fe"
        icon1.style.display = "none"
    }else{
        email.style.color = "#e74c3c"
        email.style.background = "#FFE8D4"
        email.style.borderColor = "#e74c3c"
        icon1.style.cssText = `
            display: flex;
            justify-content: space-around;
            align-items: center;        `
    }
    if(email.value == ""){
        email.style.borderColor = "lightgrey"
        email.style.color = "#FF7757"
        icon1.style.display = "none"
    }
});


// Slider

const destinations = document.querySelector(".destinations__content")
const destinationsFirstImg = destinations.querySelectorAll("img")[0];
const destinationsBtn = document.querySelectorAll(".destinations .section__shev")

console.log(destinationsFirstImg)


destinationsBtn.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = destinationsFirstImg.clientWidth + 35 
        if(icon.id  == "destinations__left" ){
            destinations.scrollLeft -= firstImgWidth
        }else{
            destinations.scrollLeft += firstImgWidth
        }
        
    })
});


const gallery = document.querySelector(".gallery__item")
const galleryFirstImg = gallery.querySelectorAll("img")[0];
const galleryBtn = document.querySelectorAll(".gallery .section__shev")

console.log(galleryFirstImg)


galleryBtn.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = galleryFirstImg.clientWidth + 35 
        if(icon.id  == "gallery__left" ){
            gallery.scrollLeft -= firstImgWidth
        }else{
            gallery.scrollLeft += firstImgWidth
        }
        
    })
});

// Scrolling

const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


window.onload = function(){
    let preloader = document.getElementById('preload');
    preloader.style.display = 'none';
};



const goTopBtn = document.querySelector(".go-top");

goTopBtn.addEventListener("click", goTop);

window.addEventListener("scroll", trackScroll);

function trackScroll() {
   const offset = window.pageYOffset;
   const coords = document.documentElement.clientHeight;
   if (offset > coords) {
    goTopBtn.classList.add("go-top--show");
   } else {
    goTopBtn.classList.remove("go-top--show");
   }
}

function goTop() {
    if (window.pageYOffset > 0){
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}




document.addEventListener('DOMContentLoaded', function() {
    fetch('///json/file.json')
        .then(response => response.json())
        .then(data => {
            const plannersContainer = document.getElementById('planners');

            data.trip.planners.planners__item.forEach(item => {
                const plannersItem = document.createElement('div');
                plannersItem.classList.add('planners__item');

                const img = document.createElement('img');
                img.classList.add('gallery__img');
                img.src = item.img.src;
                img.alt = item.img.alt;
                plannersItem.appendChild(img);

                const content = document.createElement('div');
                content.classList.add('planners__content');

                const price = document.createElement('div');
                price.classList.add('planners__price');
                price.innerHTML = `<div>${item.planners__content.planners__price.type}</div><div>${item.planners__content.planners__price.price}</div>`;
                content.appendChild(price);

                const city = document.createElement('div');
                city.classList.add('planners__city');
                city.textContent = item.planners__content.planners__city.text;
                content.appendChild(city);

                const rating = document.createElement('div');
                rating.classList.add('planners__rating');
                let starsHTML = '';
                for (let i = 0; i < item.planners__content.planners__rating.stars; i++) {
                    starsHTML += '<a href="#"><i class="fa-solid fa-star"></i></a>';
                }
                rating.innerHTML = starsHTML;

                const date = document.createElement('div');
                date.classList.add('planners__date');
                date.textContent = item.planners__content.planners__rating.planners__date.text;
                rating.appendChild(date);

                content.appendChild(rating);
                plannersItem.appendChild(content);

                plannersContainer.appendChild(plannersItem);
            });
        })
        .catch(error => console.error('Error loading JSON data:', error));
});

