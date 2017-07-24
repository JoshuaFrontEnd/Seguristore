;(function(){

var mainBannerH = $('.mainBanner').outerHeight(),
    mainHeaderNav = $('.mainHeader_nav'),
    linkNav = mainHeaderNav.find('a[href^="#"]');


// $('<img/>').attr('src', '../img/bgMainBanner2.jpg').on('load', function() {
//    $(this).remove(); // prevent memory leaks as @benweet suggested
//    $('.mainBanner').css('background', 'url(../img/bgMainBanner2.jpg) bottom no-repeat');
//    $('body').css('display', 'block');;
// });


function anclaSolo(boton,activar){

    boton.on('click', function(e) {
        e.preventDefault();

        animateAnchor(this);
        mainHeaderNav.find('a').removeClass('activeNav');
        activar.addClass('activeNav');

    });

}

anclaSolo($('.buttonArrow'),$('.nosotros'));
anclaSolo($('.buttonContact'),$('.contacto'));

function navChangueClickColor($this){

    linkNav.removeClass('activeNav');
    $($this).addClass('activeNav');

}

function animateAnchor($this) {

    var target = $this.hash,
        menu = target;

    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function() {
        $(document).on('scroll', onScroll);
    });

}

function onScroll(){

    var scrollPos = $(document).scrollTop();

    linkNav.each(function () {

        var currLink = $(this),
            refElement = $(currLink.attr("href"));

        if ((refElement.position().top - 60) <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

            navChangueClickColor(currLink);

        }else{

            currLink.removeClass("activeNav");

        }

    });

}

$(document).on('scroll', onScroll);

linkNav.on('click', function(e) {
    e.preventDefault();

    $(document).off('scroll', onScroll);
    navChangueClickColor(this);
    animateAnchor(this);

});


$(document).on('scroll', function(e) {
    e.preventDefault();

    var scrollPos = $(document).scrollTop();
    replaceColorNav(scrollPos);

});

//Funcion que reemplaza el estilo del nav al estar abajo del banner
function replaceColorNav(scrollPos){

    if (scrollPos >= (mainBannerH - 60) ){
        mainHeaderNav.find('a').addClass('replaceColorNav');
        $('.hidden').addClass('visible');
    }else{
        mainHeaderNav.find('a').removeClass('replaceColorNav');
        $('.visible').removeClass('visible');
    }

}


// Dectecto el evento de carga y redimension de la pagina
var resizeOn = function(){

    var anchoVentana = $(window).outerWidth();

    //Removiendo clases del menu abierto evitando en el resize efectos o saltos
    if(anchoVentana <= 768 ){
        $('.mainHeader_nav').addClass('hide_on');
        $('.mainHeader_nav').addClass('change_opacity');
        $('.mainHeader_nav a').addClass('button');
    }else{
        $('.to-up').removeClass('up-65');
        $('.to-down').removeClass('down-76');
        $('.mainHeader_nav').removeClass('change_opacity');
        $('.hide_on').removeClass('change_opacity show_on');
        $('.mainHeader_nav').removeClass('hide_on');
        $('.mainHeader_nav a').removeClass('button');
        $('.menu_toggle_hamburger').removeClass('hidden');
        $('.menu_toggle_cross').removeClass('rotate45');

        $('.buttonContact_textA').removeClass('hidden');
        $('.buttonContact_textB').removeClass('show_on');
    }

};

$(window).on('load resize', resizeOn);

// Boton menu movil
$('.menu_toggle').on('click', function(){
    console.log('abrete sesamo');

    $('.menu_toggle_hamburger').toggleClass('hidden');
    $('.buttonContact_textA').toggleClass('hidden');
    $('.buttonContact_textB').toggleClass('show_on');
    $('.menu_toggle_cross').toggleClass('rotate45');
    $('.mainHeader_nav, .hide_on').toggleClass('show_on');
    $('.to-up').toggleClass('up-65');
    $('.to-down').toggleClass('down-76');


    // $('.menu_toggle_hamburger').toggleClass('hide_on');
    // $('.mainHeader_nav, .menu_toggle_hide').toggleClass('show_on');
    // $('.menu_toggle_cross').toggleClass('rotate45');
    // $('.to-up').toggleClass('up-65');
    // $('.to-down').toggleClass('down-76');

});


// VALIDACION FORMULARIO
var required = $('.required'),
    nombre = $('#nombre'),
    email = $('#email');

$("#btnSubmit").on('click', function (e) {
    e.preventDefault();

    //Validando que los campos no esten vacios
    //No considera si se ingresa caracteres en blanco
    required.each(function(index, el) {
        if($(this).val().length === 0){

            $(this).addClass('error');

            console.log('no enviado');
        }
    });

    //Validando Email
    function validateEmail(email) {
        console.log('hola');
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    if(validateEmail(email.val())){
        email.removeClass('error');
    }else{
        email.addClass('error');
    }

    //Si no existe la clase error se envia el formulario, limpia los campos y envia un mensaje de formulario enviado
    if (!$('.error').length) {
        console.log('enviando formulario');


        $('.contactForm_gracias').addClass('change_opacity visible').css('pointer-events', 'initial');

        setTimeout(function(){
            required.val('');
        }, 500);


        // DESACTIVAR BOTON DE ENVIO REVISAR IGUAL
    }

    // else{

    //     required.removeClass('error');

    //     console.log('enviando');
    // }

    // // Funcion AJAX que hace el envio de los datos hacia el PHP

    // // Get form
    // var form = $('#contactForm')[0];

    // // Create an FormData object
    // var data = new FormData(form);

    // // If you want to add an extra field for the FormData
    // // data.append("CustomField", "This is some extra data, testing");

    // // disabled the submit button
    // // $("#btnSubmit").prop("disabled", true);

    // $.ajax({
    //     type: "POST",
    //     enctype: 'multipart/form-data',
    //     url: "contacto.php",
    //     data: data,
    //     processData: false,
    //     contentType: false,
    //     cache: false,
    //     timeout: 600000,
    //     success: function (data) {

    //     // $("#result").text(data);
    //     console.log("SUCCESS : ", data);
    //     $("#btnSubmit").prop("disabled", false);

    //     },
    //     error: function (e) {

    //         // $("#result").text(e.responseText);
    //         console.log("ERROR : ", e);
    //         $("#btnSubmit").prop("disabled", false);

    //     }
    // });

});

$('.contactForm_gracias').on('click', function(event) {
    event.preventDefault();
    $(this).removeClass('change_opacity visible').css('pointer-events', 'none');

});

$('#contactForm').on('keyup', '.required.error', function(){
    $(this).removeClass('error');

    console.log('keyup');
});


})();


// - Revisar las clases que cambian la opacidad
// - Cambiar los nombres
// - Evaluar la posibilidad de volver al commit anterior a estos cambios, pero guardar primero todo este codigo

// $('.producto').on({
//     mouseenter: function () {
//         $('.producto_img').addClass('hidden');
//         $('.producto_txt_a').removeClass('delay_4s');
//         $('.producto_txt li').addClass('hoVer');
//         $('.producto_txt_b').addClass('delay_2s');
//         $('.producto_txt_c').addClass('delay_4s');
//     },
//     mouseleave: function () {
//         $('.producto_txt li').removeClass('hoVer');
//         $('.producto_txt_a').addClass('delay_4s');
//         $('.producto_txt_b').removeClass('delay_2s').addClass('delay_2s');
//         $('.producto_txt_c').removeClass('delay_4s');
//         $('.producto_img').removeClass('hidden');
//     }
// });