$(document).ready(function(){
    initCarousel();
});

function initCarousel() {
    
    $(".hm-carousel").on('initialized.owl.carousel', function(event) {
        $(event.target)
            .find('.owl-item.active').eq(event.item.index + event.page.size - 1).addClass('last')
        $(event.target)
            .find('.owl-item.active').eq(event.item.index).addClass('first')

    })
    $('.hm-team-carousel').owlCarousel({
        margin: 12,
        nav: true,
        dots: false,
        stagePadding: 35,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 2,
                margin: 8,
                nav: false,
                navText: false,
            },
            400: {
                items: 3,
            },
            768: {
                items: 6,
            },
            1440: {
                items: 9,
            },
            1700: {
                items: 12,
            }
        }
    })
    
    $('.hm-main-landing .owl-carousel').not(".owl-loaded").owlCarousel({
        forloop: true,
        margin: 30,
        stagePadding: 0,
        nav: true,
        dots: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0: {
                items: 5,
                margin: 8,
                stagePadding: 16,
                nav: false,
                navText: false,
            },
            200: {
                items: 1,
            },
            300: {
                items: 1,
            },
            400: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1150:{
                items: 1,
            },
            2200:{
                items: 1,
            }
        }
    });
    $('.hm-back-main.hm-sm-sect .owl-carousel').owlCarousel({
        margin: 12,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 8,
                stagePadding: 16,
                nav: false,
                navText: false,
            },
            400: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1150: {
                items: 4,
            },
            2200: {
                items: 5,
            }
        }
    })
    $('.hm-back-main.second.team .owl-carousel').not(".owl-loaded").owlCarousel({
        
        margin: 10,
        nav: true,
        dots: false,
        stagePadding: 35,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0: {
                items: 1,
                margin: 8,
                nav: false,
                navText: false,
            },
            400: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1150:{
                items: 3,
            },
            2200:{
                items: 3,
            }
        }
    });
    $('.hm-back-main.second .owl-carousel').owlCarousel({
        margin: 10,
        nav: true,
        dots: false,
        stagePadding: 35,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0: {
                items: 1,
                margin: 8,
                nav: false,
                navText: false,
            },
            400: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1150:{
                items: 4,
            },
            2200:{
                items: 4,
            }
        }
    })
    $('.hm-header-carousel').owlCarousel({
        margin:0,
        nav:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            }
        }
    })
    $('.hm-overlay-carousel').owlCarousel({
        margin: 12,
        nav: true,
        dots: false,
        stagePadding: 50,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 8,
                nav: false,
                navText: false,
            },
            768: {
                items: 2,
            },
            1150: {
                items: 3,
            },
            2200: {
                items: 3,
            }
        }
    })
    $('.hm-normal-carousel').owlCarousel({
        margin: 12,
        nav: true,
        dots: false,
        stagePadding: 50,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 8,
                nav: false,
                navText: false,
            },
            768: {
                items: 2,
            },
            1150: {
                items: 4,
            },
            2200: {
                items: 5,
            }
        }
    })
    $('.hm-small-carousel').owlCarousel({
        margin: 12,
        nav: true,
        dots: false,
        stagePadding: 50,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 8,
                nav: false,
                navText: false,
            },
            768: {
                items: 3,
            },
            1150: {
                items: 5,
            },
            2200: {
                items: 6,
            }
        }
    })

    $('.hm-back-main .owl-carousel').not(".owl-loaded").owlCarousel({
        margin: 10,
        nav: true,
        dots: false,
        stagePadding: 35,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0: {
                items: 1,
                margin: 8,
                nav: false,
                navText: false,
            },
            400: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1150:{
                items: 4,
            },
            2200:{
                items: 4,
            }
        }
    });
}