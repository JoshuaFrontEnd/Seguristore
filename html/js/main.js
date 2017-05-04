// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/*-- Scroll puro JS vanilla --*/
// function scrollIt(destination, duration = 200, easing = 'linear', callback) {

//   const easings = {
//     linear(t) {
//       return t;
//     },
//     easeInQuad(t) {
//       return t * t;
//     },
//     easeOutQuad(t) {
//       return t * (2 - t);
//     },
//     easeInOutQuad(t) {
//       return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//     },
//     easeInCubic(t) {
//       return t * t * t;
//     },
//     easeOutCubic(t) {
//       return (--t) * t * t + 1;
//     },
//     easeInOutCubic(t) {
//       return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//     },
//     easeInQuart(t) {
//       return t * t * t * t;
//     },
//     easeOutQuart(t) {
//       return 1 - (--t) * t * t * t;
//     },
//     easeInOutQuart(t) {
//       return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
//     },
//     easeInQuint(t) {
//       return t * t * t * t * t;
//     },
//     easeOutQuint(t) {
//       return 1 + (--t) * t * t * t * t;
//     },
//     easeInOutQuint(t) {
//       return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
//     }
//   };

//   const start = window.pageYOffset;
//   const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

//   const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
//   const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
//   const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
//   const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

//   if ('requestAnimationFrame' in window === false) {
//     window.scroll(0, destinationOffsetToScroll);
//     if (callback) {
//       callback();
//     }
//     return;
//   }

//   function scroll() {
//     const now = 'now' in window.performance ? performance.now() : new Date().getTime();
//     const time = Math.min(1, ((now - startTime) / duration));
//     const timeFunction = easings[easing](time);
//     window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

//     if (window.pageYOffset === destinationOffsetToScroll) {
//       if (callback) {
//         callback();
//       }
//       return;
//     }

//     requestAnimationFrame(scroll);
//   }

//   scroll();
// }

// document.querySelector('.js-btn2').addEventListener('click', () => {
//   scrollIt(
//     document.querySelector('.js-section2'),
//     300,
//     'easeOutQuad',
//     () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
//   );
// });


