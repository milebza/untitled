function addBottomShadow(){$(".header").offset().top>50?$(".header").addClass("bottom-shadow"):$(".header").removeClass("bottom-shadow")}$(document).ready(function(){$(window).scroll(addBottomShadow),$(".js-toggle").click(function(s){s.preventDefault(),$(this).hasClass("is-active")===!0?($(this).removeClass("is-active"),$(this).parent().find(".js-menu").slideUp(500)):($(this).addClass("is-active"),$(this).parent().find(".js-menu").slideDown(500))}),$(".js-projc").click(function(s){s.preventDefault();var e=$(this).attr("data-type");$("."+e).addClass("visible"),$(".js-backgr").addClass("visible")}),$(".js-backgr").click(function(s){s.preventDefault(),$(".js-carousel").removeClass("visible"),$(this).removeClass("visible")}),$(".js-scroll-to").click(function(s){s.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("data-page")).offset().top},1500,"easeInOutExpo")}),$(".js-slick").slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear",adaptiveHeight:!0})});