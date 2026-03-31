// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

export function initHomePage() {
  console.log('Home page init');

  const sliderTabs = document.querySelectorAll('.slider-tab');
  const sliderIndicator = document.querySelector('.slider-indicator');
  const sliderControls = document.querySelector('.slider-controls');

  // Initialize swiper instance
  const swiper = new Swiper('.slider-container', {
    effect: 'fade',
    speed: 1300,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: '#slide-prev',
      nextEl: '#slide-next',
    },
    on: {
      // Update the indicator on slide change
      slideChange: () => {
        const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]);
        updateIndicator(sliderTabs[swiper.activeIndex], currentTabIndex);
      },
      // Disable autoplay once the slide reaches the end
      reachEnd: () => swiper.autoplay.stop(),
    },
  });

  // Update the indicator height and width
  function updateIndicator(tab, index) {
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
    sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;

    // Calculate the scroll position and scroll smoothly
    const scrollLeft =
      sliderTabs[index].offsetLeft - sliderControls.offsetWidth / 2 + sliderTabs[index].offsetWidth / 2;
    sliderControls.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }

  // Update the slide and pagination on tab click
  sliderTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      swiper.slideTo(index);
      updateIndicator(tab, index);
    });
  });

  updateIndicator(sliderTabs[0], 0);
  // Update the indicator with the current slide
  window.addEventListener('resize', () => updateIndicator(sliderTabs[swiper.activeIndex], 0));
}
