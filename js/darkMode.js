// Implementing dark mode:
const darkButton = document.querySelector('.dark-mode');
const darkButtonResponsive = document.querySelector('.dark-mode-responsive');
const darkBackground = document.querySelector('html');
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
  darkBackground.style.background = '#0D1117'; // dark charcoal black
  darkMenuActive.style.color = '#7289DA'; // pastel/baby blue
  darkTitle.style.background = '#010409'; // very dark navy blue, almost black (was using it for borders)
  darkTitle.style.border = '2px solid rgba(255, 255, 255, 0.075)'; // 7.5% grey
  darkTitleText.style.color = '#7d8590'; // light silver
  darkMainText.style.color = '#7d8590';
  darkModeTextCanvas.style.color = '#7289DA';
  lightModeOffText.style.display = 'none';
  darkModeOnText.style.display = 'block';
  darkFooter.style.borderTop = '1.5px solid rgba(255, 255, 255, 0.075)';
  darkResponsiveMenu.style.background = '#0D1117';
  darkResponsiveBorder.style.borderBottom = '1.5px solid rgba(255, 255, 255, 0.075)';
  }

darkButton.addEventListener('click', enableDarkMode);
darkButtonResponsive.addEventListener('click', enableDarkMode);

// Implement light mode:
const lightButton = document.querySelector('.light-mode');
const lightButtonResponsive = document.querySelector('.light-mode-responsive');
const lightBackground = document.querySelector('html');
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
  lightBackground.style.background = '#F3F2EE';
  lightMenuActive.style.color = '#B450B0';
  lightTitle.style.background = 'white';
  lightTitle.style.border = 'lightgray 1px solid';
  lightTitleText.style.color = '#7C7C81';
  lightMainText.style.color = '#7C7C81';
  lightModeTextCanvas.style.color = '#B450B0';
  lightModeOnText.style.display = 'block';
  darkModeOffText.style.display = 'none';
  lightFooter.style.borderTop = 'lightgray 1px solid';
  lightResponsiveMenu.style.background = '#F3F2EE';
  lightResponsiveBorder.style.borderBottom = '1px solid lightgray';
  }

lightButton.addEventListener('click', enableLightMode);
lightButtonResponsive.addEventListener('click', enableLightMode);