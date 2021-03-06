"use strict";


// Accordian functionality =====================================================================
$(function() {
    $('.accordian li').on('click', function() {
        if ($(this).find('ul').hasClass('open')) {
            $('ul.open').slideToggle().removeClass('open');
            $('.accordian h3 span').removeClass('closed');
            $('.accordian h3').removeClass('closed');
        } else {
            $('ul.open').slideToggle().removeClass('open');
            $(this).find('ul').slideToggle().addClass('open');
            $('.accordian h3, .accordian h3 span').removeClass('closed');
            $(this).find('h3, h3 span').addClass('closed')
        }
    });
    // Active class starts one open
    $('.accordian li.active ul').slideDown().addClass('open');
});

window.onload = spanTitle();

$(window).resize(spanTitle);

function spanTitle() {
    // console.log("window width ", $(window).width());
    var span = document.getElementById("timeline-span");
    if ($(window).width() < 420) {
        span.innerHTML = "Start Today";
        span.nextSibling.nextSibling.innerHTML = span.innerHTML;
        document.querySelector(".graphic-container").previousElementSibling.firstChild.nextSibling.innerHTML = "First Galaxy Inc";
    } else if ($(window).width() >= 975 && $(window).width() < 1118) {
        span.innerHTML = "Start Today";
    } else if ($(window).width() > 1500 || $(window).width() < 975) {
        span.innerHTML = "Change Your Life Today";
    } else {
        span.innerHTML = "Change Your Life";
    }
}

// Reasons section ================================================================================

(function() {
    $(".exit").hide();
  
    $(".info").hide();
  
    $(function() {
      var open;
      open = true;
      return $(".info-card").click(function() {
        if (open) {
          $(this).siblings().removeClass("full");
          $(this).addClass("full");
          $(this).removeClass("side");
          $(this).siblings().addClass("side");
          $(this).find(".fa").hide();
          $(this).find(".exit").css("display", "inline");
          $(this).find(".exit").css("position", "absolute");
          $(this).find(".exit").css("right", "1rem");
          $(this).find(".exit").css("top", "6rem");
          $(".info").show();
          return open = !open;
        } else {
          $(this).siblings().removeClass("full");
          $(this).removeClass("full");
          $(this).removeClass("side");
          $(this).find(".fa").show();
          $(this).siblings().removeClass("side");
          $(this).find(".exit").css("display", "none");
          $(".info").hide();
          return open = !open;
        }
      });
    });
  
  }).call(this);
