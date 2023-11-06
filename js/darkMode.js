const darkMenuActive = document.getElementById('active-page');
const darkTitle = document.querySelector('.title');
const darkTitleText = document.getElementById('title-text');
const darkMainText = document.querySelector('.container');
const darkModeTextCanvas = document.querySelector('.mode-on');
const lightModeOffText = document.querySelector('.light-mode-on');
const darkModeOnText = document.querySelector('.dark-mode-on');
const darkFooter = document.querySelector('.footer ');
const darkResponsiveMenu = document.querySelector('.menu');
const darkResponsiveBorder = document.querySelector('.responsive-header');

function enableDarkMode() {
  // darkMenuActive.style.color = '#7289DA';
  // darkTitle.style.background = '#010409';
  // darkTitle.style.border = '2px solid rgba(255, 255, 255, 0.075)';
  // darkTitleText.style.color = '#7d8590';
  // darkMainText.style.color = '#7d8590';
  // darkModeTextCanvas.style.color = '#7289DA';
  lightModeOffText.style.display = 'none';
  darkModeOnText.style.display = 'block';
  // darkFooter.style.borderTop = '1.5px solid rgba(255, 255, 255, 0.075)';
  // darkResponsiveMenu.style.background = '#0D1117';
  // darkResponsiveBorder.style.borderBottom = '1.5px solid rgba(255, 255, 255, 0.075)';
  }

const lightMenuActive = document.getElementById('active-page');
const lightTitle = document.querySelector('.title');
const lightTitleText = document.getElementById('title-text');
const lightMainText = document.querySelector('.container');
const lightModeTextCanvas = document.querySelector('.mode-on');
const lightModeOnText = document.querySelector('.light-mode-on');
const darkModeOffText = document.querySelector('.dark-mode-on');
const lightFooter = document.querySelector('.footer')
const lightResponsiveMenu = document.querySelector('.menu');
const lightResponsiveBorder = document.querySelector('.responsive-header');

function enableLightMode() {  
  // lightMenuActive.style.color = '#B450B0';
  // lightTitle.style.background = 'white';
  // lightTitle.style.border = '1px solid lightgray';
  // lightTitleText.style.color = '#7C7C81';
  // lightMainText.style.color = '#7C7C81';
  // lightModeTextCanvas.style.color = '#B450B0';
  lightModeOnText.style.display = 'block';
  darkModeOffText.style.display = 'none';
  // lightFooter.style.borderTop = '1px solid lightgray';
  // lightResponsiveMenu.style.background = '#F3F2EE';
  // lightResponsiveBorder.style.borderBottom = '1px solid lightgray';
  }