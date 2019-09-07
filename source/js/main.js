'use strict';

var browserWidth = document.body.clientWidth;
var tabletWidth = 768;

var slide = document.querySelector('.slider__wrapper');
var btnBefore = document.querySelector('.slider__button--before');
var btnAfter = document.querySelector('.slider__button--after');

// header-nav toggle menu

var navToggle = document.querySelector('.header__toggle');
var navigation = document.querySelector('.header__nav');

navToggle.classList.remove('header__toggle--no-js');

if (browserWidth < tabletWidth) {
  navigation.style.display = 'none';
}

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('header__toggle--opened')) {
    navToggle.classList.remove('header__toggle--opened');
    navigation.style.display = 'none';
  } else {
    navToggle.classList.add('header__toggle--opened');
    navigation.style.display = 'block';
  }
});


// slider-mobile

if (browserWidth < tabletWidth) {
  btnBefore.addEventListener('click', function() {
    if (slide.classList.contains('slider__wrapper--after')) {
      slide.classList.remove('slider__wrapper--after');
    }
  });

  btnAfter.addEventListener('click', function() {
    if (!slide.classList.contains('slider__wrapper--after')) {
      slide.classList.add('slider__wrapper--after');
    }
  });

// slider-tablet

if (browserWidth >= tabletWidth) {
  var imgBefore = document.querySelector('.slider__before-wrapper');
  var imgAfter = document.querySelector('.slider__after-wrapper');

  btnBefore.addEventListener('click', function() {
    imgBefore.style.width = '100%';
    imgAfter.style.width = '0%';
  });

  btnAfter.addEventListener('click', function() {
    imgBefore.style.width = '0%';
    imgAfter.style.width = '100%';
  });
}
