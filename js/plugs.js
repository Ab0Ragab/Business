/*global $*/
$(document).ready(function () {
    
    "use strict";
    
    
    $(".addhigh2").hide();
    $(".addhigh3").hide();
    $(".addhigh4").hide();
    $(".addhigh5").hide();
    $(".addhigh6").hide();
    
    $(".addhigh1").click(function () {
        
        $("#b").addClass("ab");
        $("#a").removeClass("ab");
        $(".addhigh2").show();
        $(".addhigh3").show();
        $(".addhigh1").hide();
        
    });
    
    $(".addhigh2").click(function () {
        
        $("#a").addClass("ab");
         $("#b").removeClass("ab");
        $(".addhigh2").hide();
        $(".addhigh3").hide();
        $(".addhigh1").show();
        
    });
    
    $(".addhigh3").click(function () {
        
        
        $("#c").addClass("ab");
         $("#b").removeClass("ab");
        $(".addhigh2").hide();
        $(".addhigh3").hide();
        $(".addhigh4").show();
        $(".addhigh5").show();
        
    });
    
    $(".addhigh4").click(function () {
        
        
        $("#b").addClass("ab");
         $("#c").removeClass("ab");
        $(".addhigh4").hide();
        $(".addhigh5").hide();
        $(".addhigh2").show();
        $(".addhigh3").show();
        
    });
    
    $(".addhigh5").click(function () {
        
        
        $("#d").addClass("ab");
         $("#c").removeClass("ab");
        $(".addhigh4").hide();
        $(".addhigh5").hide();
        $(".addhigh6").show();
        
    });
    
    $(".addhigh6").click(function () {
        
        
        $("#c").addClass("ab");
         $("#d").removeClass("ab");
        $(".addhigh6").hide();
        $(".addhigh4").show();
        $(".addhigh5").show();
    });
    
    //smooth scroll to div
    
    $('.nav li a').click(function () {
        
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
    //caching scrolltop element
    
    var scrollbutton = $("#scroll-up");
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 50) {
            scrollbutton.show();
        } else {
            scrollbutton.hide();
        }
    });
    
     //click on button to scroll top
    
    scrollbutton.click(function () {
        
        $("html, body").animate({scrollTop : 0}, 600);
        
    });
    
});