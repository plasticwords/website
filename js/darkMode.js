// ? Simplify in chatGPT && Keep dark mode activated when move through site - burger menu JS may help, this line of code may also help:
// if (darkButton.classList.contains('active'))

// Implement dark mode:
const darkButton = document.querySelector('.dark-mode');
const darkButtonResponsive = document.querySelector('.dark-mode-responsive');
const darkBackground = document.querySelector('html');
const darkTitle = document.querySelector('.title');
const darkTitleText = document.getElementById('title-text');
const darkMainText = document.querySelector('.container');
// const darkMainTextBorder = document.querySelector('.text'); // will keep border on footer grid
const darkFooter = document.querySelector('.footer ')
const darkResponsiveMenu = document.querySelector('.menu');
const darkResponsiveBorder = document.querySelector('.responsive-header');
const darkSocial = document.querySelectorAll('.social i'); // this is just for "About" page
const darkFooterSocial = document.querySelectorAll('.footer-social-link')
const darkModeInstruct = document.querySelector('.dark-mode-instruct');

// darkButton.addEventListener('click', () => {  
function enableDarkMode() {
  darkBackground.style.background = '#0D1117'; // dark charcoal black
  darkTitle.style.background = '#010409'; // very dark navy blue
  darkTitle.style.border = '#010409 2px solid';
  darkTitleText.style.color = '#7d8590'; // light silver
  darkMainText.style.color = '#7d8590';
  // darkMainTextBorder.style.borderBottom = '#010409 2px solid';
  darkFooter.style.borderTop = '#010409 2px solid';
  darkResponsiveMenu.style.background = '#0D1117';
  darkResponsiveBorder.style.borderBottom = '#010409 2px solid';
  // Loop for social icons:
  darkSocial.forEach(icon => {
      icon.style.color = '#7d8590';
    });
  darkFooterSocial.forEach(icon => {
      icon.style.color = '#7d8590';
    });
  }

darkButton.addEventListener('click', enableDarkMode);
darkButtonResponsive.addEventListener('click', enableDarkMode);

// Display dark mode instructions:
darkButton.addEventListener('mouseover', () => {
  darkModeInstruct.style.display = 'inline-block';
});

darkButton.addEventListener('mouseout', () => { 
  darkModeInstruct.style.display = 'none';
});

// Implement light mode:
const lightButton = document.querySelector('.light-mode');
const lightButtonResponsive = document.querySelector('.light-mode-responsive');
const lightBackground = document.querySelector('html');
const lightTitle = document.querySelector('.title');
const lightTitleText = document.getElementById('title-text');
const lightMainText = document.querySelector('.container');
// const lightMainTextBorder = document.querySelector('.text'); // will keep border on footer grid
const lightFooter = document.querySelector('.footer')
const lightResponsiveMenu = document.querySelector('.menu');
const lightResponsiveBorder = document.querySelector('.responsive-header');
const lightSocial = document.querySelectorAll('.social i'); // this is just for "About" page
const lightFooterSocial = document.querySelectorAll('.footer-social-link')
const lightModeInstruct = document.querySelector('.light-mode-instruct');

// lightButton.addEventListener('click', () => {  
function enableLightMode() {  
  lightBackground.style.background = '#F3F2EE';
  lightTitle.style.background = 'white';
  lightTitle.style.border = 'lightgray 1px solid';
  lightTitleText.style.color = '#7C7C81';
  lightMainText.style.color = '#7C7C81';
  // lightMainTextBorder.style.borderBottom = 'lightgray 1px solid';
  lightFooter.style.borderTop = 'lightgray 1px solid';
  lightResponsiveMenu.style.background = '#F3F2EE';
  lightResponsiveBorder.style.borderBottom = '1px solid lightgray';
  // Loop for social icons:
  lightSocial.forEach(icon => {
      icon.style.color = '#7C7C81';
    });
  lightFooterSocial.forEach(icon => {
      icon.style.color = '#7C7C81';
    });
  }

lightButton.addEventListener('click', enableLightMode);
lightButtonResponsive.addEventListener('click', enableLightMode);

// Display light mode instructions:
lightButton.addEventListener('mouseover', () => {  
  lightModeInstruct.style.display = 'inline-block';
});

lightButton.addEventListener('mouseout', () => {  
  lightModeInstruct.style.display = 'none';
});


  // Tried implementing Dark Mode on Services page, but it wasn't working. Here's what I came up with though:

  // const darkServiceDetail = document.querySelectorAll('.service-detail'); // just for services page

  // darkServiceDetail.forEach(detail => {
  //     detail.style.background = 'rgba(255, 255, 255, 0.85)';
  //       dark version not working, don't know why:
  //     detail.style.background = '#0D1117';
  //     detail.style.color = '#7d8590';
  //     detail.style.border = '2px solid #7d8590';
  //   });