var screenWidth, screenHeight;
var primarySlider = undefined;

const setDimensions = function () {
  screenWidth = $(window).width();
  screenHeight = $(window).height();
};

const initPrimarySlider = () => {
  let captions = [
    "A Sense of Arrival",
    "The Residences",
    "The Belnord Club",
    "A Remarkable Neighborhood",
    "The Conservators",
  ];

  const buildSlider = (direction) => {
    if (direction == "vertical") {
      primarySlider = new Swiper(".primary-slider", {
        direction: "vertical",
        speed: 400,
        loop: false,
        autoHeight: true,
        mousewheel: true,
        pagination: {
          el: ".primary-slider-pagination",
          type: "bullets",
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return (
              '<div class="' +
              className +
              '">' +
              '<span class="caption">' +
              captions[index] +
              "</span>" +
              '<span class="counter">0' +
              (index + 1) +
              "</span></div>"
            );
          },
        },
        parallax: true,
      });
    } else {
      primarySlider = new Swiper(".primary-slider", {
        direction: "horizontal",
        speed: 800,
        loop: false,
        autoHeight: true,
        mousewheel: true,
        keyboard: true,
        pagination: {
          el: ".primary-slider-pagination",
          type: "bullets",
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return (
              '<div class="' +
              className +
              '">' +
              '<span class="caption">' +
              captions[index] +
              "</span>" +
              '<span class="counter">0' +
              (index + 1) +
              "</span></div>"
            );
          },
        },
        parallax: true,
      });
    }
  };

  if (primarySlider != undefined) {
    primarySlider.destroy();
    primarySlider = undefined;
    console.log("resized");
  }

  if (screenWidth > 1200) {
    buildSlider("horizontal");
  } else {
    buildSlider("vertical");
  }
};

$(window).on("load resize", function () {
  setDimensions();
  initPrimarySlider();
  $(".preloader").fadeOut();
  $(".intro-textbox").addClass("active");
  $(".intro-textbox-button").on("click", function () {
    $(".intro").fadeOut();
  });
});
