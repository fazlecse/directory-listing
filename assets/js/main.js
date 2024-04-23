

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
    if ($("#mainCarousel").length) {
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
    }


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
if ($(".social-share-box").length) {
    $("#shareBlock").socialSharingPlugin({
        urlShare: window.location.href,
        description: $("meta[name=description]").attr("content"),
        title: $("title").text(),
    });
}
// Social share end




// Nice select start

if ($(".nice-select").length) {
    $('.nice-select').niceSelect();
}
// Nice select end

// Range area start
if ($(".js-range-slider").length) {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 800,
        to: 500,
        grid: true
    });
}
// Range area end
// International Telephone Input start
if ($("#telephone").length) {
    const input = document.querySelector("#telephone");
    window.intlTelInput(input, {
        initialCountry: "bd",
        separateDialCode: true,
    });
}
// International Telephone Input end


// // Dropdown select with Filter start
// const inputBox = document.querySelector('.input-box');
// // const soValue = document.querySelector('.soValue');
// const searchInput = document.querySelector('.search-input');
// const searchItem = document.querySelectorAll('.search-item');

// searchInput.addEventListener('click', function (event) {
//     inputBox.classList.add('active');
//     event.stopPropagation();
// });

// window.addEventListener('click', function () {
//     inputBox.classList.remove('active');
// });

// searchItem.forEach(function (searchItemSingle) {
//     searchItemSingle.addEventListener('click', function () {
//         const text = searchItemSingle.querySelector(".title");
//         const textContent = text.textContent;
//         searchInput.value = textContent;
//         inputBox.classList.remove('active');
//     });
// });

function handleSelect(inputBox, searchInput, searchItem) {

    searchInput.addEventListener('click', function (event) {
        inputBox.classList.add('active');
        event.stopPropagation();
    });

    window.addEventListener('click', function () {
        inputBox.classList.remove('active');
    });

    searchItem.forEach(function (searchItemSingle) {
        searchItemSingle.addEventListener('click', function () {
            const text = searchItemSingle.querySelector(".title");
            const textContent = text.textContent;
            searchInput.value = textContent;
            inputBox.classList.remove('active');
        });
    });
}

const inputBox = document.querySelector('#input-box');
// const soValue = document.querySelector('#search-input');
const searchInput = document.querySelector('#search-input');
const searchItem = document.querySelectorAll('#search-result .search-item');
handleSelect(inputBox, searchInput, searchItem);

const inputBox2 = document.querySelector('#input-box2');
// const soValue = document.querySelector('#search-input');
const searchInput2 = document.querySelector('#search-input2');
const searchItem2 = document.querySelectorAll('#search-result2 .search-item');
handleSelect(inputBox2, searchInput2, searchItem2);

// filter start 

function filterItems(inputId, items) {
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();


    items.forEach((item) => {
        const title = item.querySelector(".title");
        const txtValue = title.textContent || title.innerText;

        if (txtValue.toUpperCase().includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}
const filterSearchInputId = "search-input";
const filterSearchInput = document.getElementById(filterSearchInputId);
const items = document.querySelectorAll("#search-result .search-item");
filterSearchInput.addEventListener("keyup", function () {
    filterItems(filterSearchInputId, items);
})

const filterSearchInputId2 = "search-input2";
const filterSearchInput2 = document.getElementById(filterSearchInputId2);
const items2 = document.querySelectorAll("#search-result2 .search-item");
filterSearchInput2.addEventListener("keyup", function () {
    filterItems(filterSearchInputId2, items2);
})
// Dropdown select with Filter start



