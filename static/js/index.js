window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Real robot carousels: 2 videos side by side
    var realOptions = {
      slidesToScroll: 1,
      slidesToShow: 2,
      loop: true,
      infinite: true,
      autoplay: false,
    };
    bulmaCarousel.attach('#bag-zeroshot-carousel', realOptions);
    bulmaCarousel.attach('#bag-cotrain-carousel', realOptions);
    bulmaCarousel.attach('#towel-zeroshot-carousel', realOptions);
    bulmaCarousel.attach('#towel-cotrain-carousel', realOptions);
    bulmaCarousel.attach('#rope-zeroshot-carousel', realOptions);
    bulmaCarousel.attach('#rope-cotrain-carousel', realOptions);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	carousels[i].on('before:show', state => {});
    }

    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
