// $('<img/>').attr('src', '../img/bgMainBanner2.jpg').on('load', function() {
//    $(this).remove(); // prevent memory leaks as @benweet suggested
//    $('.mainBanner').css('background', 'url(../img/bgMainBanner2.jpg) bottom no-repeat');
//    $('body').css('display', 'block');;
// });


// Dectecto el evento de carga y redimension de la pagina
$(window).on('load resize', function(){

    var mainBannerH = $('.mainBanner').outerHeight(),
        mainHeaderH = $('.mainHeader').outerHeight(),
        mainHeaderNav = $('.mainHeader_nav'),
        linkNav = mainHeaderNav.find('a[href^="#"]'),
        anchoVentana = $(window).outerWidth();

    // Tomo la altura del header y se la agrego a los fondos del mismo
    $('.headerBgHeight').outerHeight(mainHeaderH);

    $('#mainFooter').css('padding-top', mainHeaderH);
    $('.stripes').css('top', mainHeaderH);

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
            mainHeaderNav.find('a.hidden').addClass('visible');
        }else{
            mainHeaderNav.find('a').removeClass('replaceColorNav');
            mainHeaderNav.find('a.visible').removeClass('visible');
        }

    }

    // if(anchoVentana >= 768 ){
    //     $('.mainHeader').removeClass('active');
    //     $('.mainHeader_nav').removeClass('active center');

    // }

});


// $('.btnMostrarMenu').on('click', function(e) {
// e.preventDefault();

//     console.log('click');

//     $('.mainHeader').toggleClass('active');
//     $('.mainHeader_nav').toggleClass('center active');

// });

// VALIDACION FORMULARIO
;(function(){

    var nombre = $('#nombre');

    // nombre.on('focus', function(e) {
    //     e.preventDefault();
    //     if(nombre.val().length === 0){
    //         nombre.addClass('error');
    //     }else{
    //         $(this).removeClass('error');
    //     }
    // });

    // nombre.on("change keyup", function(e) {
    //     e.preventDefault();
    //     if(nombre.val() === ''){
    //         nombre.addClass('error');
    //     }else{
    //         $(this).removeClass('error');
    //     }
    // });

    $("#btnSubmit").on('click', function (e) {

        //stop submit the form, we will post it manually.
        e.preventDefault();

        // Get form
        var form = $('#contactForm')[0];

        // Create an FormData object
        var data = new FormData(form);

        // If you want to add an extra field for the FormData
        // data.append("CustomField", "This is some extra data, testing");

        // disabled the submit button
        // $("#btnSubmit").prop("disabled", true);

        if(nombre.val().length === 0){

            nombre.addClass('error');

        }else{
            // Funcion AJAX que hace el envio de los datos hacia el PHP
            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: "contacto.php",
                data: data,
                processData: false,
                contentType: false,
                cache: false,
                timeout: 600000,
                success: function (data) {

                // $("#result").text(data);
                console.log("SUCCESS : ", data);
                $("#btnSubmit").prop("disabled", false);

                },
                error: function (e) {

                    // $("#result").text(e.responseText);
                    console.log("ERROR : ", e);
                    $("#btnSubmit").prop("disabled", false);

                }
            });
        }

    });
})();

