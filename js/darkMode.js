// DARK MODE TO DO:
// read through JS to ensure it's accurate, dark == light
// clean and carry on with rest of site
// ? Keep constant across pages when move through site.
// ? Simplify in chatGPT

// implement dark mode:
const darkButton = document.querySelector('.dark-mode');
const darkButtonResponsive = document.querySelector('.dark-mode-responsive');
const darkBackground = document.querySelector('html');
const darkTitle = document.querySelector('.title');
const darkTitleText = document.getElementById('title-text');
const darkMainText = document.querySelector('.container');
const darkMainTextBorder = document.querySelector('.text');
const darkResponsiveMenu = document.querySelector('.menu');
const darkResponsiveBorder = document.querySelector('.responsive-menu');
const darkSocial = document.querySelectorAll('.social i');
const darkModeInstruct = document.querySelector('.dark-mode-instruct');

// darkButton.addEventListener('click', () => {  
function enableDarkMode() {
  darkBackground.style.background = '#0D1117'; // dark charcoal black
  darkTitle.style.background = '#010409'; // dark navy blue
  darkTitle.style.border = 'none';
  darkTitleText.style.color = '#7d8590'; // light silver
  darkMainText.style.color = '#7d8590'; // light silver
  darkMainTextBorder.style.borderBottom = '#010409 1px solid'; // dark navy blue
  darkResponsiveMenu.style.background = '#0D1117'; // dark charcoal black
  darkResponsiveBorder.style.borderBottom = '#010409 1px solid'; // dark navy blue  
  // loop for social icons:
  darkSocial.forEach(icon => {
      icon.style.color = '#7d8590'; // light silver
    });
  }
// });

darkButton.addEventListener('click', enableDarkMode);
darkButtonResponsive.addEventListener('click', enableDarkMode);

// dark mode instructions display::
darkButton.addEventListener('mouseover', () => {  
  darkModeInstruct.style.display = 'inline-block';
});

darkButton.addEventListener('mouseout', () => {  
  darkModeInstruct.style.display = 'none';
});

// if (darkButton.classList.contains('active'))
// if (lightButton.classList.contains('active'))

// implement light mode
const lightButton = document.querySelector('.light-mode');
const lightButtonResponsive = document.querySelector('.light-mode-responsive');
const lightBackground = document.querySelector('html');
const lightTitle = document.querySelector('.title');
const lightTitleText = document.getElementById('title-text');
const lightMainText = document.querySelector('.container');
const lightMainTextBorder = document.querySelector('.text');
const lightResponsiveMenu = document.querySelector('.menu');
const lightResponsiveBorder = document.querySelector('.responsive-menu');
const lightSocial = document.querySelectorAll('.social i');
const lightModeInstruct = document.querySelector('.light-mode-instruct');

// lightButton.addEventListener('click', () => {  
function enableLightMode() {  
  lightBackground.style.background = '#F3F2EE';
  lightTitle.style.background = 'white';
  lightTitle.style.border = 'lightgray 1px solid';
  lightTitleText.style.color = '#7C7C81';
  lightMainText.style.color = '#7C7C81';
  lightMainTextBorder.style.borderBottom = 'lightgray 1px solid';
  lightResponsiveMenu.style.background = '#F3F2EE';
  lightResponsiveBorder.style.borderBottom = '1px solid lightgray';
  // loop for social icons:
  lightSocial.forEach(icon => {
      icon.style.color = '#7C7C81';
    });
  }
// });

lightButton.addEventListener('click', enableLightMode);
lightButtonResponsive.addEventListener('click', enableLightMode);

// light mode instructions display:
lightButton.addEventListener('mouseover', () => {  
  lightModeInstruct.style.display = 'inline-block';
});

lightButton.addEventListener('mouseout', () => {  
  lightModeInstruct.style.display = 'none';
});

// ---------------------------------------
// UNUSED MENU JS:
// const darkMenu = document.querySelector('.menu');
// const darkActivePage = document.querySelector('#active-page');
// const darkMenuText = document.querySelectorAll('.menu a');

// darkMenu.style.color = 'grey';
// darkMenu.style.opacity = '0.75';
// darkActivePage.style.color = '#B450B0';
// darkActivePage.style.opacity = '1';

// darkMenuText.forEach(menu => {
//     menu.style.color = 'grey';
//     menu.style.opacity = '0.75';
//   });

// ---------------------------------------
// UNUSED BURGER MENU (DARK / LIGHT)

// Dark:
// const darkResponsiveBurger = document.querySelectorAll('.burger div');
// const darkResponsiveBurgerLine1 = document.querySelector('.line1');
// const darkResponsiveBurgerLine2 = document.querySelector('.line2');
// const darkResponsiveBurgerLine3 = document.querySelector('.line3');

  // darkResponsiveBurgerLine1.style.background = '#7d8590';
  // darkResponsiveBurgerLine1.style.border = '0.5px solid #7d8590';
  // darkResponsiveBurgerLine2.style.background = '#7d8590';
  // darkResponsiveBurgerLine2.style.border = '0.5px solid #7d8590';
  // darkResponsiveBurgerLine3.style.background = '#7d8590';
  // darkResponsiveBurgerLine3.style.border = '0.5px solid #7d8590';

// Light:
// const lightResponsiveBurger = document.querySelectorAll('.burger div');

// lightResponsiveBurger.forEach(burgerDiv => {
//   burgerDiv.style.background = 'lightgray';
//   burgerDiv.style.border = '1px solid gray';
// });

// ---------------------------------------
// UNUSED LOGO CHANGE (DARK / LIGHT)

// Dark:
// const lightLogoHide = document.querySelector('.light-logo');
// const darkLogoShow = document.querySelector('.dark-logo');
// const darkGradientText = document.querySelector('.gradient-text');

// lightLogoHide.style.display = 'none'; 
// darkLogoShow.style.display = 'block';
// darkGradientText.style.color = '#7d8590'; // light silver

// Light:
// const lightLogoShow = document.querySelector('.light-logo');
// const darkLogoHide = document.querySelector('.dark-logo');
// const lightGradientText = document.querySelector('.gradient-text');

// lightLogoShow.style.display = 'block'; 
// darkLogoHide.style.display = 'none';
// lightGradientText.style.color = '#B450B0';