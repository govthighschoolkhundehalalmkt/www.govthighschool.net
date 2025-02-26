const slider = document.getElementById('slider');



  const images = slider.getElementsByTagName('img');

  let currentIndex = 0;

  function showNextImage() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first image
    }
    updateSliderPosition();
  }

  function showPreviousImage() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1; // Loop back to the last image
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    const offset = -currentIndex * 100; // Adjust based on image width
    slider.style.transform = `translateX(${offset}%)`;
  }