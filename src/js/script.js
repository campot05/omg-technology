// $(document).ready(function () {
// 	$('.slider').slick({
// 	  //  adaptiveHeight: true,
// 	  slidesToShow: 1,
// 	  centerMode: true,
// 	  //  centerPadding: '32px',
// 	  variableWidth: true,
// 	  speed: 250,
// 	  cssEase: 'linear',
// 	  initialSlide: 1,
// 	  waitForAnimate: false,
// 	});
//  });

import $ from 'jquery';
import 'slick-carousel';

$('.slider').slick({
  //  adaptiveHeight: true,
  slidesToShow: 3,
  centerMode: true,
  //  centerPadding: '32px',
  variableWidth: true,
  speed: 250,
  cssEase: 'linear',
  initialSlide: 1,
  waitForAnimate: false,
});
