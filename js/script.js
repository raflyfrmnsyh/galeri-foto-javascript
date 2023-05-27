let numberNow = 0 ;
const prevBtn = document.querySelector('.btn-prev');
const img = document.querySelector('.box__image-img');
const nextBtn = document.querySelector('.btn-next');
const Indicator = document.querySelectorAll('.indicator__link');

// console.log(Indicator);

for (var i = 0; i < Indicator.length; i++) {
    Indicator[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}

function changePhoto(number)
{
    const src = `img/${number}.jpg`;
    img.src = src;
    return false;
}

prevBtn.addEventListener('click', () => {

    numberNow = numberNow - 1 ;
    
    if(numberNow < 1 ){
        numberNow = 3 ;
    }
    const src = `img/${numberNow}.jpg`;
    img.src = src;
    return false;
});

nextBtn.addEventListener('click', () => {

    numberNow = numberNow + 1 ;
    
    if(numberNow > 3 ){
        numberNow = 1 ;
    }

    const src = `img/${numberNow}.jpg`;
    img.src = src;
    return false;
});