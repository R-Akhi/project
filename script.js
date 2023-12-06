
//  searchForm = document.querySelector('.search-form');


  function search()
   {
    searchForm = document.querySelector('.search-form');
    // document.getElementById("search-btn").innerHTML = "search";
    document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

  }

function shoppingcart()
{
  shoppingCart = document.querySelector('.shopping-cart');
  document.querySelector('#cart-btn').onclick = () =>
  {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
  }
}

function loginform()
{
  loginForm = document.querySelector('.login-form');
  document.querySelector('#login-btn').onclick = () =>
 {
  loginForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
 }

}
 
window.onscroll = () =>
{
  searchForm.classList.remove('active');
  shoppingcart.classList.remove('active');
  loginform.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
       loop:true,
       spaceBetween: 20,
       autoplay: {
           delay:7500,
           disableOnInteraction:false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });

    var swiper = new Swiper(".review-slider", {
           loop:true,
           spaceBetween: 20,
           autoplay: {
               delay:7500,
               disableOnInteraction:false,
          },

          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3,
            },
          },
        });



