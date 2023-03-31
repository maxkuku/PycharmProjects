
$(document).ready(function($) {

	'use strict';

        $(function() {

          // Vars
          var modBtn  = $('#modBtn'),
              modal   = $('#modal'),
              close   = modal.find('.close-btn img'),
              modContent = modal.find('.modal-content');

          // open modal when click on open modal button
          modBtn.on('click', function() {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });

          // close modal when click on close button or somewhere out the modal content
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(modal) || target.is(close)) {
              modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
              });
            }
          });

        });

        // on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){

          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');


          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });


          // animate and scroll to the sectin
          $('body, html').animate({

            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;

        })


        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });

});



document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#copy').textContent = "© 2020–" + new Date().getFullYear();
});


document.addEventListener("DOMContentLoaded", () => {
    let pics = [
        {"h2":"На канатке Эльбруса!", "p":"1700 руб./чел все 3 уровня Ски-пасс", "href": "/static/images/kan-bud-2022-09-02.JPG"},
        {"h2":"Перевал Гурбаши", "p":"Эльбрус с другой стороны", "href": "/static/images/pereval-2022-09-03.JPG"},
        {"h2":"Эльбрус! Приют 11-ти достигнут!", "p":"Высота - 4050 метров!", "href": "/static/images/elb-2022-09-02.JPG"},
        {"h2":"На горной реке", "p":"Река Баксан", "href": "/static/images/reka.JPG"},
        {"h2":"Пятигорск, гора Машук", "p":"Высота горы 993,7 м", "href": "/static/images/pyati.JPG"},
        {"h2":"Фугу летом 22", "p":"До воды далеко :(", "href": "/static/images/ryba.JPG"},
        {"h2":"На Неве", "p":"Разводные мосты", "href": "/static/images/rasv.JPG"},
        {"h2":"Санкт-Петербург", "p":"Янтарная комната", "href": "/static/images/yant.JPG"},
        {"h2":"Друзья будут ждать", "p":"возвращения", "href": "/static/images/zhdat.JPG"},
        {"h2":"В транспорте", "p":"Тесновато :(", "href": "/static/images/plyusch.JPG"},
        {"h2":"Ребята! С новым 2022 годом!", "p":"Немного шампусика!", "href": "/static/images/ng2022.jpg"},
        {"h2":"О! Новый друг!", "p":"Фуга! Как долго мы тебя ждали!", "href": "/static/images/fugu.jpg"},
        {"h2":"Вид 2020", "p":"Взгляд на море", "href": "/static/images/mur1.JPG"},
        {"h2":"Средиземное", "p":"Вон оно! Средиземное", "href": "/static/images/mur2.JPG"},
        {"h2":"День республики", "p":"В Турции и в 2020-м День республики как всегда 29 октября!", "href": "/static/images/mur3.JPG"},
        {"h2":"Лисичкин Пук", "p":"Он мастерски умеет попросить чего-нибудь", "href": "/static/images/eyia.JPG"},
        {"h2":"Приятель Мышь", "p":"Как имя так и выглядит", "href": "/static/images/mysh.JPG"},
        {"h2":"Настоящий полковник!", "p":"Мужчина мечты", "href": "/static/images/murz13.jpg"},
        {"h2":"Портрет Кота Мурзика", "p":"мудрого. Размышления.", "href": "/static/images/murz_krup.JPG"},
        {"h2":"Мурзик на отдыхе", "p":"В любимом кресле в философском настроении.", "href": "/static/images/murz_obsch.JPG"},
        {"h2":"Мурзик на прогулке в Болгарии, Поморье", "p": "В Болгарии в 2014-м году", "href": "/static/images/bolg_2014.jpg"},
        {"h2":"Друган Шарки", "p":"от нетерпения грызет коробку", "href": "/static/images/sharky.JPG"},
        {"h2":"Поправить здоровье", "p":"тоже нужно иногда в перерыве между путешествиями", "href": "/static/images/rdkb_2015.jpg"},
        {"h2":"Портрет друга", "p":"на долгую память", "href": "/static/images/portr.jpg"},
        {"h2":"Любимое блюдо кота Мурзика", "p":"мароканские мандарины", "href": "/static/images/blyudo.JPG"},
        {"h2":"Мурзик едет в Турцию!", "p":"В ожидании путешествия", "href": "/static/images/murz_tur.jpg"},
        {"h2":"Мурзик с Рыжиком и Мышем", "p":"В путешествии по Турции", "href": "/static/images/tur.JPG"},
        {"h2":"РЖД в путь!", "p":"Мурзик в Сколково", "href": "/static/images/skolk.JPG"},
        {"h2":"ЦППК в путь!", "p":"Центральная пригородная пассажирская компания с Мурзиком", "href": "/static/images/setun.JPG"},
    ];
    let htmlContent = '';
    pics.forEach( (e, ind) => {
        htmlContent += `
            <div class="item">
                <a href="${e.href}" data-lightbox="${e.ind}">
                    <div class="thumb">
                        <div class="hover-effect">
                            <div class="hover-content">
                                <h2>${e.h2}</h2>
                                <p>${e.p}</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src="images/blank.gif" data-src="${e.href}" alt="${e.h2}">
                        </div>
                    </div>
                </a>
            </div>
        `
    } )
    document.querySelector('#portfolio__inner').innerHTML = htmlContent;
})



function srcs() {
    document.querySelectorAll('*').forEach.call(
        document.querySelectorAll('img[data-src]'),
        function (img) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.onload = function () {
                img.removeAttribute('data-src');
            };
        }
    );
}

document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(srcs(),300);
});








