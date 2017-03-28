/**
 * Created by stimpik on 26.03.2017.
 */
//-------------ARROW SCROLL

$('.scroll-down').on('click', function() {
    console.log('1');
    $("body").animate({scrollTop:  screen.height },'slow');
    return false;
});


var isActive = false;
$('.header__menubtn').on('click', function() {

    var elm = $(this[0]);
    if($( ".header-menu" ).css('display') === "none"){
        $( ".header-menu" ).css('display', '-webkit-flex');
        $('.hamburger').addClass('burger-active');

    }else{
        $( ".header-menu" ).slideUp('fast');
        $('.hamburger').removeClass('burger-active');

    }


});


var skills = (function () {

    var html1 = document.querySelector(".skill1"),
        html2 = document.querySelector(".skill2"),
        html3 = document.querySelector(".skill3"),
        html4 = document.querySelector(".skill4")


    return {

        move: function (item, windowScroll, percent) {
            var style = item.style,
                itemPer = percent ;

            if (windowScroll >= 1350) {
                style.width = itemPer + '%';
                $(item).siblings().css('display', 'block')
            }

        },

        init: function (wScroll) {
            this.move(html1, wScroll, 80);
            this.move(html2, wScroll, 80);
            this.move(html3, wScroll, 80);
            this.move(html4, wScroll, 80);

        }
    }

})();

var skillsList = document.querySelector(".skills-wraper");

if (skillsList !== null) {
    window.onscroll = function () {
        var wScroll = window.pageYOffset;


        skills.init(wScroll);
    };
}



