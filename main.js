const images = document.querySelectorAll(".slide-in");

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  images.forEach((image) => {
    //   distance of image from top of the window
    let imgOffsetTop = image.getBoundingClientRect().top;
    // if more than half of the image is scrolled up, display it.
    if (imgOffsetTop < window.scrollY + window.innerHeight - image.height / 2) {
      image.classList.add("active");
    }
    if (
      imgOffsetTop < -image.height / 2 ||
      imgOffsetTop - 100 > window.innerHeight
    ) {
      image.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
