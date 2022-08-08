
$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    let offsetAbout = $("#about").offset().top
    let navHeight = $(".navBar").outerHeight(true)

    if (wScroll > offsetAbout - navHeight) {
        $(".navBar").removeClass("bg-transparent");
    } else if (wScroll < offsetAbout - navHeight) {
        $(".navBar").addClass("bg-transparent");
    }
})

$(".nav-links ul li a").click(function (e) {
    let sectionHref = $(e.target).attr("href")
    let sectionOffset = $(sectionHref).offset().top;

    $("html, body").animate({ scrollTop: sectionOffset }, 1000);
    $(e.target).addClass("active");

    if ($(e.target).parent().siblings().children().hasClass("active")) {
    $(e.target).parent().siblings().children().removeClass("active");
    }

})

window.addEventListener("scroll", function () {
  
    let sections = document.querySelectorAll("section");
    let navLink = document.querySelectorAll(".nav-links ul a");
    let navbar = document.querySelector(".navBar");
    let lengthSec = sections.length;
  
    while ( --lengthSec && window.scrollY + navbar.offsetHeight < sections[lengthSec].offsetTop) {}
    navLink.forEach((el) => {
      el.classList.remove("active");
      navLink[lengthSec].classList.add("active");
    });
    
  });

var autoType = document.querySelector(".autoType");
var typed = new Typed(autoType, {
    strings: ['Simone Olivia.', 'a Freelancer.', 'a Photographer.', 'a Designer.'],
    smartBackspace: true,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 250,
    startDelay: 500,
});

$(".menu-icon").click(function () {
    let navWidth = $(".nav-links ul").outerWidth(true);
    let navRight = $(".nav-links").css("right");

    if (navRight == `${-navWidth}px`) {
        $(".nav-links").animate({ right: 0 }, 500);
    }else{
        $(".nav-links").animate({ right: -navWidth }, 500);
    }
})

window.onscroll = function () {
    let offsetSection = document.querySelector("#resume").offsetTop
    let offsetTopPartOfSection = $(".parent-pockets")[0].offsetHeight
    let numBars = document.querySelectorAll(".progress-value");
    
    if (window.scrollY >= offsetSection + offsetTopPartOfSection) {
        for (let i = 0; i < numBars.length; i++) {
            numBars[i].style.width = numBars[i].dataset.valuebar;   
        }
    }else{

    }

}

$('.arrow-down').click(function() {
    let aboutOffset = $("#about").offset().top
    $("html, body").animate({scrollTop: aboutOffset}, 500)
});

$('.arrow-top').click(function() {
    $('html, body').animate({scrollTop:0}, 500);
});

$('.cogBoard').click(function() {
    let cogBoardWidth = $(this).innerWidth();
    if ($(this).css("right") == `${-cogBoardWidth}px`) {
        $(this).animate({right: 0}, 500);
    }else{
        $(this).animate({right: -cogBoardWidth}, 500);
    }
});

let colorItem = $(".colors span");
colorItem.eq(0).css("backgroundColor", "#6610F2");
colorItem.eq(1).css("backgroundColor", "#007BFF");
colorItem.eq(2).css("backgroundColor", "#6F42C1");
colorItem.eq(3).css("backgroundColor", "#17A2B8");
colorItem.eq(4).css("backgroundColor", "#DC3545");
colorItem.eq(5).css("backgroundColor", "#E83E8C");
colorItem.eq(6).css("backgroundColor", "#28A745");
colorItem.eq(7).css("backgroundColor", "#FFC107");
colorItem.eq(8).css("backgroundColor", "#FD7E14");
colorItem.eq(9).css("backgroundColor", "#795548");

colorItem.click(function (e) {
    let bgColor = $(e.target).css("backgroundColor");
    $(".active").css("color", bgColor);
    $(".desc h2 span").css("color", bgColor);
    $(".data-desc a").css("color", bgColor);
    $(".data-desc .btn-cv").css("backgroundColor", bgColor);
    $(".data-desc .btn-cv").css("color", "#ffffff");
    $(".icons").css("color", bgColor);
    $(".pocket p").css("backgroundColor", bgColor);
    $(".progress-value").css("backgroundColor", bgColor);
    $(".progress-value").css("backgroundColor", bgColor);
    $(".owl-dot.active, .owl-dot:hover").css("backgroundColor", bgColor);
    $(".btn-form input").css("backgroundColor", bgColor);
    
});

$(".restDefault").click(function () {
    $(".active").css("color", "");
    $(".desc h2 span").css("color", "");
    $(".data-desc a").css("color", "");
    $(".data-desc .btn-cv").css("backgroundColor", "");
    $(".data-desc .btn-cv").css("color", "");
    $(".icons").css("color", "");
    $(".pocket p").css("backgroundColor", "");
    $(".progress-value").css("backgroundColor", "");
    $(".progress-value").css("backgroundColor", "");
    $(".owl-dot.active, .owl-dot:hover").css("backgroundColor", "");
    $(".btn-form input").css("backgroundColor", "");
   
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
  });