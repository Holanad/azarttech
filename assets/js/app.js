// load more blog
function loadMoreBlog(count) {
    setTimeout(() => {
        if ($(".blog-item:hidden").length < 1) {
            $('.blog-load-button').remove();
        } else {
    
        }
    }, 100);
        
    for (let i = 0; i < count; i++) {
        $('.blog-item:eq(' + i + ')').addClass('load');
    };
    let calcCount = Number(count) + 2;
    $('.blog__button').remove();
    $('.blog-load-button').append('<button type="button" class="blog__button" onclick="loadMoreBlog(' + calcCount + ')"><p>Показать еще</p></button>');
};
loadMoreBlog(8);

// load more project
function loadMoreProject(count) {
    setTimeout(() => {
        if ($(".project-item:hidden").length < 1) {
            $('.project-load-button').remove();
        } else {
    
        }
    }, 100);
        
    for (let i = 0; i < count; i++) {
        $('.project-item:eq(' + i + ')').addClass('load');
    };
    let calcCount = Number(count) + 2;
    $('.project__button').remove();
    $('.project-load-button').append('<button type="button" class="project__button" onclick="loadMoreProject(' + calcCount + ')"><p>Показать еще</p></button>');
};
loadMoreProject(6);

// jQuery function
$(document).ready(function() {
    // rellax
    (function rellax() {
        const rellax = new Rellax(".rellax");
    }());

    // phone mask
    (function phoneMask() {
        if ($('input[type=tel]').length) {
            $('input[type=tel]').mask("+7 (999) 999-99-99");
        };
    }());

    // focusInput
    (function focusInput() {
        $('.focus-area input').focus(function(){
            $(this).parent().addClass('focus-active');
        }).blur(function() {
            $(this).parent().removeClass('focus-active');
        });
    }());

    // slickCarousel
    (function slickCarousel() {
        if ($('.slider').length) {
            $('.slider').slick({

            });
        };
    }());

    // tabs
    (function tabs() {
        $('.tabs-item').click(function() {
            const tabsItem = $(this).attr("data-tab");
            const tabsParent = $(this).parents('.tabs-wrapper').find('.tabs-content');

            $(this).parents('.tabs-wrapper').find('.tabs-item').removeClass('active');
            $(this).addClass('active');

            $(this).parents('.tabs-wrapper').find('.tabs-content').removeClass('active');

            for (let dataContent of tabsParent) {
                if (dataContent.getAttribute("data-content") == tabsItem) {
                    dataContent.classList.add('active');
                };
            };
            
            return false;
        });
    }());

    // accordion
    (function accordion() {
        $('.accordion').click(function () {
            $(this).toggleClass('open').next().slideToggle();
            $('.accordion').not(this).removeClass('open').next().slideUp();
            return false;
        });
    }());

    // menu
    (function menu() {
        $('.header-toggle').click(function() {
            $('html').toggleClass('menu-open');
        });
    }());

    // popup
    (function popup() {
        // open popup
        $('.popup-btn').click(function() {
            $('.popup').addClass('show');
        });

        // close popup
        $('.popup-close').click(function() {
            $('.popup').removeClass('show');
        });

        // close popup overlay
        $(document).mouseup(function (e) {
            const mainPopup = $(".popup-body");
            if (!mainPopup.is(e.target) && mainPopup.has(e.target).length === 0) {
                $(".popup").removeClass("show");
            }
        });
    }());

    // scroll link
    (function scrollLink() {
        $(".scroll-link").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 1500);
            return false;
        });
    }());

    // headerScroll
    (function headerScroll() {
        function scrollPage () {
            let headerOffset = $('.header').offset().top;
            
            if (headerOffset > 1) {
                $('.header').addClass('header-fixed');
            } else {
                $('.header').removeClass('header-fixed');
            }
        }
        scrollPage();

        $(window).scroll(function() {
            scrollPage();    
        });
    }());

    // checkbox
    (function checkbox() {
        $.each($(".checkbox-item"), function () {
            if ($(this).find("input").prop("checked") == true) {
                $(this).addClass("active");
            }
        });

        $(document).on("click", ".checkbox-item", function () {
            if ($(this).hasClass("active")) {
                $(this).find("input").prop("checked", false);
            } else {
                $(this).find("input").prop("checked", true);
            }
            $(this).toggleClass("active");
            return false;
        });
    }());

    // radio button
    (function radioButton() {
        $.each($(".radio-item"), function () {
            if ($(this).find("input").prop("checked") == true) {
            $(this).addClass("active");
            }
        });

        $(document).on("click", ".radio-item", function () {
            var thisRadio = $(this);
            thisRadio
            .parents(".radio-wrapper")
            .find(".radio-item")
            .removeClass("active");
            thisRadio
            .parents(".radio-wrapper")
            .find(".radio-item input")
            .prop("checked", false);
            thisRadio.toggleClass("active");
            thisRadio.find("input").prop("checked", true);
            return false;
        });
    }());

    // accept politic
    (function acceptPolitic() {
        $(".accept-politic__label").click(function () {
            $(this).toggleClass("active");

            if ($(this).hasClass("active")) {
                $(this).parent().find("input").prop("checked", true);
            } else {
                $(this).parent().find("input").prop("checked", false);
            }
        });
    }());

    console.log("Dev | Скрипты загружены");
});