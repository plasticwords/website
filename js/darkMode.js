// ? Simplify in chatGPT && Keep dark mode activated when move through site - burger menu JS may help, this line of code may also help:
// if (darkButton.classList.contains('active'))

// implement dark mode:
const darkButton = document.querySelector('.dark-mode');
const darkButtonResponsive = document.querySelector('.dark-mode-responsive');
const darkBackground = document.querySelector('html');
const darkTitle = document.querySelector('.title');
const darkTitleText = document.getElementById('title-text');
const darkMainText = document.querySelector('.container');
const darkMainTextBorder = document.querySelector('.text');
const darkResponsiveMenu = document.querySelector('.menu');
const darkResponsiveBorder = document.querySelector('.responsive-header');
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

darkButton.addEventListener('click', enableDarkMode);
darkButtonResponsive.addEventListener('click', enableDarkMode);

// display dark mode instructions:
darkButton.addEventListener('mouseover', () => {
  darkModeInstruct.style.display = 'inline-block';
});

darkButton.addEventListener('mouseout', () => { 
  darkModeInstruct.style.display = 'none';
});

// implement light mode:
const lightButton = document.querySelector('.light-mode');
const lightButtonResponsive = document.querySelector('.light-mode-responsive');
const lightBackground = document.querySelector('html');
const lightTitle = document.querySelector('.title');
const lightTitleText = document.getElementById('title-text');
const lightMainText = document.querySelector('.container');
const lightMainTextBorder = document.querySelector('.text');
const lightResponsiveMenu = document.querySelector('.menu');
const lightResponsiveBorder = document.querySelector('.responsive-header');
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

lightButton.addEventListener('click', enableLightMode);
lightButtonResponsive.addEventListener('click', enableLightMode);

// display light mode instructions:
lightButton.addEventListener('mouseover', () => {  
  lightModeInstruct.style.display = 'inline-block';
});

lightButton.addEventListener('mouseout', () => {  
  lightModeInstruct.style.display = 'none';
});