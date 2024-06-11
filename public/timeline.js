// Move of the images in resume.html

(function ($) {
  $.fn.timeline = function () {
      var selectors = {
          id: $(this),
          item: $(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img",
      };

      // Set the first item as active and change the background image
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
          "background-image",
          "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
      );

      var itemLength = selectors.item.length;
      var offset = 100; // Adjust this value to control when the items get activated

      $(window).scroll(function () {
          var pos = $(this).scrollTop();

          selectors.item.each(function (i) {
              var min = $(this).offset().top - offset;
              var max = $(this).height() + $(this).offset().top - offset;

              if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                  // Last active item
                  updateBackgroundImage(selectors.item.last());
              } else if (pos <= max - 40 && pos >= min) {
                  // Current active item
                  updateBackgroundImage($(this));
              }
          });
      });

      function updateBackgroundImage($element) {
          var imageUrl = $element.find(selectors.img).attr("src");
          selectors.id.css("background-image", "url(" + imageUrl + ")");
          selectors.item.removeClass(selectors.activeClass);
          $element.addClass(selectors.activeClass);
      }
  };
})(jQuery);

$(document).ready(function () {
  $("#timeline-1").timeline();
});

  
//Open dropdown Menu All pages

  const toggleBtn = document.querySelector(".toggle_btn")
  const toggleBtnIcon = document.querySelector('.toggle.btn i')
  const dropDownMenu = document.querySelector('.dropdown_menu')
  
  toggleBtn.onclick = function() {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')
  
      toggleBtnIcon.classList = isOpen
          ? 'fa-solid fa-xmark'
          : 'fa-solid fa-fbars'
  }

//Open menu contact.html
  document
  .querySelector(".action_btn")
  .addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("open");
  });