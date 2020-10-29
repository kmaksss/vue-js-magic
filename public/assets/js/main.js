// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);
// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

// height: 100vh
// height: calc(var(--vh, 1vh) * 100)

document.addEventListener("DOMContentLoaded", () => {

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  centerSlides: true,
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 55
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 3,
      spaceBetween: 55
    }
  }
})


$('.popup-content').magnificPopup({
    type: 'inline'
});

$('.close-popup').click(function(){
  $.magnificPopup.close()
})




        var $menu = $(".stick-menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 500 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    

const anchors = document.querySelectorAll('a[href*="#"]');
for( let anchor of anchors) {
  anchor.addEventListener("click", function(e){
    if(this.classList.contains('popup-content')) return;
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    const fixedHeaderHeight = 100;
    const top = document.querySelector('' + blockID).offsetTop - fixedHeaderHeight;
    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    })
  })
}






// var items = document.querySelector('#items');
// items.addEventListener('click', function(e){
// 	var element = e.target;
// 	if(element.classList.contains('btn')) {
// 		var elementContainer = element.closest('.items__item');

// 		var price = (elementContainer.querySelector('.items__item-price span')).textContent;
// 		var name = (elementContainer.querySelector('.items__item-title')).textContent;
// 		var size = (elementContainer.querySelector('.items__item-size')).textContent;    
// 		var fullName = name.trim() + ' ' + size.trim();
		
		
// 		var orderForm = document.querySelector('#modal-order');

// 		var inputSumm = orderForm.querySelector('.popup__summ');
// 		orderForm.querySelector('.popup__text-price').textContent = price;
// 		inputSumm.value = Number(price.replace(/\s+/g, ''));

// 		orderForm.querySelector('.popup__text-name').textContent = fullName;
// 		orderForm.querySelector('.popup__tovar').value = fullName;
// 	}
// })


var orderBtnSubmit = document.querySelector('.order-btn-submit');
orderBtnSubmit.addEventListener('click', function(e){
	var clientName = (document.querySelector('.clientName')).value;
	
	document.querySelector('.popup__title-iinerName').textContent = clientName
	
})


var aInput = document.querySelector('.promocode');
const a = 'KIDFISH2020'
aInput.oninput = function() {
	var price = document.querySelector('.popup__text-price');
	if(aInput.value === a) {
		var num = Number((price.textContent).replace(/\s+/g, ''))
		price.textContent = num - (num / 100 * 10);
		var inputSumm = document.querySelector('.popup__summ');
		inputSumm.value = num - (num / 100 * 10);
	}
}



$('.modal-order').submit(function(){
  if (document.value == '') {
    valid = false;
    return valid;
  }
  $.ajax({
    type: "POST",
    url: "assets/send.php",
    data: $(this).serialize()
  }).done(function() {
    $.magnificPopup.open({
      items: {
          src: '#modal-order-thanks'
      },
      type: 'inline'
        });
    $('#modal-order').find('input').val('');
    $(this).trigger('reset');
  });
  return false;
});


$('.landing-form').submit(function(){
  if (document.value == '') {
    valid = false;
    return valid;
  }
  $.ajax({
    type: "POST",
    url: "assets/send.php",
    data: $(this).serialize()
  }).done(function() {
    $.magnificPopup.open({
      items: {
          src: '#modal-thanks'
      },
      type: 'inline'
        });
    $('.landing-form').find('input').val('');
    $(this).trigger('reset');
  });
  return false;
});


});
