const backgroundColor = document.querySelector('html');
// Dark:
const darkButton = document.querySelector('.dark-mode');
const darkButtonResponsive = document.querySelector('.dark-mode-responsive');
const darkModeInstruct = document.querySelector('.dark-mode-instruct');
// Light:
const lightButton = document.querySelector('.light-mode');
const lightButtonResponsive = document.querySelector('.light-mode-responsive');
const lightModeInstruct = document.querySelector('.light-mode-instruct');
// Corporate:
const corporateButton = document.querySelector('.corporate-mode');
const corporateButtonResponsive = document.querySelector('.corporate-mode-responsive');
const titleText = document.getElementById('title-text');
const titleTextCorporate = document.getElementById('title-text-corporate');

// Enable dark (default) mode:
function enableDarkMode() {
    document.body.classList.remove('lightmode');
    document.body.classList.remove('corporatemode');
    backgroundColor.style.background = '#0D1117';
    // Change title text:
    titleText.style.display = 'inline-block';
    titleTextCorporate.style.display = 'none';
    // Store the user's preference:
    localStorage.setItem('websiteMode', 'dark');
  }

// Enable light mode:
function enableLightMode() {
    document.body.classList.add('lightmode');
    document.body.classList.remove('corporatemode');
    backgroundColor.style.background = '#F3F2EE';
    // Change title text:
    titleText.style.display = 'inline-block';
    titleTextCorporate.style.display = 'none';
    // Store the user's preference:
    localStorage.setItem('websiteMode', 'light');
  }

// Enable corporate mode:
function enableCorporateMode() {
    document.body.classList.add('corporatemode');
    document.body.classList.remove('lightmode');
    backgroundColor.style.background = 'white';
    // Change title text:
    titleText.style.display = 'none';
    titleTextCorporate.style.display = 'inline-block';
    // Store the user's preference:
    localStorage.setItem('websiteMode', 'corporate');
}

// DELETE ME:

// Check IF user has dark mode preference and apply on page load:
// const modePreference = localStorage.getItem('darkMode');
// if (modePreference === 'enabled' || modePreference === null) { // Default to dark mode if preference isn't set - i.e. initital visit - or set to 'enabled'
//     enableDarkMode(); 
// } else {
//     enableLightMode(); 
// }

// Using key-value pairs in local storage, check if the user has selected a mode and apply on page load. Default to dark mode if none chosen:
document.addEventListener('DOMContentLoaded', function () {
  const savedMode = localStorage.getItem('websiteMode');
  if (savedMode === 'corporate') {
      enableCorporateMode();
  } else if (savedMode === 'light') {
      enableLightMode();
  } else {
      enableDarkMode();
  }
});

// // DELETE ME:

// const darkModePreference = localStorage.getItem('darkMode');
// const lightModePreference = localStorage.getItem('lightMode');
// const corporateModePreference = localStorage.getItem('corporateMode');

// if (corporateModePreference === 'enabled') {
//   enableCorporateMode();
// } else if (darkModePreference === 'enabled') {
//   enableDarkMode();
// } else {
//   enableLightMode();
// }

// Call the functions - i.e. event listeners for mode buttonsss:

darkButton.addEventListener('click', enableDarkMode);
darkButtonResponsive.addEventListener('click', enableDarkMode);
lightButton.addEventListener('click', enableLightMode);
lightButtonResponsive.addEventListener('click', enableLightMode);
corporateButton.addEventListener('click', enableCorporateMode);
corporateButtonResponsive.addEventListener('click', enableCorporateMode);

// Display dark mode instructions:
darkButton.addEventListener('mouseover', () => {
    darkModeInstruct.style.display = 'inline-block';
  });
  darkButton.addEventListener('mouseout', () => { 
    darkModeInstruct.style.display = 'none';
  });
  // Touch event for tablet touchscreen:
  darkButton.addEventListener('touchstart', () => {
    darkModeInstruct.style.display = 'inline-block';
    setTimeout(() => {
      darkModeInstruct.style.display = 'none';
    }, 3000); // 3000 milliseconds = 3 seconds
  });

// Display light mode instructions:
lightButton.addEventListener('mouseover', () => {  
    lightModeInstruct.style.display = 'inline-block';
  });
  lightButton.addEventListener('mouseout', () => {  
    lightModeInstruct.style.display = 'none';
  });
  // Touch event for tablet touchscreen:
  lightButton.addEventListener('touchstart', () => {
    lightModeInstruct.style.display = 'inline-block';
    setTimeout(() => {
      lightModeInstruct.style.display = 'none';
    }, 3000); // 3000 milliseconds = 3 seconds
  });