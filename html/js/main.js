;(function(){


// $('<img/>').attr('src', '../img/bgMainBanner2.jpg').on('load', function() {
//    $(this).remove(); // prevent memory leaks as @benweet suggested
//    $('.mainBanner').css('background', 'url(../img/bgMainBanner2.jpg) bottom no-repeat');
//    $('body').css('display', 'block');;
// });

// Boton menu movil
$('#btnMostrarMenu').on('click', function(e) {
    e.preventDefault();

    console.log('click');

    $('.to-up').toggleClass('up-65');
    $('.to-down').toggleClass('down-76');
    // $('.elem_to_hide').toggleClass('hide_on');
    $('.mainHeader').toggleClass('mainHeader_on');
    $('.mainHeader_nav').toggleClass('mainHeader_nav_on');

});


// Dectecto el evento de carga y redimension de la pagina
$(window).on('load resize', function(){

    var mainBannerH = $('.mainBanner').outerHeight(),
        mainHeaderH = $('.mainHeader').outerHeight(),
        mainHeaderNav = $('.mainHeader_nav'),
        linkNav = mainHeaderNav.find('a[href^="#"]'),
        anchoVentana = $(window).outerWidth();

    // Tomo la altura del header y se la agrego a los fondos del mismo
    $('.headerBgHeight').outerHeight(mainHeaderH);

    // $('#mainFooter').css('padding-top', mainHeaderH);
    // $('.stripes').css('top', mainHeaderH);

    $(document).on('scroll', onScroll);

    linkNav.on('click', function(e) {
        e.preventDefault();

        $(document).off('scroll', onScroll);
        navChangueClickColor(this);
        animateAnchor(this);

    });

    // $(document).on('click scroll', function(e) {
    //     e.preventDefault();

    //     var scrollPos = $(document).scrollTop();
    //     replaceColorNav(scrollPos);

    // });

    $(document).on('scroll', function(e) {
        e.preventDefault();

        var scrollPos = $(document).scrollTop();
        replaceColorNav(scrollPos);

    });

    $('.buttonContact').on('click', function(e) {
        e.preventDefault();

        animateAnchor(this);
        mainHeaderNav.find('a').removeClass('activeNav');
        $('.contacto').addClass('activeNav');

    });

    $('.buttonArrow').on('click', function(e) {
        e.preventDefault();

        animateAnchor(this);
        mainHeaderNav.find('a').removeClass('activeNav');
        $('.nosotros').addClass('activeNav');

    });

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

    //Removiendo clases del menu abierto evitando en el resize efectos o saltos
    if(anchoVentana <= 768 ){
        $('.mainHeader_nav').addClass('mainHeader_nav_transition');
        $('.mainHeader_nav a').addClass('button');
    }else{
        $('.to-up').removeClass('up-65');
        $('.to-down').removeClass('down-76');
        $('.mainHeader_nav').removeClass('mainHeader_nav_transition mainHeader_nav_on');
        $('.mainHeader').removeClass('mainHeader_on');
        $('.mainHeader_nav a').removeClass('button');
        // $('.elem_to_hide').removeClass('hide_on');
    }

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

        required.val('');

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

$('#contactForm').on('keyup', '.required.error', function(){
    $(this).removeClass('error');

    console.log('keyup');
});


})();

