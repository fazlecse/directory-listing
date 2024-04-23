
// Preloader area
const preloader = document.getElementById("preloader");
const preloaderFunction = () => {
    preloader.style.display = "none";
};

// toggleSideMenu start
const toggleSideMenu = () => {
    document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end

// add bg to nav
const header = document.querySelector('nav');
window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY >= 100);
});

$(document).ready(function () {

    $(function (e) {
        "use strict";
        // Testimonial section start
        // Owl carousel 
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 10,
            nav: false,
            dots: true,
            // rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        // Brands carousel
        $('.product-slider').owlCarousel({
            loop: true,
            // autoplay: true,
            margin: 10,
            nav: false,
            // dots: false,
            // rtl: true,
            responsive: {
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        // Category-slider carousel
        $('.category-slider').owlCarousel({
            loop: true,
            // autoplay: true,
            margin: 20,
            nav: false,
            // dots: false,
            // rtl: true,
            responsive: {
                0: {
                    items: 1,
                },
                350: {
                    items: 2,
                },
                576: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });
    });


    // cmn select2 start
    $('.cmn-select2').select2();
    // cmn select2 end

    // cmn-select2 with image start
    // $(document).ready(function () {
    // });
    $('.cmn-select2-image').select2({
        templateResult: formatState,
        templateSelection: formatState
    });
    // select2 function
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }

        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img class="img-flag" /> <span></span></span>'
        );

        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

        return $state;
    };
    // cmn-select2 with image end
    // Cmn select2 tags start
    $(".cmn-select2-tags").select2({
        tags: true
    });
    // Cmn select2 tags end



    // Payment method with image2 start
    $(document).ready(function () {
        $('.payment-method-select2-image').select2({
            templateResult: paymentMethod,
            templateSelection: paymentMethod
        });
    });
    // select2 function
    function paymentMethod(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img/gateway";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.jpg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function paymentMethod(state) {
        if (!state.id) {
            return state.text;
        }

        var baseUrl = "assets/img/gateway";
        var $state = $(
            '<span><img class="img-flag" /> <span></span></span>'
        );

        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".jpg");

        return $state;
    };
    // Payment method with image2 start

    // cmn select2 modal start
    $(".modal-select").select2({
        dropdownParent: $("#formModal"),
    });
    // cmn select2 modal start


    // Fancybox carousel section start
    // Initialise Carousel
    const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
        Dots: false,
    });

    // Thumbnails
    const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
        Sync: {
            target: mainCarousel,
            friction: 0,
        },
        Dots: false,
        Navigation: false,
        center: true,
        slidesPerPage: 1,
        infinite: true,
    });

    // Customize Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
            on: {
                change: (that) => {
                    mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                        friction: 0,
                    });
                },
            },
        },
    });
    // Fancybox carousel section end


});


// input file preview
const previewImage = (id) => {
    document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Copy text start
function copyTextFunc() {
    // get the container
    const element = document.querySelector('.docs-code');
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);

    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
}
// Copy text end

// Social share start
$("#shareBlock").socialSharingPlugin({
    urlShare: window.location.href,
    description: $("meta[name=description]").attr("content"),
    title: $("title").text(),
});
// Social share end




// Nice select start
$('.nice-select').niceSelect();
// Nice select end

// Range area start
$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100,
    from: 800,
    to: 500,
    grid: true
});
// Range area end
// International Telephone Input start
const input = document.querySelector("#telephone");
window.intlTelInput(input, {
    initialCountry: "bd",
    separateDialCode: true,
});
// International Telephone Input end
// Dark theme start
const toggleBtn = document.getElementById("toggle-btn");
const body = document.querySelector("body");
toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("dark-theme", 1);
    } else {
        localStorage.setItem("dark-theme", 0);
    }
    setTheme();
});

function setTheme() {
    const isDarkTheme = localStorage.getItem("dark-theme");
    if (isDarkTheme == 1) {
        document.querySelector('body').classList.add('dark-theme');
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
    } else {
        document.querySelector('body').classList.remove('dark-theme');
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";
    }
}
setTheme();
// Dark theme end



// Dropdown select with Filter start
const searchBox = document.querySelector('.search-box');
const selectOption = document.querySelector('.select-option');
const soValue = document.querySelector('.soValue');
const optionSearch = document.querySelector('.optionSearch');
const options = document.querySelector('.options');
const optionsList = document.querySelectorAll('.options li');

selectOption.addEventListener('click', function () {
   searchBox.classList.toggle('active');
});

optionsList.forEach(function (optionsListSingle) {
   optionsListSingle.addEventListener('click', function () {
      const text = optionsListSingle.querySelector(".country");
      const textContent = text.textContent;
      soValue.value = textContent;
      searchBox.classList.remove('active');
   });
});

optionSearch.addEventListener('keyup', function () {
   var filter, li, i, textValue;
   filter = optionSearch.value.toUpperCase();
   li = options.getElementsByTagName('li');
   for (i = 0; i < li.length; i++) {
      const liCount = li[i];
      textValue = liCount.textContent || liCount.innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
         li[i].style.display = '';
      } else {
         li[i].style.display = 'none';
      }
   }
});
// Dropdown select with Filter start